"use client"
import Link from "next/link";
import style from "../header/header.module.scss";
import Logo from "../../../public/logo.svg";
import Image from "next/image";

import { usePathname } from "next/navigation";
import useAuth from "./useAuth";
export default function SellButton(){
    const isLogin = useAuth();
    const pathname = usePathname();
    return(
        <>
            {!pathname.includes('sell') && !pathname.includes('login') && !pathname.includes('signup') ?
            <section className={`${style.sellbutton} sellbutton`}>
                <Link href={isLogin ? '/sell' : '/login'}><Image src={Logo} title="Indian Seller Buyer Logo" alt="Indian Seller Buyer Logo" /> Sell</Link>
            </section> : ''}
        </>
    )
}