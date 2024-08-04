import { useEffect, useState } from 'react';

export default function TodayDate() {
  const [today, setToday] = useState('');

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const monthNames = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];

    const formattedDate = `${day} ${monthNames[month]} ${year}`;
    setToday(formattedDate);
  }, []);

  return today
}
