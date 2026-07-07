#!/usr/bin/env node
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PROJECT_PATH = '/Users/chenlianpeng/Desktop/webOversea/invoicegen';

console.error('Deploying InvoiceGen to Vercel...');
console.error('');

const result = spawnSync('vercel', ['--yes', '--prod'], {
  cwd: PROJECT_PATH,
  encoding: 'utf8',
  stdio: ['inherit', 'pipe', 'pipe'],
  timeout: 300000,
});

const output = (result.stdout || '') + (result.stderr || '');
console.error(output);

if (result.status !== 0) {
  console.error('Deployment failed');
  process.exit(1);
}

const aliasedMatch = output.match(/Aliased:\s*(https:\/\/[a-zA-Z0-9.-]+\.vercel\.app)/i);
const productionUrl = aliasedMatch ? aliasedMatch[1] : null;
const deploymentMatch = output.match(/Production:\s*(https:\/\/[a-zA-Z0-9.-]+\.vercel\.app)/i);
const deploymentUrl = deploymentMatch ? deploymentMatch[1] : null;
const finalUrl = productionUrl || deploymentUrl;

if (finalUrl) {
  console.error('');
  console.error('Deployment successful!');
  console.error('Site URL: ' + finalUrl);
  console.log(JSON.stringify({ status: 'success', url: finalUrl }));
} else {
  console.log(JSON.stringify({ status: 'success', message: 'Deployment successful' }));
}
