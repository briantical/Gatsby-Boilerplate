import React from 'react';

import '@styles/index.scss';

const Layout = ({ children }) => (
  <div>
    <header className='text-primary'>Some Header</header>
    {children}
    <footer>Some Footer</footer>
  </div>
);

export default Layout;
