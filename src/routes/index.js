import React from 'react'
import { Route, Switch } from 'react-router'
import routesConfig from './routes.config.js'
const SetInfo = function (props) {
  let pathName = window.location.pathname
  let path = pathName
  let flag = path === props.path
  let title = props.title || ''
  if (title && flag) document.title = title
  return props.component
}
export default () => (
  <Switch>
    {
      routesConfig.map((item, index) => {
        return <Route key={index} exact path={item.path} component={SetInfo(item)} />
      })

    }
  </Switch>
)