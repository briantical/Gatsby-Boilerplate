import React from 'react';

import '@styles/index.scss';

const Layout = ({ children }) => {
  return (
    <div>
      <header>Some Header</header>
      {children}
      <footer>Some Footer</footer>
    </div>
  );
};

export default Layout;
