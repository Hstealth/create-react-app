import React from 'react';
export default function Loading(props) {
  if (props.isLoading) {
    if (props.timedOut) {
      return <div>网络延误，请重新刷新页面</div>;
    } else if (props.pastDelay) {
      return <div>加载中...</div>
    } else {
      return null;
    }
  } else if (props.error) {
    return <div>网络延误，请重新刷新页面</div>;
  } else {
    return null;
  }
}