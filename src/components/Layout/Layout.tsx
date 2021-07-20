import React, { ReactNode } from 'react';

import MainHeader from './MainHeader';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <MainHeader />
    <main>{children}</main>
  </>
);

export default Layout;
