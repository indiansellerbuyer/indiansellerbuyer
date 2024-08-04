"use client"
import style from "../sell.module.scss";
import FishIcon from "../../../../public/category/fish.png";
import PetFoodIcon from "../../../../public/category/pet-food.png";
import DogIcon from "../../../../public/category/dog.png";
import OtherPetsIcon from "../../../../public/category/other-pets.png";
import Category from "@/app/components/category";
import TitleComponent from "@/app/components/title";
import { usePathname } from "next/navigation";
// Category

export default function Page() {
    const pathname = usePathname();
    const data  = {
        categories: [
            {id: 1, title: 'Fishes & Aquarium', image: FishIcon, categorylink:pathname + '/fishes-and-aquarium'},
            {id: 2, title: 'Pet Food & Accessories', image: PetFoodIcon, categorylink:pathname + '/pet-food-and-accessories'},
            {id: 3, title: 'Dogs', image: DogIcon, categorylink:pathname + '/dogs'},
            {id: 4, title: 'Other Pets', image: OtherPetsIcon, categorylink:pathname + '/other-pets'},
        ]

    }
    return (
        <>
            {/* Start Category */}
            <section className={`${style.category}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title={`Pets`} />
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