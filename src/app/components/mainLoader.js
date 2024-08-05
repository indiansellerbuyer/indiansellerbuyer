"use client";
import { useState, useEffect } from "react";
import style from "./mainLoader.module.scss";
import { Montserrat } from "next/font/google";
import IndianFlag from "../../../public/IndianFlag.png";
import Heart from "../../../public/Love_Heart_SVG.svg";
import Image from "next/image";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight: '400',
    style: "normal",
});

export default function MainLoader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      // Check if 'loader' is stored in sessionStorage
      const loaderStatus = sessionStorage.getItem('loader');
  
      if (loaderStatus === 'true') {
        setIsVisible(false); // Hide loader if 'loader' is 'true'
      } else {
        // Set a timer to hide the loader after 1100ms and store 'true' in sessionStorage
        const timer = setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem('loader', 'true'); // Store 'true' as a string
        }, 1100);
  
        // Cleanup the timer if the component unmounts
        return () => clearTimeout(timer);
      }
    }, []);
  
    if (!isVisible) return null; // Render nothing if loader is hidden
  
    return (
        <>
        {isVisible ? 
            <>
        <section className={style.Loader} id="Loader">
            <div className={style.container}>
                <div className={style.logo}>
                    <div className={style.icons}>
                        <svg className={style.blue} xmlns="http://www.w3.org/2000/svg" width="80" height="71" viewBox="0 0 80 71" fill="none">
                            <path d="M75.7398 63.801C81.8257 56.4464 80.6941 45.6781 73.2124 39.7492L29.0282 4.7353C21.5465 -1.1936 10.5478 -0.0378657 4.4619 7.31672C-1.62398 14.6713 -0.49244 25.4397 6.98928 31.3686L51.1735 66.3824C58.6552 72.3113 69.6539 71.1556 75.7398 63.801Z" fill="#4285F4" />
                        </svg>
                        <svg className={style.orange} width="168" height="36" viewBox="0 0 168 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="167.137" height="34.2706" rx="17.1353" transform="matrix(-1 0 0 1 167.51 0.977539)" fill="#FF6600" />
                        </svg>
                        <svg className={style.green} width="168" height="36" viewBox="0 0 168 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="167.137" height="34.2706" rx="17.1353" transform="matrix(-1 0 0 1 167.225 0.87085)" fill="#0F9D58" />
                        </svg>
                        <svg className={style.yellow} width="80" height="71" viewBox="0 0 80 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="90.9451" height="34.5695" rx="17.2847" transform="matrix(-0.783746 -0.621081 -0.637526 0.770429 86.3169 50.3667)" fill="#FBBC04" />
                        </svg>
                    </div>
                    <div className={`${montserrat.className} ${style.name}`}>
                        <h1>Indian Seller Buyer</h1>
                        <p>Proudly Made with <Image src={Heart} alt="Heart" height={15} /> In New Delhi, India <Image src={IndianFlag} alt="India" height={30} /></p>
                    </div>
                </div>
            </div>
        </section>
        </> : '' }
        </>
    );
}
