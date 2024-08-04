"use client"
import style from "../sell.module.scss";
import SofaIcon from "../../../../public/category/sofa.png";
import BedIcon from "../../../../public/category/bed.png";
import DecorIcon from "../../../../public/category/decor.png";
import BabyToyIcon from "../../../../public/category/baby-toy.png";
import HouseholdIcon from "../../../../public/category/household.png";
import Category from "@/app/components/category";
import TitleComponent from "@/app/components/title";
import { usePathname } from "next/navigation";
// Category

export default function Page() {
    const pathname = usePathname();
    const data  = {
        categories: [
            {id: 1, title: 'Sofa & Dining', image: SofaIcon, categorylink:pathname + '/sofa-and-dining'},
            {id: 2, title: 'Beds & Wardrobes', image: BedIcon, categorylink:pathname + '/beds-and-wardrobes'},
            {id: 3, title: 'Home Decor & Garden', image: DecorIcon, categorylink:pathname + '/home-decor-and-garden'},
            {id: 4, title: 'Kids Furniture', image: BabyToyIcon, categorylink:pathname + '/kids-furniture'},
            {id: 5, title: 'Other Household Items', image: HouseholdIcon, categorylink:pathname + '/other-household-items'},
        ]

    }
    return (
        <>
            {/* Start Category */}
            <section className={`${style.category}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title={`Furniture`} />
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