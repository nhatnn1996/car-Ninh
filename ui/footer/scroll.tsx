'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const vis = useRef(visible);
  vis.current = visible;
  useEffect(() => {
    window.addEventListener('scroll', function (e) {
      if (window.scrollY > 200 && vis.current === false) setVisible(true);
      if (window.scrollY < 200 && vis.current === true) setVisible(false);
    });
  }, []);
  if (!visible) return null;
  return (
    <div id="back-top" className="show" onClick={onClick}>
      SCROLL UP
      <i className="fa fa-angle-double-right" />
    </div>
  );
}
