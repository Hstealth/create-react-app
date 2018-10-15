
let apiUrlobj = {
  collected: '/convenienceservice/bm-data/collected',//累计提供便民服务
  futurePlan: '/dv/linkdonate/childdv/json',//未来成长计划
  allDonateCount: '/dv/linkdonate/allDonateCount/json',//累计筹款金额
  personAmount: '/convenienceservice/bm-data/personAmount',//累计服务人次
  ryjdv: '/dv/linkdonate/ryjdv/json?pageNo=1&pageSize=10000',//任意捐项目
  ranking: '/convenienceservice/bm-data/ranking',//门店便民服务排行榜
  donate36Data: '/dv/linkdonate/donate36Data/json',//最近十个有捐款的城市
  staticData: '/convenienceservice/bm-data/static',//爱心小学、图书馆、电脑室
  sqDetail: '/dv/linkdonate/sqDetail/json?code=RY-201811-14',//司庆大爱公益
  sqTop5Man: '/dv/linkdonate/sqTop5Man/json?code=RY-201811-14',//司庆善长仁翁top5
  donate5Data:'/dv/linkdonate/donate5Data/json',//捐赠动态5条数据
}



export const apiUrl = apiUrlobj;

