import comp from "D:/Web/Github/JinShan-RelayProtection/docs/.vuepress/.temp/pages/Page/TEST.html.vue"
const data = JSON.parse("{\"path\":\"/Page/TEST.html\",\"title\":\"TEST 测试\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"遥信点表\",\"slug\":\"遥信点表\",\"link\":\"#遥信点表\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"Page/TEST.md\"}")
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
