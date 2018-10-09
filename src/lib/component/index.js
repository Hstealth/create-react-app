/**
 * Created by huangyongye dashen on 2018/5/16.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { api } from  '~T/apiRequest'
import  Links from '../Link'
import {bindActionCreators} from 'redux'
import { apiUrl } from '../../config'
import { public_url } from '../../tools/common'
export default class Component extends React.Component {
  _classNames(...args) {
    return classnames(args);
  }
  className(...args) {
    return this._classNames.apply(this, args.concat([this.props.className]));
  }
}



Component.prototype.apiUrl = apiUrl
Component.prototype.$http =  api
Component.prototype.public_url = public_url
Component.propTypes = {
  className: PropTypes.string,
};
//Link 方法
export const Link = Links


//获取 redux state 
export const mapStateProps = (...arg)=>{

  return (state)=>{
    let obj = {}
    for(let i = 0; i < arg.length; i++ ){
      Object.assign(obj,state[arg[i]])
    }
    return obj
  }
}


//redux 设置方法
export const mapFn = (...arg) =>{

  return (dispatch)=>{
    let bindAction = {}
    for(let i = 0; i < arg.length; i++ ){
      let item = {...arg[i]}
      Object.assign(bindAction,item)
    }
    return bindActionCreators(bindAction,dispatch)
  }
} 