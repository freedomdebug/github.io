import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-6ce48554","/contributing.html",{"title":"contributing.md页面的标题"},["/contributing","/contributing.md"]],
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-fb0f0066","/guide/getting-started.html",{"title":"guide getting-started.md页面的标题"},["/guide/getting-started","/guide/getting-started.md"]],
  ["v-0978b044","/guide/markdown.html",{"title":""},["/guide/markdown","/guide/markdown.md"]],
  ["v-fffb8e28","/guide/",{"title":"guide README.md页面的标题"},["/guide/index.html","/guide/README.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
