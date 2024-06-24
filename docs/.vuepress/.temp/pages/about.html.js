import comp from "D:/Web/Github/JinShan-RelayProtection/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/images/goodlogo.png\",\"actions\":[{\"text\":\"开始\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"关于\",\"link\":\"/#\",\"type\":\"secondary\"}],\"footer\":\"MIT Licensed | Copyright © 2024 金山继保\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"about.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
