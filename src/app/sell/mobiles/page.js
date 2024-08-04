"use client"
import style from "../sell.module.scss";
import PhoneIcon from "../../../../public/category/phone.png";
import PhoneAccessoriesIcon from "../../../../public/category/phone_accessories.png";
import TabletIcon from "../../../../public/category/tablet.png";
import Category from "@/app/components/category";
import TitleComponent from "@/app/components/title";
import { usePathname } from "next/navigation";
// Category

export default function Page() {
    const pathname = usePathname();
    const data  = {
        categories: [
            {id: 1, title: 'Mobile Phones', image: PhoneIcon, categorylink: pathname + '/mobile-phone'},
            {id: 2, title: 'Phone Accessories', image: PhoneAccessoriesIcon, categorylink:pathname + '/phone-accessories'},
            {id: 3, title: 'Tablet', image: TabletIcon, categorylink:pathname + '/tablet'}
        ]

    }
    return (
        <>
            {/* Start Category */}
            <section className={`${style.category}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title={`Mobiles`} />
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