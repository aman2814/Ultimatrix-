import fs from 'node:fs';
import path from 'node:path';
import { getPrerenderRoutes, renderRoute } from '../src/entry-server';
import { getSiteBaseUrl } from '../src/seo/siteUrl';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const SHELL_PATH = path.join(DIST_DIR, 'index.html');
const SEO_BLOCK_REGEX = /<!--\s*SEO_META_START\s*-->[\s\S]*?<!--\s*SEO_META_END\s*-->/;
const HTML_TAG_REGEX = /<html\b[^>]*>/i;
const ROOT_DIV_REGEX = /<div\s+id="root"\s*><\/div>/;

function prerenderAllRoutes() {
  if (!fs.existsSync(SHELL_PATH)) {
    throw new Error(`Expected Vite build shell at ${SHELL_PATH}, but file was not found.`);
  }

  const template = fs.readFileSync(SHELL_PATH, 'utf-8');
  if (!SEO_BLOCK_REGEX.test(template)) {
    throw new Error('Could not find <!-- SEO_META_START -->...<!-- SEO_META_END --> markers in dist/index.html.');
  }
  if (!ROOT_DIV_REGEX.test(template)) {
    throw new Error('Could not find <div id="root"></div> mount point in dist/index.html.');
  }

  const baseUrl = getSiteBaseUrl();
  const routes = getPrerenderRoutes(baseUrl);

  let renderedCount = 0;
  for (const { routePath, outputRelativePath } of routes) {
    const { appHtml, headHtml, langAttr, dirAttr } = renderRoute(routePath, baseUrl);

    let html = template;
    html = html.replace(HTML_TAG_REGEX, () => `<html lang="${langAttr}" dir="${dirAttr}">`);
    html = html.replace(SEO_BLOCK_REGEX, () => headHtml);
    html = html.replace(ROOT_DIV_REGEX, () => `<div id="root">${appHtml}</div>`);

    const targetFile = path.join(DIST_DIR, outputRelativePath);
    fs.mkdirSync(path.dirname(targetFile), { recursive: true });
    fs.writeFileSync(targetFile, html, 'utf-8');
    renderedCount += 1;
  }

  console.log(`[ssg] Pre-rendered ${renderedCount} static HTML routes into ${DIST_DIR}`);
}

prerenderAllRoutes();
