import React from 'react';
import CurvedLoop from './loop';

const Navbar = () => {
  return (
    <div className='w-full text-black overflow-hidden mt-3 -mb-5'>
      <CurvedLoop
        marqueeText="Honey ✦ Drop ✦ News ✦"
        speed={2}
        curveAmount={20}
        direction="left"
        interactive={true}
        className="text-black font-bold"
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
