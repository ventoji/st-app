import React from 'react';

const Layout = ({ className = 'container', children }) => (
  <div className={className}>{children}</div>
);

export default Layout;
