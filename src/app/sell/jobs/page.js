"use client"
import style from "../sell.module.scss";
import DataIcon from "../../../../public/category/data-entry.png";
import SalesIcon from "../../../../public/category/sales.png";
import BPOIcon from "../../../../public/category/bpo.png";
import DriverIcon from "../../../../public/category/driver.png";
import OfficeIcon from "../../../../public/category/office.png";
import DeliveryIcon from "../../../../public/category/delivery.png";
import TeacherIcon from "../../../../public/category/cook.png";
import CookIcon from "../../../../public/category/teacher.png";
import ReceptionistIcon from "../../../../public/category/receptionist.png";
import OperatorIcon from "../../../../public/category/lob-optrator.png";
import ITIcon from "../../../../public/category/it.png";
import HotelIcon from "../../../../public/category/hotel.png";
import AccountantIcon from "../../../../public/category/accountant.png";
import DesignerIcon from "../../../../public/category/designer.png";
import OtherIcon from "../../../../public/category/other-job.png";
import Category from "@/app/components/category";
import TitleComponent from "@/app/components/title";
import { usePathname } from "next/navigation";
// Category

export default function Page() {
    const pathname = usePathname();
    const data  = {
        categories: [
            {id: 1, title: 'Data entry & Back office', image: DataIcon, categorylink:pathname + '/data-entry-and-back-office'},
            {id: 2, title: 'Sales & Marketing', image: SalesIcon, categorylink:pathname + '/sales-and-marketing'},
            {id: 3, title: 'BPO & Telecaller', image: BPOIcon, categorylink:pathname + '/bpo-and-telecaller'},
            {id: 4, title: 'Driver', image: DriverIcon, categorylink:pathname + '/driver'},
            {id: 5, title: 'Office Assistant', image: OfficeIcon, categorylink:pathname + '/office-assistant'},
            {id: 6, title: 'Delivery & Collection', image: DeliveryIcon, categorylink:pathname + '/delivery-collection'},
            {id: 7, title: 'Teacher', image: TeacherIcon, categorylink:pathname + '/teacher'},
            {id: 8, title: 'Cook', image: CookIcon, categorylink:pathname + '/cook'},
            {id: 9, title: 'Receptionist & Front office', image: ReceptionistIcon, categorylink:pathname + '/receptionist-and-front-office'},
            {id: 10, title: 'Operator & Technician', image: OperatorIcon, categorylink:pathname + '/operator-and-technician'},
            {id: 11, title: 'IT Engineer & Developer', image: ITIcon, categorylink:pathname + '/it-engineer-and-developer'},
            {id: 12, title: 'Hotel & Travel Executive', image: HotelIcon, categorylink:pathname + '/hotel-and-travel-executive'},
            {id: 13, title: 'Accountant', image: AccountantIcon, categorylink:pathname + '/accountant'},
            {id: 14, title: 'Designer', image: DesignerIcon, categorylink:pathname + '/designer'},
            {id: 15, title: 'Other Jobs', image: OtherIcon, categorylink:pathname + '/other-jobs'},
        ]

    }
    return (
        <>
            {/* Start Category */}
            <section className={`${style.category}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title={`Jobs`} />
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