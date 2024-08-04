"use client"
import style from "../sell.module.scss";
import EducationIcon from "../../../../public/category/education.png";
import TourAndTravelIcon from "../../../../public/category/tour-and-travel.png";
import ElectricianIcon from "../../../../public/category/electrician.png";
import BeautyIcon from "../../../../public/category/beauty.png";
import HomeIcon from "../../../../public/category/home.png";
import PestControlIcon from "../../../../public/category/pest-control.png";
import LawIcon from "../../../../public/category/law.png";
import PackerAndMoversIcon from "../../../../public/category/packer-and-movers.png";
import OtherServicesIcon from "../../../../public/category/other-services.png";
import Category from "@/app/components/category";
import TitleComponent from "@/app/components/title";
import { usePathname } from "next/navigation";
// Category

export default function Page() {
    const pathname = usePathname();
    const data  = {
        categories: [
            {id: 1, title: 'Education & Classes', image: EducationIcon, categorylink:pathname + '/education-and-classes'},
            {id: 2, title: 'Tours & Travel', image: TourAndTravelIcon, categorylink:pathname + '/tours-and-travel'},
            {id: 3, title: 'Electronics Repair & Services', image: ElectricianIcon, categorylink:pathname + '/electronics-repair-and-services'},
            {id: 4, title: 'Health & Beauty', image: BeautyIcon, categorylink:pathname + '/health-and-beauty'},
            {id: 5, title: 'Home Renovation & Repair', image: HomeIcon, categorylink:pathname + '/home-renovation-and-repair'},
            {id: 6, title: 'Cleaning & Pest Control', image: PestControlIcon, categorylink:pathname + '/cleaning-and-pest-control'},
            {id: 7, title: 'Legal & Documentation Services', image: LawIcon, categorylink:pathname + '/legal-and-documentation-services'},
            {id: 8, title: 'Packers & Movers', image: PackerAndMoversIcon, categorylink:pathname + '/packers-and-movers'},
            {id: 9, title: 'Other Services', image: OtherServicesIcon, categorylink:pathname + '/other-services'},
        ]

    }
    return (
        <>
            {/* Start Category */}
            <section className={`${style.category}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title={`Services`} />
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