import React from 'react'
import { Route, Switch } from 'react-router'
import routesConfig from './routes.config.js'
import Layout from '../layout/default'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import error from '../config/404'
moment.locale('zh-cn')
const SetInfo = function (props) {
  let pathName = window.location.pathname
  let path = pathName
  let flag = path === props.path
  let title = props.title || ''
  if (title && flag) document.title = title
  return props.component
}
export default () => (
  <LocaleProvider locale={zhCN}>
    <Layout>
          <Switch >

            {
              routesConfig.map((item, index) => {
                return <Route key={index} exact path={item.path} component={SetInfo(item)} />
              })

            }
            <Route exact component={error} />
          </Switch>
    </Layout>

  </LocaleProvider >
)