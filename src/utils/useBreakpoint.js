import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const getDeviceConfig = width => {
  let deviceInfo;
  if (width < 320) {
    deviceInfo = 'xs';
  } else if (width >= 320 && width < 720) {
    deviceInfo = 'sm';
  } else if (width >= 720 && width < 1024) {
    deviceInfo = 'md';
  } else if (width >= 1024) {
    deviceInfo = 'lg';
  }
  return deviceInfo;
};

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
};
export default useBreakpoint;
