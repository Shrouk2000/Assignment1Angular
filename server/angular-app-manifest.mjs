
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Shrouk2000.github.io/Assignment1Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Assignment1Angular/about",
    "route": "/Assignment1Angular"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1Angular/about"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1Angular/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1Angular/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5354, hash: 'e406262f6b3011e52045cad58640d378c180e21a350acde134427d2d9c310316', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '681022424f1457aa9af75dc66c39b06419ffb5a1e08468052c601361e2159ea9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19137, hash: '03829893382d57bb95df3203d9351082fa098efba5f1deef71d536d1018633dd', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 21504, hash: '61df87c75de6e8e536fa081466e1afedec1ce9330942a9531eeab20060241c4e', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 23498, hash: 'b53d5874a12591149f259c11007cefb38f39bb059f88166cc4b113e81a1f5dd8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-Y7VYKVKL.css': {size: 304851, hash: 'REHL8Vr1afM', text: () => import('./assets-chunks/styles-Y7VYKVKL_css.mjs').then(m => m.default)}
  },
};
