import style from "./header.module.scss";
import Logo from "../../../public/logo.svg";
import NotificationIcon from "../../../public/notification.svg";
import MessageIcon from "../../../public/chat.svg";
import SearchIcon from "../../../public/search.svg";
import SettingIcon from "../../../public/setting.svg";
import ProfileIcon from "../../../public/profile.svg";
import Image from "next/image";
import Link from "next/link";

 

import { Montserrat } from "next/font/google";
import ProfileButton from "../components/profileButton";
import SellButton from "../components/sellButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: '400',
  style: "normal",
});
const montserrat600 = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: '600',
  style: "normal",
});
const montserrat800 = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: '800',
  style: "normal",
});

export default function Page() {
    return (
        <>
            <SellButton />
            <header className={`${montserrat.className} ${style.header}`}>
                <div className={`${style.container} container`}>
                    <div className={`${style.row} row`}>
                        <div className={`${style.logo}`}>
                            <Link href={'/'}>
                                <Image src={Logo} title="Indian Seller Buyer Logo" alt="Indian Seller Buyer Logo" />
                                <h1>Indian Seller Buyer</h1>
                            </Link>
                        </div>
                        <div className={`${style.location}`}>
                            <input type="search" placeholder="Location" value={`India`} />
                        </div>
                        <div className={`${style.search}`}>
                            <input type="search" placeholder="What are you looking for?" />
                        </div>
                        <div className={`${style.accessibility}`}>
                            <ul>
                                <li><Image src={SearchIcon} title="" alt="" /></li>
                                <li><Image src={MessageIcon} title="" alt="" /></li>
                                <li><Image src={NotificationIcon} title="" alt="" /></li>
                                <li><Image src={SettingIcon} title="" alt="" /></li>
                                <ProfileButton />
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}