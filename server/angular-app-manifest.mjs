
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Assignment1Angular/',
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
    'index.csr.html': {size: 5326, hash: '17e79273b2976d6b9c6c9fc3ccb42d9a5db586024b12681411d8f53de4893dc9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 968, hash: '8f36693ced002425bb3b5b8b1cbd5b9b36fb006f66e01ecf87b4a42bf1ae720b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 21364, hash: '103a009868a6ea809ece132c5b5d05613f830fe4a78a2857bf36724b82bbde13', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18997, hash: '6669b6a63bfc82f2c20d2b2f9991860470da84dadb5f90bd536ab7e14f4eb7b5', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 23358, hash: 'b6a2a6e6eac4af1644295b97a539b455f6cb65c3b25fb99635013a0590c94519', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-Y7VYKVKL.css': {size: 304851, hash: 'REHL8Vr1afM', text: () => import('./assets-chunks/styles-Y7VYKVKL_css.mjs').then(m => m.default)}
  },
};
