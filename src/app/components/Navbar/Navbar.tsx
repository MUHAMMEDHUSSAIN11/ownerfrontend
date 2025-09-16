'use client'

import React from 'react';
import Logo from './Logo';
import Container from '../Misc/container';
import MiddleContent from './MiddleContent';
import RightContent from './RightContent';

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-50 shadow-sm">
      <Container>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3">
          <div className="flex-shrink-0 order-1 pt-2.5 md:pt-0">
            <Logo />
          </div>
          <div className="w-full md:flex-1 flex justify-center order-3 md:order-2">
            <MiddleContent />
          </div>
          <div className="flex items-center order-2 md:order-3 pt-2.5 md:pt-0">
            <RightContent />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar;