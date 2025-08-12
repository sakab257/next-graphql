import React from 'react';
import CurvedLoop from './loop';

const Navbar = () => {
  return (
    <div className='h-16 w-full text-black'>
      <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
        speed={1}
        curveAmount={0}
        direction="right"
        interactive={true}
        className="translate-x-4"
      />
    </div>
    // <section className="container">
    //   <div className="list">
    //     <div className="item">
    //       <span className="item-txt">HONEY</span>
    //       <span className="item-d">
    //         <p className="item-dot">✦</p>
    //       </span>
    //       <span className="item-txt">DROP</span>
    //       <span className="item-d">
    //         <p className="item-dot">✦</p>
    //       </span>
    //       <span className="item-txt">NEWS</span>
    //       <span className="item-d">
    //         <p className="item-dot">✦</p>
    //       </span>
    //     </div>
    //   </div>
    //   <div className="list">
    //     <div className="item">
    //       <span className="item-txt">HONEY</span>
    //       <span className="item-d">
    //         <p className="item-dot">✦</p>
    //       </span>
    //       <span className="item-txt">DROP</span>
    //       <span className="item-d">
    //         <p className="item-dot">✦</p>
    //       </span>
    //       <span className="item-txt">NEWS</span>
    //       <span className="item-d">
    //         <p className="item-dot">✦</p>
    //       </span>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Navbar;
