import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';
import {renderRobotsTxt} from './src/seo/robots';
import {renderSitemapXml} from './src/seo/sitemap';

export default defineConfig(() => {
  return {
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    plugins: [
      react(),
      tailwindcss(),
      // Dynamically serves /sitemap.xml and /robots.txt in dev and emits them to dist/ on build.
      {
        name: 'dynamic-seo-assets',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const urlPath = req.url?.split('?')[0];
            if (urlPath === '/sitemap.xml') {
              try {
                const mod = await server.ssrLoadModule('/src/seo/sitemap.ts');
                const xml = mod.renderSitemapXml();
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/xml; charset=utf-8');
                res.end(xml);
                return;
              } catch (err) {
                next(err);
                return;
              }
            }
            if (urlPath === '/robots.txt') {
              try {
                const mod = await server.ssrLoadModule('/src/seo/robots.ts');
                const txt = mod.renderRobotsTxt();
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end(txt);
                return;
              } catch (err) {
                next(err);
                return;
              }
            }
            next();
          });
        },
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          if (fs.existsSync(distDir)) {
            fs.writeFileSync(path.join(distDir, 'sitemap.xml'), renderSitemapXml(), 'utf-8');
            fs.writeFileSync(path.join(distDir, 'robots.txt'), renderRobotsTxt(), 'utf-8');
          }
        },
      },
      // Copies src/assets into dist/ so root-relative URLs like
      // "/src/assets/images/..." (e.g. generate_image output) still resolve
      // in production builds. Do not remove.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
