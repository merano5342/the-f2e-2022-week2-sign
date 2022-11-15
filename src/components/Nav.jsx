import { useState } from 'react';

// import Hamburger from '../assets/images/hamburger.svg'
import Logo from '../assets/images/logo-3sign-e.svg'


const Nav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  return (
    <div className="nav h-[70px] px-3 flex justify-between items-center fixed z-30 top-0 bg-black w-full" id='nav'>
      <img src={Logo} alt="logo" className='h-[50px] m-2' />
      <div className="right flex items-center m-2 ">
        <button className="btn btn-sign-up m-2 text-white">使用者</button>
        {/* <img src={Hamburger}
          alt=""
          className='h-[20px] m-2 cursor-pointer'
          onClick={() => setBurgerOpen(pre => !pre)} /> */}
        {/* <div className="drop-down bg-white flex flex-col top-[70px] right-0 left-0 fixed z-30 " data-active={burgerOpen}
        >
          <button className='text-purple hover:bg-cyan text-center text-xl py-2'>關卡資訊</button>
          <button className='text-purple hover:bg-cyan text-center text-xl py-3'>作品列表</button>
          <button className='text-purple hover:bg-cyan text-center text-xl py-3'>攻略資源</button>
          <button className='text-purple hover:bg-cyan text-center text-xl py-3'>求職專區</button>
          <button className='btn m-4 text-xl'>登入</button>
        </div> */}
      </div>


    </div>


  );
};

export default Nav;
