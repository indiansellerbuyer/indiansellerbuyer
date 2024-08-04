"use client"
import style from "../sell.module.scss";
import PhoneIcon from "../../../../public/category/phone.png";
import PhoneAccessoriesIcon from "../../../../public/category/phone_accessories.png";
import TabletIcon from "../../../../public/category/tablet.png";

import BikeIcon from "../../../../public/category/bike.png";
import ScooterIcon from "../../../../public/category/scooter.png";
import SpareParts from "../../../../public/category/bike-spare.png";
import BicycleParts from "../../../../public/category/bicycle.png";
import Category from "@/app/components/category";
import TitleComponent from "@/app/components/title";
import { usePathname } from "next/navigation";
// Category

export default function Page() {
    const pathname = usePathname();
    const data  = {
        categories: [
            {id: 1, title: 'Motorcycles', image: BikeIcon, categorylink: pathname + '/motorcycles'},
            {id: 1, title: 'Scooters', image: ScooterIcon, categorylink: pathname + '/scooters'},
            {id: 1, title: 'Spare Parts', image: SpareParts, categorylink: pathname + '/spare-parts'},
            {id: 1, title: 'Bicycles', image: BicycleParts, categorylink: pathname + '/bicycles'},
        ]

    }
    return (
        <>
            {/* Start Category */}
            <section className={`${style.category}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title={`Bikes`} />
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