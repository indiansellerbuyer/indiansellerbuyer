"use client"
import style from "../sell.module.scss";
import MenIcon from "../../../../public/category/men.png";
import WomenIcon from "../../../../public/category/women.png";
import KidsIcon from "../../../../public/category/kids.png";
import Category from "@/app/components/category";
import TitleComponent from "@/app/components/title";
import { usePathname } from "next/navigation";
// Category

export default function Page() {
    const pathname = usePathname();
    const data  = {
        categories: [
            {id: 3, title: 'Men', image: MenIcon, categorylink:pathname + '/men'},
            {id: 3, title: 'Women', image: WomenIcon, categorylink:pathname + '/women'},
            {id: 3, title: 'Kids', image: KidsIcon, categorylink:pathname + '/kids'}
        ]

    }
    return (
        <>
            {/* Start Category */}
            <section className={`${style.category}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title={`Fashion`} />
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