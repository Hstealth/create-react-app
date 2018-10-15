import React from 'react'
import { connect } from "react-redux";
import Component, { mapFn, mapStateProps,Link } from "../../lib/component";
import { dispatch_common_func } from "../../redux/common";
import { Icon, Button } from 'antd'
import style from './index.module.scss'

@connect(
  mapStateProps("common"),
  mapFn(dispatch_common_func)
)
class Index extends Component {
  componentDidMount() {
    console.log(process.env)
    this.$http.get(this.apiUrl.collected,{aaa:'aa'}).then(res => {
      console.log(res)
    })
  }
  render() {
    return <div className={style.body}>
      <div style={{color:'#000000'}}>aa{this.props.locationData}</div>
      <Button type="primary">Pri111mary</Button>
      <Icon type="step-backward" theme="outlined" />
      <Link to="/dvscreen"> 12</Link>
    </div>
  }
}
export default Index