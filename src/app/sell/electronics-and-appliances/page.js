"use client"
import style from "../sell.module.scss";
import TvsIcon from "../../../../public/category/tvs-and-Video-audio.png";
import KitchenIcon from "../../../../public/category/kitchen.png";
import ComputerIcon from "../../../../public/category/computer.png";
import CameraIcon from "../../../../public/category/camera.png";
import GameIcon from "../../../../public/category/game.png";
import FridgeIcon from "../../../../public/category/fridge.png";
import ComputerAcessoiresIcon from "../../../../public/category/computer-acessoires.png";
import PrinterIcon from "../../../../public/category/printer.png";
import AcIcon from "../../../../public/category/ac.png";
import WashingMachineIcon from "../../../../public/category/washing-machine.png";

import Category from "@/app/components/category";
import TitleComponent from "@/app/components/title";
import { usePathname } from "next/navigation";
// Category

export default function Page() {
    const pathname = usePathname();
    const data  = {
        categories: [
            {id: 1, title: 'TVs, Video - Audio', image: TvsIcon, categorylink: pathname + '/tvs-and-Video-audio'},
            {id: 1, title: 'Kitchen & Other Appliances', image: KitchenIcon, categorylink: pathname + '/kitchen-and-other-appliances'},
            {id: 1, title: 'Computers & Laptops', image: ComputerIcon, categorylink: pathname + '/computers-and-laptops'},
            {id: 1, title: 'Cameras & Lenses', image: CameraIcon, categorylink: pathname + '/cameras-and-lenses'},
            {id: 1, title: 'Games & Entertainment', image: GameIcon, categorylink: pathname + '/games-and-entertainment'},
            {id: 1, title: 'Fridges', image: FridgeIcon, categorylink: pathname + '/fridges'},
            {id: 1, title: 'Computer Accessories', image: ComputerAcessoiresIcon, categorylink: pathname + '/computer-accessories'},
            {id: 1, title: 'Hard Disks, Printers & Monitors', image: PrinterIcon, categorylink: pathname + '/hard-disks-printers-and-monitors'},
            {id: 1, title: 'ACs', image: AcIcon, categorylink: pathname + '/acs'},
            {id: 1, title: 'Washing Machines', image: WashingMachineIcon, categorylink: pathname + '/washing-machines'},
        ]

    }
    return (
        <>
            {/* Start Category */}
            <section className={`${style.category}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title={`Electronics And Appliances`} />
                    <div className={`${style.categorylist}`}>
                        <ul>
                            {data.categories.map((category) => (
                                <Category key={category.id} image={category.image} link={category.categorylink} title={category.title} />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            {/* End Category */}
        </>
    )
}