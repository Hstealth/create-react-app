import React from "react"
import Component, { mapFn, mapStateProps } from '../../lib/component'
import { dispatch_common_func } from '../../redux/common'
import { connect } from 'react-redux'
import '../../tools/common.scss'

let state = mapStateProps('common')
let fn = mapFn(dispatch_common_func)
@connect(state, fn)
class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.children}

      </div>
    );
  }
}

export default Layout