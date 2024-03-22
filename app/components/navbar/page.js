import React from 'react';
import style from '../../../styles/components/navbar.module.scss';
import Link from 'next/link';
import { Typography } from '@mui/material';

const Navbar = () => {
  return (
    <div className={style.navContainer}>
      <div className={style.Logo}>
        <Typography variant='h5'>KURTIS <span>BILL</span></Typography>
      </div>

      <div className={style.navlink_Container}>
        <li>
          <Link className={style.navlink} href="/">HOME</Link>
        </li>
        <li>
          <Link className={style.navlink} href="/pages/about">ABOUT</Link>
        </li>
        <li>
          <Link className={style.navlink} href="/pages/servicesRendered">SERVICES</Link>
        </li>
        <li>
          <Link className={style.navlink} href="/pages/project-build">PROJECTS</Link>
        </li>
      </div>

      <div className={style.contactLink}>
        <Link className={style.contact} href="/">Contact Me</Link>
      </div>
    </div>

  )
}

export default Navbar;