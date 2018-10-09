import PropTypes from 'prop-types';
import React from 'react'
import { Link as Links } from 'react-router-dom'

let Link = (props) => {
  let fullPath = props.to || "/"
  if (props.query) {
    let path = props.path || '/'
    fullPath = path
    let query = ''
    for (let k in props.query) {
      query += `${k}=${props.query[k]}&`
    }
    if (query) {
      query = query.slice(0, query.length - 1)
      fullPath += '?' + query
    }
  }
  return <Links to={fullPath} {...props}>{props.children}</Links>
}
Link.propTypes = {
  to: PropTypes.string,
  path: PropTypes.string,
  query: PropTypes.object,
}
export default Link