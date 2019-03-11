
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'catalog', name: 'Catalog', component: () => import('pages/Catalog.vue') },
      { path: 'newobject', name: 'newObject', component: () => import('pages/NewObject.vue') },
      { path: 'objectImage', name: 'objectImage', component: () => import('pages/ObjectImage.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
