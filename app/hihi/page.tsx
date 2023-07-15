'use client';
import { useEffect, useState } from 'react';

const Header = () => {
  useEffect(() => {
    console.log('css loaded');
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  const [loaded, setLoaded]: any = useState(false);
  return (
    <div className="h-full w-full">
      <div
        style={{
          opacity: loaded === true ? 1 : 0,
          transition: '0.2s ease-in-out',
        }}
      >
        <p className=" text-black">sdjkn</p>
      </div>
      <div
        style={{
          opacity: loaded === true ? 0 : 1,
          transition: '0.2s ease-in-out',
          zIndex: loaded === true ? '-1' : 9999,
        }}
      >
        <img src={'/blog/images/logo.png'} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
