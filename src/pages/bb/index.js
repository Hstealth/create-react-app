import React from 'react'
import Component, { mapFn, mapStateProps, Link } from "../../lib/component";
import style from './index.module.scss'

export default class Index extends Component {
  render(){
    return <div className={style.body}>bb
    <Link to="/">aa</Link>
    </div>
  }
}