import React from 'react';
import CurvedLoop from './loop';

const Navbar = () => {
  return (
    <div className='w-full text-black mt-3 xl:-mb-5'>
      <CurvedLoop
        marqueeText="Honey ✦ Drop ✦ News ✦"
        speed={1}
        curveAmount={20}
        direction="left"
        interactive={true}
        className="text-black font-bold"
      />
    </div>
  );
};

export default Navbar;
