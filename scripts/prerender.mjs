import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const dataSourcePath = path.join(rootDir, 'src', 'data', 'data.ts');
const tempDir = path.join(rootDir, '.tmp-prerender');
const tempDataPath = path.join(tempDir, 'data.mjs');
const siteUrl = (process.env.SITE_URL || 'https://my-ai-navigator.vercel.app').replace(/\/$/, '');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function paragraphHtml(text) {
  return String(text)
    .split(/\n\n+/)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join('\n');
}

function pageShell(appShell, { title, description, canonicalPath, content }) {
  const seoStyle = `<style id="seo-prerender-style">
    #root:has(#seo-prerender-content){font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f8fafc;color:#0f172a}
    #seo-prerender-content{max-width:960px;margin:0 auto;padding:40px 20px 64px}
    #seo-prerender-content a{color:#4f46e5;text-decoration:none}
    #seo-prerender-content h1{font-size:clamp(2rem,5vw,4rem);line-height:1;margin:0 0 16px}
    #seo-prerender-content h2{font-size:1.5rem;margin:36px 0 12px}
    #seo-prerender-content h3{font-size:1.05rem;margin:20px 0 6px}
    #seo-prerender-content p,#seo-prerender-content li{line-height:1.75;color:#334155}
    #seo-prerender-content .lead{font-size:1.125rem;color:#475569}
    #seo-prerender-content .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}
    #seo-prerender-content .card{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px}
    #seo-prerender-content .nav{display:flex;flex-wrap:wrap;gap:10px;margin:24px 0 40px}
  </style>`;

  return appShell
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace('</head>', `    <link rel="canonical" href="${siteUrl}${canonicalPath}" />\n    ${seoStyle}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${content}</div>`);
}

function domainPage(appShell, domain, domainsData) {
  const description = domain.principles.simple || domain.principles.content.slice(0, 150);
  const vendors = domain.vendors
    .map(
      (vendor) => `<article class="card">
        <h3>${escapeHtml(vendor.name)}</h3>
        <p>${escapeHtml(vendor.origin)}</p>
        <ul>${vendor.models.map((model) => `<li>${escapeHtml(model.name)}：${escapeHtml(model.type)}，${escapeHtml(model.status)}</li>`).join('')}</ul>
      </article>`,
    )
    .join('\n');
  const history = domain.history
    .map((item) => `<li><strong>${escapeHtml(item.year)} ${escapeHtml(item.title)}</strong>：${escapeHtml(item.desc)}</li>`)
    .join('\n');
  const nav = domainsData
    .map((item) => `<a href="/domains/${item.id}/">${escapeHtml(item.name)}</a>`)
    .join('\n');

  return pageShell(appShell, {
    title: `${domain.name} | AI Navigator 2026`,
    description,
    canonicalPath: `/domains/${domain.id}/`,
    content: `<main id="seo-prerender-content">
      <a href="/">AI Navigator 2026</a>
      <h1>${escapeHtml(domain.name)}</h1>
      <p class="lead">${escapeHtml(description)}</p>
      <nav class="nav" aria-label="领域导航">${nav}</nav>
      <section>
        <h2>${escapeHtml(domain.principles.title)}</h2>
        ${paragraphHtml(domain.principles.content)}
      </section>
      <section>
        <h2>AI 厂商图谱</h2>
        <div class="grid">${vendors}</div>
      </section>
      <section>
        <h2>技术演进时间线</h2>
        <ol>${history}</ol>
      </section>
    </main>`,
  });
}

function homePage(appShell, domainsData, generalTimeline) {
  const domainCards = domainsData
    .map(
      (domain) => `<article class="card">
        <h2><a href="/domains/${domain.id}/">${escapeHtml(domain.name)}</a></h2>
        <p>${escapeHtml(domain.principles.simple || domain.principles.title)}</p>
      </article>`,
    )
    .join('\n');
  const timeline = generalTimeline
    .map((item) => `<li><strong>${escapeHtml(item.year)} ${escapeHtml(item.title)}</strong>：${escapeHtml(item.desc)}</li>`)
    .join('\n');

  return pageShell(appShell, {
    title: 'AI Navigator 2026 | AI 行业全景导航器',
    description: 'AI 行业全景知识导航器，覆盖文本、视觉、视频、音频、具身智能与算力硬件六大前沿赛道。',
    canonicalPath: '/',
    content: `<main id="seo-prerender-content">
      <h1>AI Navigator 2026</h1>
      <p class="lead">AI 行业全景知识导航器，覆盖六大前沿赛道的深度解析、厂商图谱与技术演进时间线。</p>
      <section class="grid">${domainCards}</section>
      <section>
        <h2>AI 行业宏大编年录</h2>
        <ol>${timeline}</ol>
      </section>
    </main>`,
  });
}

async function loadData() {
  await fs.mkdir(tempDir, { recursive: true });
  const source = await fs.readFile(dataSourcePath, 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
      verbatimModuleSyntax: false,
    },
  });
  await fs.writeFile(tempDataPath, output.outputText, 'utf8');
  return import(`${pathToFileURL(tempDataPath).href}?t=${Date.now()}`);
}

async function writeText(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, 'utf8');
}

const { domainsData, generalTimeline } = await loadData();
const appShell = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

await writeText(path.join(distDir, 'index.html'), homePage(appShell, domainsData, generalTimeline));

for (const domain of domainsData) {
  await writeText(path.join(distDir, 'domains', domain.id, 'index.html'), domainPage(appShell, domain, domainsData));
}

const urls = ['/', ...domainsData.map((domain) => `/domains/${domain.id}/`)];
await writeText(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${siteUrl}${url}</loc></url>`).join('\n')}
</urlset>
`,
);

await writeText(
  path.join(distDir, 'robots.txt'),
  `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`,
);

await fs.rm(tempDir, { recursive: true, force: true });
console.log(`Prerendered ${urls.length} SEO pages.`);
