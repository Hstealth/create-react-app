import React from 'react'
import { connect } from "react-redux";
import Component, { mapFn, mapStateProps } from "../../lib/component";
import { dispatch_common_func } from "~R/common";
@connect(
  mapStateProps("common"),
  mapFn(dispatch_common_func)
)
class Index extends Component {
  render() {
    return <div>aa</div>
  }
}
export default Index