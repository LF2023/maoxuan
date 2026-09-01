#!/usr/bin/env node
// Validates the mxskill repo:
//   1. required files exist
//   2. test-prompts.json is valid JSON with the expected structure
//   3. SKILL.md has complete YAML frontmatter and version matches test-prompts.json
//   4. local markdown links in the docs resolve to existing files
// Usage: node .github/scripts/validate.mjs [repo-root]
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), '..', '..'));
const errors = [];
const ok = (msg) => console.log('  \u2713', msg);
const bad = (msg) => { errors.push(msg); console.error('  \u2717', msg); };

// --- 1. required files ---
const requiredFiles = ['README.md', 'README_en.md', 'skills/mxs/INDEX.md', 'skills/mxs/SKILL.md', 'test-prompts.json', 'LICENSE', '新手入门.md'];
console.log('Checking required files...');
for (const f of requiredFiles) {
  if (existsSync(join(root, f))) ok(`file exists: ${f}`);
  else bad(`missing required file: ${f}`);
}

// --- 2. test-prompts.json ---
console.log('Checking test-prompts.json...');
let tp = null;
try {
  tp = JSON.parse(readFileSync(join(root, 'test-prompts.json'), 'utf8'));
  ok('test-prompts.json is valid JSON');
} catch (e) {
  bad(`test-prompts.json is not valid JSON: ${e.message}`);
}
if (tp) {
  for (const key of ['skill', 'version', 'description']) {
    if (typeof tp[key] === 'string' && tp[key].length) ok(`test-prompts.json.${key} present`);
    else bad(`test-prompts.json.${key} missing or empty`);
  }
  if (!Array.isArray(tp.tests) || tp.tests.length === 0) {
    bad('test-prompts.json.tests must be a non-empty array');
  } else {
    let triggers = 0, distractors = 0;
    tp.tests.forEach((t, i) => {
      const id = `test #${i + 1}`;
      if (t.type === 'trigger') {
        triggers++;
        if (typeof t.unit !== 'string' || !/^U\d+$/.test(t.unit)) bad(`${id}: trigger test missing valid unit field (got '${t.unit}')`);
      } else if (t.type === 'distractor') {
        distractors++;
      } else {
        bad(`${id}: type must be 'trigger' or 'distractor', got '${t.type}'`);
      }
      if (typeof t.prompt !== 'string' || !t.prompt.trim()) bad(`${id}: prompt missing or empty`);
      if (typeof t.expect !== 'string' || !t.expect.trim()) bad(`${id}: expect missing or empty`);
    });
    if (triggers === 0) bad('test-prompts.json has no trigger tests');
    if (distractors === 0) bad('test-prompts.json has no distractor tests');
    ok(`test-prompts.json: ${tp.tests.length} tests (${triggers} trigger, ${distractors} distractor)`);
  }
}

// --- 3. SKILL.md frontmatter ---
console.log('Checking SKILL.md frontmatter...');
const skillText = readFileSync(join(root, 'skills/mxs/SKILL.md'), 'utf8');
const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(skillText);
if (!fm) {
  bad('SKILL.md missing YAML frontmatter');
} else {
  const kv = {};
  for (const line of fm[1].split(/\r?\n/)) {
    const m = /^([A-Za-z0-9_]+):\s*(.*)$/.exec(line);
    if (m) kv[m[1]] = m[2].replace(/^"|"$/g, '');
  }
  for (const key of ['name', 'version', 'description', 'license']) {
    if (typeof kv[key] === 'string' && kv[key].length) ok(`SKILL.md frontmatter.${key} present`);
    else bad(`SKILL.md frontmatter missing '${key}'`);
  }
  if (tp && kv.version && tp.version !== kv.version) {
    bad(`version mismatch: SKILL.md='${kv.version}' vs test-prompts.json='${tp.version}'`);
  }
}

// --- 4. local markdown links ---
console.log('Checking local markdown links...');
for (const f of requiredFiles.filter((x) => x.endsWith('.md'))) {
  if (!existsSync(join(root, f))) continue;
  const text = readFileSync(join(root, f), 'utf8');
  const re = /\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(text))) {
    const raw = m[1].trim();
    if (/^(https?:|mailto:|#)/.test(raw)) continue;
    const target = raw.split('#')[0].split('?')[0];
    if (!target) continue;
    if (!existsSync(join(root, target))) bad(`${f}: broken link './${target}'`);
  }
}
ok('all local markdown links resolve');

if (errors.length) {
  console.error(`\n${errors.length} validation error(s) found.`);
  process.exit(1);
}
console.log('\nAll checks passed.');
