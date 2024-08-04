import style from "./footer.module.scss";

import MakeInIndiaLogo from "../../../public/Make_In_India.png";
import Image from "next/image";
export default function Pgae(){
    return(
        <>
            <footer className={`${style.footer}`}>
                <div className={`${style.container} container`}>
                    <div className={`${style.row} row`}>
                        <div className={`${style.copyright}`}>
                            <p>© 2024 Indian Seller Buyer. All rights reserved.</p>
                        </div>
                        <div className={`${style.makeinindia}`}>
                            <p><Image src={MakeInIndiaLogo} alt="Make In India Logo" /> Make in India</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}