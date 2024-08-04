"use client"
import style from "../sell.module.scss";
import ApartmentsIcon from "../../../../public/category/apartment.png";
import PlotsIcon from "../../../../public/category/plot.png";
import ShopIcon from "../../../../public/category/shop.png";
import PGIcon from "../../../../public/category/pg.png";
import Category from "@/app/components/category";
import TitleComponent from "@/app/components/title";
import { usePathname } from "next/navigation";
// Category

export default function Page() {
    const pathname = usePathname();
    const data  = {
        categories: [
            {id: 1, title: 'PG & Guest Houses', image: PGIcon, categorylink: pathname + '/pg-guest-houses'},
            {id: 2, title: 'Lands & Plots', image: PlotsIcon, categorylink: pathname + '/lands-and-plots'},
            {id: 3, title: 'For Sale: Houses & Apartments', image: ApartmentsIcon, categorylink: pathname + '/for-sale-houses-and-apartments'},
            {id: 4, title: 'For Rent: Houses & Apartments', image: ApartmentsIcon, categorylink: pathname + '/for-rent-houses-and-apartments'},
            {id: 5, title: 'For Rent: Shops & Offices', image: ShopIcon, categorylink: pathname + '/for-rent-shops-and-offices'},
            {id: 6, title: 'For Sale: Shops & Offices', image: ShopIcon, categorylink: pathname + '/for-sale-shops-and-offices'},
        ]

    }
    return (
        <>
            {/* Start Category */}
            <section className={`${style.category}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title={`Properties`} />
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