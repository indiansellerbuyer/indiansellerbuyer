"use client"
import style from "./sell.module.scss";
import { Montserrat } from "next/font/google";

// Category
import CarIcon from "../../../public/category/car.png";
import BikeIcon from "../../../public/category/bike.png";
import PropertiesIcon from "../../../public/category/properties.png";
import MobilesIcon from "../../../public/category/mobiles.png";
import JobsIcon from "../../../public/category/jobs.png";
import ElectronicsAndAppliancesIcon from "../../../public/category/electronics-and-appliances.png";
import DeliveryTruckIcon from "../../../public/category/delivery-truck.png";
import FurnitureIcon from "../../../public/category/furniture.png";
import FashionIcon from "../../../public/category/fashion.png";
import SportIcon from "../../../public/category/sport.png";
import PetsIcon from "../../../public/category/pets.png";
import ServicesIcon from "../../../public/category/services.png";
import TitleComponent from "../components/title";
import Category from "../components/category";
import { usePathname } from "next/navigation";
// Category

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight: '400',
    style: "normal",
});
const montserrat600 = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight: '600',
    style: "normal",
});
const montserrat800 = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight: '800',
    style: "normal",
});

export default function Page() {
    const pathname = usePathname();
    const data  = {
        categories: [
            {id: 1, title: 'Mobile', image: MobilesIcon, categorylink: pathname + '/mobiles'},
            {id: 2, title: 'Bike', image: BikeIcon, categorylink: pathname + '/bikes'},
            {id: 3, title: 'Jobs', image: JobsIcon, categorylink: pathname + '/jobs'},
            {id: 4, title: 'Fashion', image: FashionIcon, categorylink: pathname + '/fashion'},
            {id: 5, title: 'Cars', image: CarIcon, categorylink: pathname + '/cars'},
            {id: 6, title: 'Electronics And Appliances', image: ElectronicsAndAppliancesIcon, categorylink: pathname + '/electronics-and-appliances'},
            {id: 7, title: 'Properties', image: PropertiesIcon, categorylink: pathname + '/properties'},
            {id: 8, title: 'Furniture', image: FurnitureIcon, categorylink: pathname + '/furniture'},
            {id: 9, title: 'Commercial Vehicles & Spares', image: DeliveryTruckIcon, categorylink: pathname + '/commercial-vehicles-and-spares'},
            {id: 10, title: 'Books, Sports & Hobbies', image: SportIcon, categorylink: pathname + '/books-sports-and-hobbies'},
            {id: 11, title: 'Pets', image: PetsIcon, categorylink: pathname + '/pets'},
            {id: 12, title: 'Services', image: ServicesIcon, categorylink: pathname + '/services'},
        ]
    }
    return (
        <>
            {/* Start Category */}
            <section className={`${style.category}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title={`Select Categories`} />
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