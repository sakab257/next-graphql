import React from 'react';
import CurvedLoop from './loop';

const Navbar = () => {
  return (
    <div className='w-full text-black overflow-hidden mt-3 -mb-5'>
      <CurvedLoop
        marqueeText="Honey ✦ Drop ✦ News ✦"
        speed={0.5}
        curveAmount={20}
        direction="left"
        interactive={true}
        className="text-black font-bold"
      />
    </div>
  );
};

export default Navbar;
