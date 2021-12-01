import React from 'react';

import '@styles/index.scss';

const Layout = ({ children }) => (
  <>
    <header className='text-primary'>Some Header</header>
    <main>{children}</main>
    <footer>Some Footer</footer>
  </>
);

export default Layout;
