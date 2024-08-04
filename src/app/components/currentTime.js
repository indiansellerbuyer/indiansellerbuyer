import { useEffect, useState } from 'react';

export default function CurrwntTimeComponent() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{currentTime.toLocaleTimeString()}</div>;
}

