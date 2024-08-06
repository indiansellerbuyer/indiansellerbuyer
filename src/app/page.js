"use client";
import style from "./page.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

// Category Icons
import CategoryIcon from "../../public/category/category.png";
import CarIcon from "../../public/category/car.png";
import BikeIcon from "../../public/category/bike.png";
import PropertiesIcon from "../../public/category/properties.png";
import MobilesIcon from "../../public/category/mobiles.png";
import JobsIcon from "../../public/category/jobs.png";
import ElectronicsAndAppliancesIcon from "../../public/category/electronics-and-appliances.png";
import DeliveryTruckIcon from "../../public/category/delivery-truck.png";
import FurnitureIcon from "../../public/category/furniture.png";
import FashionIcon from "../../public/category/fashion.png";
import SportIcon from "../../public/category/sport.png";
import PetsIcon from "../../public/category/pets.png";
import ServicesIcon from "../../public/category/services.png";
import SingleAdvertisement from "./components/advertisement";
import useAuth from "./components/useAuth";
import Topheader from "./header/page";
import Footer from "./footer/page"

// Font imports
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

export default function Home() {
    const [advertisements, setAdvertisements] = useState([]);
    const [loading, setLoading] = useState(true);
    const isLogin = useAuth();
    useEffect(() => {
        const fetchAdvertisements = async () => {
            try {
                const response = await fetch('https://indiansellerbuyer-database.vercel.app/advertisement');
                const data = await response.json();
                setAdvertisements(data);
            } catch (error) {
                console.error("Error fetching advertisements:", error);
                setAdvertisements([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAdvertisements();
    }, []);

    // if (loading) return <p>Loading...</p>;
    // if (advertisements.length === 0) return <p>No Advertisement Found</p>;
    console.log(advertisements);

    return (
        <>
            <Topheader />
            <main className={`main`}>
                {/* Start Banner */}
                <section className={`${style.banner}`}>
                    <div className={`${style.container} ${style.box} container`}></div>
                </section>
                {/* End Banner */}

                {/* Start Category */}
                <section className={`${style.category}`}>
                    <div className={`${style.container} container`}>
                        <div className={`${style.title} title`}>
                            <h2>Categories</h2>
                        </div>
                        <div className={`${style.categorylist} customscrollbar`}>
                            <ul>
                                {[
                                    { icon: CategoryIcon, label: "All Categories" },
                                    { icon: CarIcon, label: "Car" },
                                    { icon: BikeIcon, label: "Bike" },
                                    { icon: PropertiesIcon, label: "Properties" },
                                    { icon: MobilesIcon, label: "Mobiles" },
                                    { icon: JobsIcon, label: "Jobs" },
                                    { icon: ElectronicsAndAppliancesIcon, label: "Electronics & Appliances" },
                                    { icon: DeliveryTruckIcon, label: "DeliveryTruck" },
                                    { icon: FurnitureIcon, label: "Furniture" },
                                    { icon: FashionIcon, label: "Fashion" },
                                    { icon: SportIcon, label: "Sport" },
                                    { icon: PetsIcon, label: "Pets" },
                                    { icon: ServicesIcon, label: "Services" },
                                ].map((category, index) => (
                                    <li key={index} title={category.label}>
                                        <a href="#">
                                            <Image src={category.icon} alt={category.label} />
                                            <p>{category.label}</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                {/* End Category */}

                {/* Start Paid Advertisement */}
                <section className={`${style.advertisement}`}>
                    <div className={`${style.container} container`}>
                        <div className={`${style.title} title`}>
                            <h2>Paid Advertisements</h2>
                        </div>
                        <div className={`${style.advertisementlist}`}>
                            <div className={`${style.row} row`}>
                                {advertisements.map((ad, index) => (
                                    <div key={index} className={`${style.col_md_3} col-md-3`}>
                                        <SingleAdvertisement
                                            files1={ad.files1}
                                            brand={ad.brand}
                                            ram={ad.ram}
                                            storage={ad.storage}
                                            title={ad.title}
                                            description={ad.description}
                                            nearby={ad.nearby}
                                            city={ad.city}
                                            state={ad.state}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Paid Advertisement */}
            </main>
            <Footer />
        </>
    );
}
