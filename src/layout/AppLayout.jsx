import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <section>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </section>
  )
}


export default AppLayout