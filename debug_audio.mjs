import { chromium } from 'playwright';
const { execSync } = await import('child_process');

const browser = await chromium.launch({ headless: false }); // visível para testar autoplay
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

const logs = [];
const errors = [];
page.on('console', m => logs.push(`[${m.type()}] ${m.text()}`));
page.on('pageerror', e => errors.push(e.message));

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle', timeout: 20000 });
await page.waitForTimeout(5500); // intro animation

// Tenta clicar no botão play
const playBtn = page.locator('button').filter({ hasText: '' }).nth(0);

// Verifica se o audio src foi setado
const audioSrc = await page.evaluate(() => {
  const audio = document.querySelector('audio');
  return {
    src: audio?.src,
    error: audio?.error?.message,
    networkState: audio?.networkState,
    readyState: audio?.readyState,
  };
});
console.log('Audio state:', JSON.stringify(audioSrc, null, 2));

// Tenta forçar play via JS
const playResult = await page.evaluate(async () => {
  const audio = document.querySelector('audio');
  if (!audio) return 'no audio element';
  try {
    await audio.play();
    return 'playing: ' + !audio.paused;
  } catch(e) {
    return 'error: ' + e.message;
  }
});
console.log('Play result:', playResult);

// Fetch direto do arquivo para ver se existe
const fileCheck = await page.evaluate(async () => {
  const audio = document.querySelector('audio');
  if (!audio?.src) return 'no src';
  try {
    const r = await fetch(audio.src, { method: 'HEAD' });
    return `${r.status} ${r.statusText}`;
  } catch(e) {
    return 'fetch error: ' + e.message;
  }
});
console.log('File check:', fileCheck);

console.log('Console logs:', logs.slice(0, 10));
console.log('Page errors:', errors);

await browser.close();
