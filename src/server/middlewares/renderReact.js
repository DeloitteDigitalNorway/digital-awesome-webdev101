// Dependencies
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import App from '../../client/components/Root';
import Html from '../components/Html';

// Add hot reloading
if (module.hot) module.hot.accept('../../client/components/App');

// Exports
export default (stats, assets, preload = []) => {
  // Load bundles list
  const { bundleJs, bundleCss } = Object.entries(stats.assetsByChunkName).reduce(
    (acc, [k, v]) => {
      (Array.isArray(v) ? v : [v]).forEach(f => {
        if (f.endsWith('.js')) acc.bundleJs.push(assets[`${k}.js`]);
        else if (f.endsWith('.css')) acc.bundleCss.push(assets[`${k}.css`]);
      });
      return acc;
    },
    { bundleJs: [], bundleCss: [] },
  );

  // Fetch preloaded assets
  const preloadedAssets = preload.map(f => assets[f]);

  // Find manifest
  let manifest = Object.keys(assets).find(k => /^manifest\.[a-f0-9]+\.json/.test(k));
  if (manifest) manifest = assets[manifest];

  // Return react rendering middleware
  return function renderReact(req, res) {
    const body = renderToString(<App />);
    const html = renderToStaticMarkup(
      <Html
        body={body}
        bundleJs={bundleJs}
        bundleCss={bundleCss}
        manifest={manifest}
        preload={preloadedAssets}
      />,
    );
    return res.send(html);
  };
};
