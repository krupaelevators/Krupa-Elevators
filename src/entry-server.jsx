import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Writable } from 'node:stream';
import App from './App.jsx';
import { SeoContext } from './components/common/Seo.jsx';

/**
 * Build-time renderer used by scripts/prerender.mjs. Waits for every lazy route
 * chunk (onAllReady) so the HTML contains the full page, then returns it along
 * with the head values the page's <Seo> reported.
 */
export function render(url) {
  const collector = { seo: null };
  return new Promise((resolve, reject) => {
    let html = '';
    const sink = new Writable({
      write(chunk, _enc, cb) { html += chunk.toString(); cb(); },
      final(cb) { resolve({ html, seo: collector.seo }); cb(); },
    });
    const stream = renderToPipeableStream(
      <SeoContext.Provider value={collector}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoContext.Provider>,
      {
        onAllReady() { stream.pipe(sink); },
        onShellError: reject,
        onError: reject,
      }
    );
  });
}

// ---------------------------------------------------------------------------
// Every indexable URL. Detail pages come from the same data the router uses,
// so a new elevator/door/interior is prerendered and added to the sitemap
// automatically.
// ---------------------------------------------------------------------------
import { elevatorMaster } from './data/elevatorMaster.js';
import { allDoors } from './data/doorsMaster.js';
import { basicSeries, standardSeries, semiDesignerSeries, premiumSeries } from './data/interiorsSeriesData.js';

export const routes = [
  '/',
  '/about',
  '/about/projects',
  '/products',
  '/products/elevators',
  ...elevatorMaster.map((e) => `/products/elevators/${e.id}`),
  '/products/doors',
  ...allDoors.map((d) => `/products/doors/${d.id}`),
  '/products/interiors',
  ...[basicSeries, standardSeries, semiDesignerSeries, premiumSeries]
    .flatMap((s) => s.models)
    .map((m) => `/products/interiors/${m.id}`),
  '/products/technology',
  '/products/architects-corner',
  '/services',
  '/services/amc-maintenance',
  '/services/modernization',
  '/services/installation',
  '/services/emergency-support',
  '/contact',
];
export { SITE_URL, absoluteUrl } from './config/site.js';
