import fs from 'node:fs';
import path from 'node:path';

const webDemoRoot = process.cwd();
const repoRoot = path.resolve(webDemoRoot, '..');

const requiredRepoFiles = [
  'README.md',
  'PROJECT.md',
  'TASK.md',
  'RULES.md',
  'CHANGELOG.md',
  'DESIGN_INBOX/README.md'
];

const removedRepoFiles = [
  'WORKFLOW.md',
  'ROLES.md',
  'AI_CONTRACT.md',
  'CONTROL_REVIEW.md',
  'DESIGN_INBOX/CHILD_WORKSPACE_README_TEMPLATE.md',
  'DESIGN_INBOX/SCHEME_NOTE_TEMPLATE.md',
  'DESIGN_INBOX/SYSTEM_NOTE_TEMPLATE.md',
  'GPT_DEMO/README.md',
  'UNITY_PROJECT/README.md',
  '_archive/README.md'
];

const requiredWebDemoFiles = [
  'README.md',
  'package.json',
  'index.html',
  'vite.config.js',
  'run_web_demo.bat',
  'src/main.js',
  'design/rule_baseline.md',
  'design/migration_audit.md',
  'tests/check_project_structure.mjs'
];

const requiredWebDemoDirs = [
  'src',
  'public',
  'public/assets',
  'public/assets/data',
  'public/assets/data/csv',
  'public/assets/data/json',
  'design',
  'tests'
];

const missing = [];
const unexpected = [];

for (const file of requiredRepoFiles) {
  const target = path.join(repoRoot, file);
  if (!fs.existsSync(target)) {
    missing.push(file);
  }
}

for (const file of requiredWebDemoFiles) {
  const target = path.join(webDemoRoot, file);
  if (!fs.existsSync(target)) {
    missing.push(`WEB_DEMO/${file}`);
  }
}

for (const dir of requiredWebDemoDirs) {
  const target = path.join(webDemoRoot, dir);
  if (!fs.existsSync(target) || !fs.statSync(target).isDirectory()) {
    missing.push(`WEB_DEMO/${dir}/`);
  }
}

for (const file of removedRepoFiles) {
  const target = path.join(repoRoot, file);
  if (fs.existsSync(target)) {
    unexpected.push(file);
  }
}

if (missing.length > 0) {
  console.error('Project structure check failed. Missing required paths:');
  for (const item of missing) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

if (unexpected.length > 0) {
  console.error('Project structure check failed. These old files should have been removed:');
  for (const item of unexpected) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

const packageJsonPath = path.join(webDemoRoot, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

if (!packageJson.scripts?.dev || !packageJson.scripts?.build || !packageJson.scripts?.check) {
  console.error('Project structure check failed. package.json must include dev, build, and check scripts.');
  process.exit(1);
}

console.log('Project structure check passed.');
