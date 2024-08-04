"use client"
import style from "../sell.module.scss";
import BooksIcon from "../../../../public/category/books.png";
import GymIcon from "../../../../public/category/gym.png";
import musicIcon from "../../../../public/category/music.png";
import SportsIcon from "../../../../public/category/sport.png";
import OtherHobbyIcon from "../../../../public/category/other-hobby.png";
import Category from "@/app/components/category";
import TitleComponent from "@/app/components/title";
import { usePathname } from "next/navigation";
// Category

export default function Page() {
    const pathname = usePathname();
    const data  = {
        categories: [
            {id: 1, title: 'Books', image: BooksIcon, categorylink:pathname + '/books'},
            {id: 2, title: 'Gym & Fitness', image: GymIcon, categorylink:pathname + '/gym-and-Fitness'},
            {id: 3, title: 'Musical Instruments', image: musicIcon, categorylink:pathname + '/musical-instruments'},
            {id: 4, title: 'Sports Equipment', image: SportsIcon, categorylink:pathname + '/sports-equipment'},
            {id: 5, title: 'Other Hobbies', image: OtherHobbyIcon, categorylink:pathname + '/other-hobbies'},
        ]

    }
    return (
        <>
            {/* Start Category */}
            <section className={`${style.category}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title={`Books, Sports & Hobbies`} />
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