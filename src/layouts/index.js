import React from "react";
import BaseLayout from './BasicLayout';

function BasicLayout(props) {
  if(props.location.pathname === '/users/login' || props.location.pathname === '/users/register'){
    return props.children
  }
  return (
    <BaseLayout
      props={props}
    />
  );
}

export default BasicLayout;
