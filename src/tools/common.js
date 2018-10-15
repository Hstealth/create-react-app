import Moment from 'moment'
//判断对象是否为空
export const isNullValue = (input) => {
  return input === undefined || input === null || input === '' || (String)(input).trim() === '';
};


/* 时间戳转日期 */
export const formatDateTime = (timeStamp) => {
  if (timeStamp !== null && timeStamp !== '') {
    var date = new Date();
    date.setTime(timeStamp);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
  } else {
    return '';
  }
}


//获取URL参数
export const getQueryParam = (key) => {
  let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
  let search = window.location.search
  let result = search.substr(1).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
};

//获取指定名称的cookie的值
export const getCookie = (objName) => {
  var arrStr = document.cookie.split("; ");
  for (var i = 0; i < arrStr.length; i++) {
    var temp = arrStr[i].split("=");
    if (temp[0] === objName) return unescape(temp[1]);
  }
  return "";
}

//设置cookie的值
export const setCookie = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + escape(cvalue) + "; " + expires;
}


//获取当前日期
export const getNowFormatDate = () => {
  let date = new Date();
  let seperator1 = "-";
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return year + seperator1 + month + seperator1 + strDate;
};






//获取静态资源的部署路径
export const public_url = process.env.PUBLIC_URL;


//区分开发环境，用于开发环境环境设置值
export const returnVal = (devValue, value) => {
  if (process.env.NODE_ENV === 'development') {
    return devValue;
  }
  else {
    return value;
  }
};

//时间格式化
export const formatDate = (format, times) => {
  var newDate = new Date(times);
  var date = {
    "M+": newDate.getMonth() + 1,
    "d+": newDate.getDate(),
    "h+": newDate.getHours(),
    "m+": newDate.getMinutes(),
    "s+": newDate.getSeconds(),
    "q+": Math.floor((newDate.getMonth() + 3) / 3),
    "S+": newDate.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1
        ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
    }
  }
  return format;
}


//输入时间戳返回 (data)=> 1 今天内，data为相差小时  2 本月内，data为几天前 3 超过一个月，data为输入时间日期
export const transformTime = (time) => {
  // let oneDay = 24 * 60 * 60 * 1000
  let nowTime = new Date().getTime()

  //获取今天24点的时间戳
  // var todayYear = (new Date()).getFullYear();
  // var todayMonth = (new Date()).getMonth();
  // var todayDay = (new Date()).getDate();
  // var todayTime = (new Date(todayYear, todayMonth, todayDay)).getTime() + oneDay;//毫秒

  let differ = Math.floor((nowTime - time) / 1000 / 60 / 60) //相差多少小时
  let differDay = Math.floor(differ / 24)
  if (differ < 24) {
    // return {type:1,data:differ}
    return differ + '小时前'
  }
  else {
    if (differDay > 30) {
      // return {data:Moment(time).format('YYYY-MM-DD'),type:3}
      return Moment(time).format('YYYY-MM-DD')
    } else {
      // return {data:differDay,type:2}
      return differDay + '天前'
    }
  }
}







