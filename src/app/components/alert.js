import { useEffect, useState } from "react";

export function AlertSuccess({oneword , message}){
    const [timeout , setTimeout] = useState();
    useEffect(() => {
    // Set a timeout to update the message after 3 seconds
    const timer = setTimeout(() => {
      alert('Timeout executed!');
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty dependency array means this effect runs once when the component mounts

    return(
        <>
            <div className={`alert alertSuccess`}>
                <h5>{oneword}</h5>
                <p>{message}</p>
            </div>
        </>
    )
}