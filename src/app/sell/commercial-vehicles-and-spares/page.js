"use client"
import style from "../sell.module.scss";
import CommercialIcon from "../../../../public/category/delivery-truck.png";
import SpareParts from "../../../../public/category/truck-spare-part.png";
import Category from "@/app/components/category";
import TitleComponent from "@/app/components/title";
import { usePathname } from "next/navigation";
// Category

export default function Page() {
    const pathname = usePathname();
    const data  = {
        categories: [
            {id: 1, title: 'Commercial & Other Vehicles', image: CommercialIcon, categorylink:pathname + '/commercial-and-other-vehicles'},
            {id: 2, title: 'Spare Parts', image: SpareParts, categorylink:pathname + '/spare-parts'}
        ]

    }
    return (
        <>
            {/* Start Category */}
            <section className={`${style.category}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title={`Commercial Vehicles & Spares`} />
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