
import LoadableFunc from "../lib/loadable"
const Arr = [
  { url: "aa", path: "/homePage", title: "首页" },
  { url: "bb", path: "/dvscreen/", title: "公益大屏" },
  { url: "404", path: "/404", title: "公益大屏" },
];









Arr.forEach(item => {
  item.component = LoadableFunc(() => import(`../pages/${item.url}`))
})
//路由表
export default Arr