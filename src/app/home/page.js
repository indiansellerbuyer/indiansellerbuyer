import style from "./home.module.scss";
import Logo from "../../../public/logo.svg";
import NotificationIcon from "../../../public/notification.svg";
import MessageIcon from "../../../public/chat.svg";
import SearchIcon from "../../../public/search.svg";
import SettingIcon from "../../../public/setting.svg";
import ProfileIcon from "../../../public/profile.svg";
import MakeInIndiaLogo from "../../../public/Make_In_India.png";
import DummyImage from "../../../public/dummy.jpeg";
import Image from "next/image";
import { Montserrat } from "next/font/google";

// Category
import CategoryIcon from "../../../public/category/category.png";
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
import SingleAdvertisement from "../components/advertisement";
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
    return (
        <>
                {/* Start Banner */}
                <section className={`${style.banner}`}>
                    <div className={`${style.container} ${style.box} container`}>
                    </div>
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
                                <li title="category">
                                    <a href="#">
                                        <Image src={CategoryIcon} alt="category" />
                                        <p>All Categories</p>
                                    </a>
                                </li>
                                <li title="Car">
                                    <a href="#">
                                        <Image src={CarIcon} alt="Car" />
                                        <p>Car</p>
                                    </a>
                                </li>
                                <li title="Bike">
                                    <a href="#">
                                        <Image src={BikeIcon} alt="Bike" />
                                        <p>Bike</p>
                                    </a>
                                </li>
                                <li title="Properties">
                                    <a href="#">
                                        <Image src={PropertiesIcon} alt="Properties" />
                                        <p>Properties</p>
                                    </a>
                                </li>
                                <li title="Mobiles">
                                    <a href="#">
                                        <Image src={MobilesIcon} alt="Mobiles" />
                                        <p>Mobiles</p>
                                    </a>
                                </li>
                                <li title="Jobs">
                                    <a href="#">
                                        <Image src={JobsIcon} alt="Jobs" />
                                        <p>Jobs</p>
                                    </a>
                                </li>
                                <li title="Electronics And Appliances">
                                    <a href="#">
                                        <Image src={ElectronicsAndAppliancesIcon} alt="Electronics And Appliances" />
                                        <p>Electronics &amp; Appliances</p>
                                    </a>
                                </li>
                                <li title="DeliveryTruck">
                                    <a href="#">
                                        <Image src={DeliveryTruckIcon} alt="DeliveryTruck" />
                                        <p>DeliveryTruck</p>
                                    </a>
                                </li>
                                <li title="Furniture">
                                    <a href="#">
                                        <Image src={FurnitureIcon} alt="Furniture" />
                                        <p>Furniture</p>
                                    </a>
                                </li>
                                <li title="Fashion">
                                    <a href="#">
                                        <Image src={FashionIcon} alt="Fashion" />
                                        <p>Fashion</p>
                                    </a>
                                </li>
                                <li title="Sport">
                                    <a href="#">
                                        <Image src={SportIcon} alt="Sport" />
                                        <p>Sport</p>
                                    </a>
                                </li>
                                <li title="Pets">
                                    <a href="#">
                                        <Image src={PetsIcon} alt="Pets" />
                                        <p>Pets</p>
                                    </a>
                                </li>
                                <li title="Services">
                                    <a href="#">
                                        <Image src={ServicesIcon} alt="Services" />
                                        <p>Services</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* End Category */}

                {/* Start Paid Advertisement */}
                <section className={`${style.advertisement}`}>
                    <div className={`${style.container} container`}>
                        <div className={`${style.title} title`}>
                            <h2>Paid Advertisement</h2>
                        </div>
                        <div className={`${style.advertisementlist}`}>
                            <div className={`${style.row} row`}>
                                <div className={`${style.col_md_3} col-md-3`}>
                                    <SingleAdvertisement />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Paid Advertisement */}
        </>
    )
}