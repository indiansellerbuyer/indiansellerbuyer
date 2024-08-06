"use client"
import style from "./sellForm.module.scss";
import DummyImage from "../../../public/dummy.jpeg";
import Image from "next/image";
import TitleComponent from "./title";
import { usePathname } from "next/navigation";
import { useState } from "react";
import TodayDate from './todayDate';


export default function SellForm({ category }) {
    const pathname = usePathname();
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [ram, setRam] = useState("");
    const [storage, setStorage] = useState("");
    const [year, setYear] = useState("");
    const [kmdriven, setKmdriven] = useState("");
    const [fuel, setFuel] = useState("");
    const [owner, setOwner] = useState("");
    const [salaryperiod, setSalaryperiod] = useState("");
    const [positiontype, setPositiontype] = useState("");
    const [salaryFrom, setSalaryFrom] = useState("");
    const [salaryTo, setSalaryTo] = useState("");
    const [transmission, setTransmission] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [furnishing, setFurnishing] = useState("");
    const [constructionStatus, setConstructionStatus] = useState("");
    const [listedBy, setListedBy] = useState("");
    const [superBuiltupArea, setSuperBuiltupArea] = useState("");
    const [carpetArea, setCarpetArea] = useState("");
    const [maintenance, setMaintenance] = useState("");
    const [totalFloors, setTotalFloors] = useState("");
    const [floorNo, setFloorNo] = useState("");
    const [carParking, setCarParking] = useState("");
    const [facing, setFacing] = useState("");
    const [projectName, setProjectName] = useState("");
    const [bachelorsAllowence, setBachelorsAllowence] = useState("");
    const [subType, setSubType] = useState("");
    const [mealIncluded, setMealIncluded] = useState("");
    const [plotArea, setPlotArea] = useState("");
    const [plotLength, setPlotLength] = useState("");
    const [plotBreadth, setPlotBreadth] = useState("");
    const [washrooms, setWashrooms] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [nearby, setNearby] = useState("");
    const AddNewProduct = async () => {
        if(pathname == '/sell/mobiles/mobile-phone'){
            if (!brand) {
                alert("Please Select Brand");
            }
            return;
        }
        else{
        let result = await fetch('https://indiansellerbuyer-database.vercel.app/advertisement', {
            method: 'post',
            body: JSON.stringify({ type, title, description, price, state, city, nearby }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result);
    }
    }
    return (
        <>
            <div className={`${style.formpage}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title={category} />
                    <div className={`${style.form}`}>
                        <div className={`${style.row} row`}>
                            <div className={`${style.col_md_8} col-md-8`}>
                                <div className={`${style.formside}`}>
                                    <form>
                                        <div className={`${style.row} row`}>
                                            <div className={`${style.col_md_6} col-md-6`}>

                                                {/* Mobile Phones */}
                                                {pathname == "/sell/mobiles/mobile-phone" ?
                                                    <>
                                                        <div className={`${style.singleselect}`}>
                                                            <label>Brand*</label>
                                                            <select required onChange={(e) => setBrand(e.target.value)}>
                                                                <option value=""></option>
                                                                <optgroup label="Popular Brand"></optgroup>
                                                                <option value="iphone">iPhone</option>
                                                                <option value="samsung">Samsung</option>
                                                                <option value="mi-phone">Mi</option>
                                                                <option value="vivo-phone">Vivo</option>
                                                                <option value="oppo-phone">Oppo</option>
                                                                <option value="realme">Realme</option>
                                                                <optgroup label="All Brand"></optgroup><option value="asus">Asus</option>
                                                                <option value="phones-blackberry">BlackBerry</option>
                                                                <option value="gionee-phone">Gionee</option>
                                                                <option value="google-pixel">Google Pixel</option>
                                                                <option value="honor">Honor</option>
                                                                <option value="htc">HTC</option>
                                                                <option value="huawei">Huawei</option>
                                                                <option value="infinix">Infinix</option>
                                                                <option value="intex">Intex</option>
                                                                <option value="iphone">iPhone</option>
                                                                <option value="karbonn">Karbonn</option>
                                                                <option value="lava">Lava</option>
                                                                <option value="lenovo-mobile">Lenovo</option>
                                                                <option value="lg">LG</option>
                                                                <option value="mi-phone">Mi</option>
                                                                <option value="micromax">Micromax</option>
                                                                <option value="motorola-phone">Motorola</option>
                                                                <option value="nokia">Nokia</option>
                                                                <option value="one-plus">One Plus</option>
                                                                <option value="oppo-phone">Oppo</option>
                                                                <option value="realme">Realme</option>
                                                                <option value="samsung">Samsung</option>
                                                                <option value="sony">Sony</option>
                                                                <option value="techno">Techno</option>
                                                                <option value="vivo-phone">Vivo</option>
                                                                <option value="other-mobiles">Other Mobiles</option>
                                                            </select>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>RAM</label>
                                                            <input type="text" name="ram" value={ram} onChange={(e) => setRam(e.target.value)} />
                                                        </div>

                                                        <div className={`${style.singleinput}`}>
                                                            <label>Storage</label>
                                                            <input type="text" name="storage" value={storage} onChange={(e) => setStorage(e.target.value)} />
                                                        </div>
                                                    </>
                                                    : ''}
                                                {/* Mobile Phones */}

                                                {/* Phone Accessories */}
                                                {pathname == "/sell/mobiles/phone-accessories" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Type *</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Phone<input type="radio" name="accessoriesType" value={`Phone`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Tablet <input type="radio" name="accessoriesType" value={`Tablet`} onChange={(e) => setType(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                    </>
                                                    : ''}
                                                {/* Phone Accessories */}

                                                {/* Tablet */}
                                                {pathname == "/sell/mobiles/tablet" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Type *</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>iPads<input type="radio" name="type" value={`iPads`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Samsung<input type="radio" name="type" value={`Samsung`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Other Tablets<input type="radio" name="type" value={`Other Tablets`} onChange={(e) => setType(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                    </>
                                                    : ''}
                                                {/* Tablet */}

                                                {/* Motorcycles */}
                                                {pathname == "/sell/bikes/motorcycles" || pathname == "/sell/bikes/scooters" ?
                                                    <>
                                                        {pathname == "/sell/bikes/motorcycles" ?
                                                            <>
                                                                <div className={`${style.singleselect}`}>
                                                                    <label>Brand*</label>
                                                                    <select name="brand" required onChange={(e) => setBrand(e.target.value)}>
                                                                        <option value=""></option>
                                                                        <option value="motorcycles-harley">Harley-Davidson</option>
                                                                        <option value="motorcycles-yezdi">Yezdi</option>
                                                                        <option value="motorcycles-bmw">BMW</option>
                                                                        <option value="motorcycles-kawasaki">Kawasaki</option>
                                                                        <option value="motorcycles-revolt">Revolt</option>
                                                                        <option value="motorcycles-ducati">Ducati</option>
                                                                        <option value="motorcycles-jawa">Jawa</option>
                                                                        <option value="motorcycles-beneli">Benelli</option>
                                                                        <option value="aprilia">Aprilia</option>
                                                                        <option value="avanturaa-choppers">Avanturaa Choppers</option>
                                                                        <option value="bsa">BSA</option>
                                                                        <option value="cfmoto">CFMoto</option>
                                                                        <option value="cleveland-cyclewerks">Cleveland CycleWerks</option>
                                                                        <option value="eider">Eider</option>
                                                                        <option value="emflux-motors">Emflux Motors</option>
                                                                        <option value="escorts">Escorts</option>
                                                                        <option value="evolet">Evolet</option>
                                                                        <option value="fb-mondial">FB Mondial</option>
                                                                        <option value="hero-electric">Hero Electric</option>
                                                                        <option value="hop-electric">Hop Electric</option>
                                                                        <option value="husqvarna">Husqvarna</option>
                                                                        <option value="hyosung">Hyosung</option>
                                                                        <option value="indian">Indian</option>
                                                                        <option value="keeway">Keeway</option>
                                                                        <option value="lml">LML</option>
                                                                        <option value="mahindra">Mahindra</option>
                                                                        <option value="matter">Matter</option>
                                                                        <option value="moto-guzzi">Moto Guzzi</option>
                                                                        <option value="moto-morini">Moto Morini</option>
                                                                        <option value="mv-agusta">MV Agusta</option>
                                                                        <option value="norton">Norton</option>
                                                                        <option value="odysse">Odysse</option>
                                                                        <option value="okinawa">Okinawa</option>
                                                                        <option value="ola">OLA</option>
                                                                        <option value="pure-ev">PURE EV</option>
                                                                        <option value="qj-motor">QJ Motor</option>
                                                                        <option value="swm">SWM</option>
                                                                        <option value="tork">Tork</option>
                                                                        <option value="triumph">Triumph</option>
                                                                        <option value="um">UM</option>
                                                                        <option value="vespa">Vespa</option>
                                                                        <option value="victory">Victory</option>
                                                                        <option value="vida">Vida</option>
                                                                        <option value="zontes">Zontes</option>
                                                                        <option value="motorcycles-bajaj">Bajaj</option>
                                                                        <option value="hero-motorcycle">Hero</option>
                                                                        <option value="hero-honda">Hero Honda</option>
                                                                        <option value="honda">Honda</option>
                                                                        <option value="ktm">KTM</option>
                                                                        <option value="royal-enfield">Royal Enfield</option>
                                                                        <option value="suzuki">Suzuki</option>
                                                                        <option value="tvs">TVS</option>
                                                                        <option value="yamaha">Yamaha</option>
                                                                        <option value="motorcycles-other">Other Brands</option>
                                                                    </select>
                                                                </div>
                                                            </>
                                                            : ''}
                                                        {pathname == "/sell/bikes/scooters" ?
                                                            <>
                                                                <div className={`${style.singleselect}`}>
                                                                    <label>Brand*</label>
                                                                    <select name="brand" required onChange={(e) => setBrand(e.target.value)}>
                                                                        <option value=""></option>
                                                                        <option value="scooters-vespa">Vespa</option>
                                                                        <option value="scooters-ampere">Ampere</option>
                                                                        <option value="scooters-ather">Ather</option>
                                                                        <option value="scooters-ola">OLA</option>
                                                                        <option value="scooters-husqvarna">Husqvarna</option>
                                                                        <option value="scooters-yamaha">Yamaha</option>
                                                                        <option value="scooters-vida">Vida</option>
                                                                        <option value="scooters-chetak">Chetak</option>
                                                                        <option value="scooters-bgauss">BGauss</option>
                                                                        <option value="scooters-bmw">BMW</option>
                                                                        <option value="22kymco">22Kymco</option>
                                                                        <option value="aprilia">Aprilia</option>
                                                                        <option value="avan-motors">Avan Motors</option>
                                                                        <option value="benling">Benling</option>
                                                                        <option value="bounce">Bounce</option>
                                                                        <option value="eeve">EeVe</option>
                                                                        <option value="eider">Eider</option>
                                                                        <option value="evolet">Evolet</option>
                                                                        <option value="gemopai">Gemopai</option>
                                                                        <option value="hero-electric">Hero Electric</option>
                                                                        <option value="hero-honda">Hero Honda</option>
                                                                        <option value="hyosung">Hyosung</option>
                                                                        <option value="ivoomi">iVOOMi</option>
                                                                        <option value="joy-e-bike">Joy e-bike</option>
                                                                        <option value="kinetic">Kinetic</option>
                                                                        <option value="lambretta">Lambretta</option>
                                                                        <option value="lml">LML</option>
                                                                        <option value="odysse">Odysse</option>
                                                                        <option value="okaya">Okaya</option>
                                                                        <option value="okinawa">Okinawa</option>
                                                                        <option value="piaggio">Piaggio</option>
                                                                        <option value="pure-ev">PURE EV</option>
                                                                        <option value="simple-energy">Simple Energy</option>
                                                                        <option value="techo-electra">Techo Electra</option>
                                                                        <option value="twenty-two-motors">Twenty Two Motors</option>
                                                                        <option value="um">UM</option>
                                                                        <option value="yo">Yo</option>
                                                                        <option value="bajaj">Bajaj</option>
                                                                        <option value="hero-scooter">Hero</option>
                                                                        <option value="scooters-honda">Honda</option>
                                                                        <option value="mahindra-scooter">Mahindra</option>
                                                                        <option value="suzuki-scooter">Suzuki</option>
                                                                        <option value="tvs-scooter">TVS</option>
                                                                        <option value="other-brands">Other Brands</option>
                                                                    </select>
                                                                </div>
                                                            </>
                                                            : ''}


                                                        <div className={`${style.singleinput}`}>
                                                            <label>Year *</label>
                                                            <input type="text" name="year" value={year} onChange={(e) => setYear(e.target.value)} maxLength={4} required />
                                                        </div>

                                                        <div className={`${style.singleinput}`}>
                                                            <label>KM driven *</label>
                                                            <input type="text" name="kmdriven" value={kmdriven} onChange={(e) => setKmdriven(e.target.value)} maxLength={6}  required />
                                                            <p className={`${style.inputlength}`}>{title ? title.length : '0'}/6</p>
                                                        </div>

                                                        <div className={`${style.singleradio}`}>
                                                            <label>Fuel*</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>CNG & Hybrids <input type="radio" name="fuel" value={`CNG & Hybrids`} onChange={(e) => setFuel(e.target.value)} required /></label>
                                                                <label>Diesel <input type="radio" name="fuel" value={`Diesel`} onChange={(e) => setFuel(e.target.value)} required /></label>
                                                                <label>Electric <input type="radio" name="fuel" value={`Electric`} onChange={(e) => setFuel(e.target.value)} required /></label>
                                                                <label>LPG <input type="radio" name="fuel" value={`LPG`} onChange={(e) => setFuel(e.target.value)} required /></label>
                                                                <label>Petrol <input type="radio" name="fuel" value={`Petrol`} onChange={(e) => setFuel(e.target.value)} required /></label>
                                                            </div>
                                                        </div>

                                                        <div className={`${style.singleradio}`}>
                                                            <label>No. of Owners *</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>1st<input type="radio" name="Owners" value={`1st`} onChange={(e) => setOwner(e.target.value)} /></label>
                                                                <label>2nd <input type="radio" name="Owners" value={`2nd`} onChange={(e) => setOwner(e.target.value)} /></label>
                                                                <label>3rd <input type="radio" name="Owners" value={`3rd`} onChange={(e) => setOwner(e.target.value)} /></label>
                                                                <label>4th <input type="radio" name="Owners" value={`4th`} onChange={(e) => setOwner(e.target.value)} /></label>
                                                                <label>4+ <input type="radio" name="Owners" value={`4+`} onChange={(e) => setOwner(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                    </>
                                                    : ''}
                                                {/* Motorcycles */}

                                                {/* Data entry & Back office */}
                                                {pathname == "/sell/jobs/data-entry-and-back-office" || pathname == "/sell/jobs/sales-and-marketing" || pathname == "/sell/jobs/bpo-and-telecaller" || pathname == "/sell/jobs/driver" || pathname == "/sell/jobs/office-assistant" || pathname == "/sell/jobs/delivery-collection" || pathname == "/sell/jobs/teacher" || pathname == "/sell/jobs/cook" || pathname == "/sell/jobs/receptionist-and-front-office'" || pathname == "/sell/jobs/operator-and-technician" || pathname == "/sell/jobs/it-engineer-and-developer" || pathname == "/sell/jobs/hotel-and-travel-executive" || pathname == "/sell/jobs/accountant" || pathname == "/sell/jobs/designer" || pathname == "/sell/jobs/other-jobs" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Salary period *</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Hourly<input type="radio" name="salaryperiod" value={`Hourly`} onChange={(e) => setSalaryperiod(e.target.value)} required /></label>
                                                                <label>Monthly<input type="radio" name="salaryperiod" value={`Monthly`} onChange={(e) => setSalaryperiod(e.target.value)} required /></label>
                                                                <label>Weekly<input type="radio" name="salaryperiod" value={`Weekly`} onChange={(e) => setSalaryperiod(e.target.value)} required /></label>
                                                                <label>Yearly<input type="radio" name="salaryperiod" value={`Yearly`} onChange={(e) => setSalaryperiod(e.target.value)} required /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Position type *</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Contract<input type="radio" name="positiontype" value={`Contract`} onChange={(e) => setPositiontype(e.target.value)} required /></label>
                                                                <label>Full-time<input type="radio" name="positiontype" value={`Full-time`} onChange={(e) => setPositiontype(e.target.value)} required /></label>
                                                                <label>Part-time<input type="radio" name="positiontype" value={`Part-time`} onChange={(e) => setPositiontype(e.target.value)} required /></label>
                                                                <label>Temporary<input type="radio" name="positiontype" value={`Temporary`} onChange={(e) => setPositiontype(e.target.value)} required /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Salary from</label>
                                                            <input type="text" value={salaryFrom} onChange={(e) => setSalaryFrom(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Salary to</label>
                                                            <input type="text" value={salaryTo} onChange={(e) => setSalaryTo(e.target.value)} />
                                                        </div>
                                                    </>
                                                    : ''}
                                                {/* Data entry & Back office */}


                                                {/*Cars and Commercial */}
                                                {pathname == "/sell/cars/cars" || pathname == "/sell/commercial-vehicles-and-spares/commercial-and-other-vehicles" ?
                                                    <>
                                                        {pathname == "/sell/cars/cars" ?
                                                            <>
                                                                <div className={`${style.singleselect}`}>
                                                                    <label>Brand*</label>
                                                                    <select name="brand" required onChange={(e) => setBrand(e.target.value)}>
                                                                        <option value=""></option>
                                                                        <optgroup label="Popular Brand"></optgroup>
                                                                        <option value="maruti-suzuki">Maruti Suzuki</option>
                                                                        <option value="hyundai">Hyundai</option>
                                                                        <option value="tata">Tata</option>
                                                                        <option value="mahindra">Mahindra</option>
                                                                        <option value="toyota">Toyota</option>
                                                                        <option value="cars-honda">Honda</option>
                                                                        <optgroup label="All Brand"></optgroup>
                                                                        <option value="byd">BYD</option>
                                                                        <option value="audi-1">Audi</option>
                                                                        <option value="ambassador-1">Ambassador</option>
                                                                        <option value="ashok-1">Ashok</option>
                                                                        <option value="ashok-leyland-1">Ashok Leyland</option>
                                                                        <option value="aston-1">Aston</option>
                                                                        <option value="aston-martin-1">Aston Martin</option>
                                                                        <option value="bajaj">Bajaj</option>
                                                                        <option value="bentley-1">Bentley</option>
                                                                        <option value="citroen-1">Citroen</option>
                                                                        <option value="mclaren">McLaren</option>
                                                                        <option value="fisker">Fisker</option>
                                                                        <option value="tesla-1">Tesla</option>
                                                                        <option value="bmw">BMW</option>
                                                                        <option value="bugatti">Bugatti</option>
                                                                        <option value="cadillac">Cadillac</option>
                                                                        <option value="caterham">Caterham</option>
                                                                        <option value="chevrolet">Chevrolet</option>
                                                                        <option value="chrysler">Chrysler</option>
                                                                        <option value="conquest">Conquest</option>
                                                                        <option value="daewoo">Daewoo</option>
                                                                        <option value="datsun">Datsun</option>
                                                                        <option value="dc">Dc</option>
                                                                        <option value="dodge">Dodge</option>
                                                                        <option value="eicher-polaris">Eicher Polaris</option>
                                                                        <option value="ferrari">Ferrari</option>
                                                                        <option value="fiat">Fiat</option>
                                                                        <option value="force-motors">Force Motors</option>
                                                                        <option value="ford">Ford</option>
                                                                        <option value="cars-honda">Honda</option>
                                                                        <option value="hummer">Hummer</option>
                                                                        <option value="hyundai">Hyundai</option>
                                                                        <option value="icml">ICML</option>
                                                                        <option value="infiniti">Infiniti</option>
                                                                        <option value="isuzu">Isuzu</option>
                                                                        <option value="jaguar">Jaguar</option>
                                                                        <option value="jeep">Jeep</option>
                                                                        <option value="kia">Kia</option>
                                                                        <option value="lamborghini">Lamborghini</option>
                                                                        <option value="land-rover">Land Rover</option>
                                                                        <option value="lexus">Lexus</option>
                                                                        <option value="mahindra">Mahindra</option>
                                                                        <option value="mahindra-renault">Mahindra Renault</option>
                                                                        <option value="maruti-suzuki">Maruti Suzuki</option>
                                                                        <option value="maserati">Maserati</option>
                                                                        <option value="maybach">Maybach</option>
                                                                        <option value="mazda">Mazda</option>
                                                                        <option value="mercedes-benz">Mercedes-Benz</option>
                                                                        <option value="mg">MG</option>
                                                                        <option value="mini">Mini</option>
                                                                        <option value="mitsubishi">Mitsubishi</option>
                                                                        <option value="nissan">Nissan</option>
                                                                        <option value="opel">Opel</option>
                                                                        <option value="peugeot">Peugeot</option>
                                                                        <option value="porsche">Porsche</option>
                                                                        <option value="premier">Premier</option>
                                                                        <option value="renault">Renault</option>
                                                                        <option value="rolls-royce">Rolls-Royce</option>
                                                                        <option value="san">San</option>
                                                                        <option value="sipani">Sipani</option>
                                                                        <option value="skoda">Skoda</option>
                                                                        <option value="smart">Smart</option>
                                                                        <option value="ssangyong">Ssangyong</option>
                                                                        <option value="subaru">Subaru</option>
                                                                        <option value="tata">Tata</option>
                                                                        <option value="toyota">Toyota</option>
                                                                        <option value="volkswagen">Volkswagen</option>
                                                                        <option value="volvo">Volvo</option>
                                                                    </select>
                                                                </div>
                                                            </>
                                                            : ''}
                                                        {pathname == "/sell/commercial-vehicles-and-spares/commercial-and-other-vehicles" ?
                                                            <>
                                                            <div className={`${style.singleselect}`}>
                                                                <label>Brand*</label>
                                                                <select name="brand" required onChange={(e) => setBrand(e.target.value)}>
                                                                    <option value=""></option>
                                                                    <option value="auto-rickshaws-&amp;-e-rickshaws">Auto-rickshaws &amp; E-rickshaws</option>
                                                                    <option value="buses">Buses</option>
                                                                    <option value="trucks">Trucks</option>
                                                                    <option value="heavy-machinery">Heavy Machinery</option>
                                                                    <option value="modified-jeeps">Modified Jeeps</option>
                                                                    <option value="pick-up-vans-/-pick-up-trucks">Pick-up vans / Pick-up trucks</option>
                                                                    <option value="scrap-cars">Scrap Cars</option>
                                                                    <option value="taxi-cabs">Taxi Cabs</option>
                                                                    <option value="tractors">Tractors</option>
                                                                    <option value="others">Others</option>
                                                                </select>
                                                            </div>
                                                            </>
                                                            : ''}
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Year *</label>
                                                            <input type="text" name="year" value={year} onChange={(e) => setYear(e.target.value)} maxLength={4} />
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Fuel*</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>CNG & Hybrids <input type="radio" name="fuel" value={`CNG & Hybrids`} onChange={(e) => setFuel(e.target.value)} /></label>
                                                                <label>Diesel <input type="radio" name="fuel" value={`Diesel`} onChange={(e) => setFuel(e.target.value)} /></label>
                                                                <label>Electric <input type="radio" name="fuel" value={`Electric`} onChange={(e) => setFuel(e.target.value)} /></label>
                                                                <label>LPG <input type="radio" name="fuel" value={`LPG`} onChange={(e) => setFuel(e.target.value)} /></label>
                                                                <label>Petrol <input type="radio" name="fuel" value={`Petrol`} onChange={(e) => setFuel(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Transmission *</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Automatic <input type="radio" name="transmission" value={`Automatic`} onChange={(e) => setTransmission(e.target.value)} /></label>
                                                                <label>Manual <input type="radio" name="transmission" value={`Manual`} onChange={(e) => setTransmission(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>KM driven *</label>
                                                            <input type="text" name="kmdriven" value={kmdriven} onChange={(e) => setKmdriven(e.target.value)} maxLength={6} />
                                                            <p className={`${style.inputlength}`}>{title ? title.length : '0'}/6</p>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>No. of Owners *</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>1st<input type="radio" name="Owners" value={`1st`} onChange={(e) => setOwner(e.target.value)} /></label>
                                                                <label>2nd <input type="radio" name="Owners" value={`2nd`} onChange={(e) => setOwner(e.target.value)} /></label>
                                                                <label>3rd <input type="radio" name="Owners" value={`3rd`} onChange={(e) => setOwner(e.target.value)} /></label>
                                                                <label>4th <input type="radio" name="Owners" value={`4th`} onChange={(e) => setOwner(e.target.value)} /></label>
                                                                <label>4+ <input type="radio" name="Owners" value={`4+`} onChange={(e) => setOwner(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                    </>
                                                    : ''}
                                                {/* Cars and Commercial */}

                                                {/* Cars Spare Parts */}
                                                {pathname == "/sell/commercial-vehicles-and-spares/spare-parts" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Type*</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Wheels & Tyres <input type="radio" name="type" value={`Wheels & Tyres`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Audio & Other Accessories <input type="radio" name="type" value={`Audio & Other Accessories`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Other Spare Parts <input type="radio" name="type" value={`Other Spare Parts`} onChange={(e) => setType(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                    </>
                                                    : ''}
                                                {/* Cars Spare Parts */}

                                                {/* For Sale: Houses & Apartments */}
                                                {pathname == "/sell/properties/for-sale-houses-and-apartments" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Type *</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Apartments<input type="radio" name="type" value={`Apartments`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Builder Floors <input type="radio" name="type" value={`Builder Floors`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Farm Houses <input type="radio" name="type" value={`Farm Houses`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Houses & Villas <input type="radio" name="type" value={`Houses & Villas`} onChange={(e) => setType(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Bedrooms</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>1<input type="radio" name="Bedrooms" value={`1`} onChange={(e) => setBedrooms(e.target.value)} /></label>
                                                                <label>2<input type="radio" name="Bedrooms" value={`2`} onChange={(e) => setBedrooms(e.target.value)} /></label>
                                                                <label>3<input type="radio" name="Bedrooms" value={`3`} onChange={(e) => setBedrooms(e.target.value)} /></label>
                                                                <label>4<input type="radio" name="Bedrooms" value={`4`} onChange={(e) => setBedrooms(e.target.value)} /></label>
                                                                <label>4+<input type="radio" name="Bedrooms" value={`4+`} onChange={(e) => setBedrooms(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Bathrooms</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>1<input type="radio" name="Bathrooms" value={`1`} onChange={(e) => setBathrooms(e.target.value)} /></label>
                                                                <label>2<input type="radio" name="Bathrooms" value={`2`} onChange={(e) => setBathrooms(e.target.value)} /></label>
                                                                <label>3<input type="radio" name="Bathrooms" value={`3`} onChange={(e) => setBathrooms(e.target.value)} /></label>
                                                                <label>4<input type="radio" name="Bathrooms" value={`4`} onChange={(e) => setBathrooms(e.target.value)} /></label>
                                                                <label>4+<input type="radio" name="Bathrooms" value={`4+`} onChange={(e) => setBathrooms(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Furnishing</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Furnished<input type="radio" name="Furnishing" value={`Furnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                                <label>Semi-Furnished<input type="radio" name="Furnishing" value={`Semi-Furnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                                <label>Unfurnished<input type="radio" name="Furnishing" value={`Unfurnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Construction Status</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>New Launch<input type="radio" name="constructionStatus" value={`New Launch`} onChange={(e) => setConstructionStatus(e.target.value)} /></label>
                                                                <label>Ready to Move<input type="radio" name="constructionStatus" value={`Ready to Move`} onChange={(e) => setConstructionStatus(e.target.value)} /></label>
                                                                <label>Under Construction<input type="radio" name="constructionStatus" value={`Under Construction`} onChange={(e) => setConstructionStatus(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Listed by</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Builder<input type="radio" name="Listedby" value={`Builder`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                                <label>Dealer<input type="radio" name="Listedby" value={`Dealer`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                                <label>Owner<input type="radio" name="Listedby" value={`Owner`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Super Builtup area (ft<sup>2</sup>) *</label>
                                                            <input type="text" value={superBuiltupArea} onChange={(e) => setSuperBuiltupArea(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Carpet Area (ft<sup>2</sup>) *</label>
                                                            <input type="text" value={carpetArea} onChange={(e) => setCarpetArea(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Maintenance (Monthly)</label>
                                                            <input type="text" value={maintenance} onChange={(e) => setMaintenance(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Total Floors</label>
                                                            <input type="text" value={totalFloors} onChange={(e) => setTotalFloors(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Floor No</label>
                                                            <input type="text" value={floorNo} onChange={(e) => setFloorNo(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Car Parking</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>0<input type="radio" name="carParking" value={`0`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>1<input type="radio" name="carParking" value={`1`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>2<input type="radio" name="carParking" value={`2`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>3<input type="radio" name="carParking" value={`3`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>3+<input type="radio" name="carParking" value={`3+`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleselect}`}>
                                                            <label>Facing</label>
                                                            <select required onChange={(e) => setFacing(e.target.value)}>
                                                                <option value=""></option>
                                                                <option value="east">East</option>
                                                                <option value="north">North</option>
                                                                <option value="northeast">North-East</option>
                                                                <option value="northwest">North-West</option>
                                                                <option value="south">South</option>
                                                                <option value="southeast">South-East</option>
                                                                <option value="southwest">South-West</option>
                                                                <option value="west">West</option>
                                                            </select>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Project Name</label>
                                                            <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} maxLength={70} required />
                                                            <p className={`${style.inputlength}`}>{title ? title.length : '0'}/70</p>
                                                        </div>

                                                    </> : ''}
                                                {/* For Sale: Houses & Apartments */}

                                                {/* For Rent: Houses & Apartments */}
                                                {pathname == "/sell/properties/for-rent-houses-and-apartments" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Type *</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Apartments<input type="radio" name="type" value={`Apartments`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Builder Floors <input type="radio" name="type" value={`Builder Floors`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Houses & Villas <input type="radio" name="type" value={`Houses & Villas`} onChange={(e) => setType(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Bedrooms</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>1<input type="radio" name="Bedrooms" value={`1`} onChange={(e) => setBedrooms(e.target.value)} /></label>
                                                                <label>2<input type="radio" name="Bedrooms" value={`2`} onChange={(e) => setBedrooms(e.target.value)} /></label>
                                                                <label>3<input type="radio" name="Bedrooms" value={`3`} onChange={(e) => setBedrooms(e.target.value)} /></label>
                                                                <label>4<input type="radio" name="Bedrooms" value={`4`} onChange={(e) => setBedrooms(e.target.value)} /></label>
                                                                <label>4+<input type="radio" name="Bedrooms" value={`4+`} onChange={(e) => setBedrooms(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Bathrooms</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>1<input type="radio" name="Bathrooms" value={`1`} onChange={(e) => setBathrooms(e.target.value)} /></label>
                                                                <label>2<input type="radio" name="Bathrooms" value={`2`} onChange={(e) => setBathrooms(e.target.value)} /></label>
                                                                <label>3<input type="radio" name="Bathrooms" value={`3`} onChange={(e) => setBathrooms(e.target.value)} /></label>
                                                                <label>4<input type="radio" name="Bathrooms" value={`4`} onChange={(e) => setBathrooms(e.target.value)} /></label>
                                                                <label>4+<input type="radio" name="Bathrooms" value={`4+`} onChange={(e) => setBathrooms(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Furnishing</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Furnished<input type="radio" name="Furnishing" value={`Furnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                                <label>Semi-Furnished<input type="radio" name="Furnishing" value={`Semi-Furnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                                <label>Unfurnished<input type="radio" name="Furnishing" value={`Unfurnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Listed by</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Builder<input type="radio" name="Listedby" value={`Builder`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                                <label>Dealer<input type="radio" name="Listedby" value={`Dealer`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                                <label>Owner<input type="radio" name="Listedby" value={`Owner`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Super Builtup area (ft<sup>2</sup>) *</label>
                                                            <input type="text" value={superBuiltupArea} onChange={(e) => setSuperBuiltupArea(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Carpet Area (ft<sup>2</sup>) *</label>
                                                            <input type="text" value={carpetArea} onChange={(e) => setCarpetArea(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Bachelors Allowed</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>No<input type="radio" name="bachelorsallowence" value={`No`} onChange={(e) => setBachelorsAllowence(e.target.value)} /></label>
                                                                <label>Yes<input type="radio" name="bachelorsallowence" value={`Yes`} onChange={(e) => setBachelorsAllowence(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Maintenance (Monthly)</label>
                                                            <input type="text" value={maintenance} onChange={(e) => setMaintenance(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Total Floors</label>
                                                            <input type="text" value={totalFloors} onChange={(e) => setTotalFloors(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Floor No</label>
                                                            <input type="text" value={floorNo} onChange={(e) => setFloorNo(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Car Parking</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>0<input type="radio" name="carParking" value={`0`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>1<input type="radio" name="carParking" value={`1`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>2<input type="radio" name="carParking" value={`2`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>3<input type="radio" name="carParking" value={`3`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>3+<input type="radio" name="carParking" value={`3+`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleselect}`}>
                                                            <label>Facing</label>
                                                            <select required onChange={(e) => setFacing(e.target.value)}>
                                                                <option value=""></option>
                                                                <option value="east">East</option>
                                                                <option value="north">North</option>
                                                                <option value="northeast">North-East</option>
                                                                <option value="northwest">North-West</option>
                                                                <option value="south">South</option>
                                                                <option value="southeast">South-East</option>
                                                                <option value="southwest">South-West</option>
                                                                <option value="west">West</option>
                                                            </select>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Project Name</label>
                                                            <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} maxLength={70} required />
                                                            <p className={`${style.inputlength}`}>{title ? title.length : '0'}/70</p>
                                                        </div>

                                                    </> : ''}
                                                {/* For Rent: Houses & Apartments */}

                                                {/* PG & Guest Houses */}
                                                {pathname == "/sell/properties/pg-guest-houses" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Subtype*</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Guest Houses <input type="radio" name="subtype" value={`Guest Houses`} onChange={(e) => setSubType(e.target.value)} /></label>
                                                                <label>PG <input type="radio" name="subtype" value={`PG`} onChange={(e) => setSubType(e.target.value)} /></label>
                                                                <label>Roommate <input type="radio" name="subtype" value={`Roommate`} onChange={(e) => setSubType(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Furnishing</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Furnished<input type="radio" name="Furnishing" value={`Furnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                                <label>Semi-Furnished<input type="radio" name="Furnishing" value={`Semi-Furnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                                <label>Unfurnished<input type="radio" name="Furnishing" value={`Unfurnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Listed by</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Builder<input type="radio" name="Listedby" value={`Builder`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                                <label>Dealer<input type="radio" name="Listedby" value={`Dealer`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                                <label>Owner<input type="radio" name="Listedby" value={`Owner`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Car Parking</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>0<input type="radio" name="carParking" value={`0`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>1<input type="radio" name="carParking" value={`1`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>2<input type="radio" name="carParking" value={`2`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>3<input type="radio" name="carParking" value={`3`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>3+<input type="radio" name="carParking" value={`3+`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Meals Included</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>No<input type="radio" name="mealsincluded" value={`No`} onChange={(e) => setMealIncluded(e.target.value)} /></label>
                                                                <label>Yes<input type="radio" name="mealsincluded" value={`Yes`} onChange={(e) => setMealIncluded(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                    </>
                                                    : ''}
                                                {/* PG & Guest Houses */}

                                                {/* Land and Plots */}
                                                {pathname == "/sell/properties/lands-and-plots" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Type *</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>For Rent<input type="radio" name="type" value={`For Rent`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>For Sale<input type="radio" name="type" value={`For Sale`} onChange={(e) => setType(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Listed by</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Builder<input type="radio" name="Listedby" value={`Builder`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                                <label>Dealer<input type="radio" name="Listedby" value={`Dealer`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                                <label>Owner<input type="radio" name="Listedby" value={`Owner`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Plot Area *</label>
                                                            <input type="text" value={plotArea} onChange={(e) => setPlotArea(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Length</label>
                                                            <input type="text" value={plotLength} onChange={(e) => setPlotLength(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Breadth</label>
                                                            <input type="text" value={plotBreadth} onChange={(e) => setPlotBreadth(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleselect}`}>
                                                            <label>Facing</label>
                                                            <select required onChange={(e) => setFacing(e.target.value)}>
                                                                <option value=""></option>
                                                                <option value="east">East</option>
                                                                <option value="north">North</option>
                                                                <option value="northeast">North-East</option>
                                                                <option value="northwest">North-West</option>
                                                                <option value="south">South</option>
                                                                <option value="southeast">South-East</option>
                                                                <option value="southwest">South-West</option>
                                                                <option value="west">West</option>
                                                            </select>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Project Name</label>
                                                            <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} maxLength={70} required />
                                                            <p className={`${style.inputlength}`}>{title ? title.length : '0'}/70</p>
                                                        </div>

                                                    </> : ''}
                                                {/* Land and Plots */}

                                                {/* For Sale: Shops & Offices */}
                                                {pathname == "/sell/properties/for-rent-shops-and-offices" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Furnishing</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Furnished<input type="radio" name="Furnishing" value={`Furnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                                <label>Semi-Furnished<input type="radio" name="Furnishing" value={`Semi-Furnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                                <label>Unfurnished<input type="radio" name="Furnishing" value={`Unfurnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Listed by</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Builder<input type="radio" name="Listedby" value={`Builder`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                                <label>Dealer<input type="radio" name="Listedby" value={`Dealer`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                                <label>Owner<input type="radio" name="Listedby" value={`Owner`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Super Builtup area (ft<sup>2</sup>) *</label>
                                                            <input type="text" value={superBuiltupArea} onChange={(e) => setSuperBuiltupArea(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Carpet Area (ft<sup>2</sup>) *</label>
                                                            <input type="text" value={carpetArea} onChange={(e) => setCarpetArea(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Maintenance (Monthly)</label>
                                                            <input type="text" value={maintenance} onChange={(e) => setMaintenance(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Car Parking</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>0<input type="radio" name="carParking" value={`0`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>1<input type="radio" name="carParking" value={`1`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>2<input type="radio" name="carParking" value={`2`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>3<input type="radio" name="carParking" value={`3`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>3+<input type="radio" name="carParking" value={`3+`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Washrooms</label>
                                                            {/* Int only */}
                                                            <input type="text" value={washrooms} onChange={(e) => setWashrooms(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Project Name</label>
                                                            <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} maxLength={70} required />
                                                            <p className={`${style.inputlength}`}>{title ? title.length : '0'}/70</p>
                                                        </div>

                                                    </> : ''}
                                                {/* For Sale: Shops & Offices */}

                                                {/* For Rent: Houses & Apartments */}
                                                {pathname == "/sell/properties/for-sale-shops-and-offices" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Furnishing</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Furnished<input type="radio" name="Furnishing" value={`Furnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                                <label>Semi-Furnished<input type="radio" name="Furnishing" value={`Semi-Furnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                                <label>Unfurnished<input type="radio" name="Furnishing" value={`Unfurnished`} onChange={(e) => setFurnishing(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Construction Status</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>New Launch<input type="radio" name="constructionStatus" value={`New Launch`} onChange={(e) => setConstructionStatus(e.target.value)} /></label>
                                                                <label>Ready to Move<input type="radio" name="constructionStatus" value={`Ready to Move`} onChange={(e) => setConstructionStatus(e.target.value)} /></label>
                                                                <label>Under Construction<input type="radio" name="constructionStatus" value={`Under Construction`} onChange={(e) => setConstructionStatus(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Listed by</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Builder<input type="radio" name="Listedby" value={`Builder`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                                <label>Dealer<input type="radio" name="Listedby" value={`Dealer`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                                <label>Owner<input type="radio" name="Listedby" value={`Owner`} onChange={(e) => setListedBy(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Super Builtup area (ft<sup>2</sup>) *</label>
                                                            <input type="text" value={superBuiltupArea} onChange={(e) => setSuperBuiltupArea(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Carpet Area (ft<sup>2</sup>) *</label>
                                                            <input type="text" value={carpetArea} onChange={(e) => setCarpetArea(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Maintenance (Monthly)</label>
                                                            <input type="text" value={maintenance} onChange={(e) => setMaintenance(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Car Parking</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>0<input type="radio" name="carParking" value={`0`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>1<input type="radio" name="carParking" value={`1`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>2<input type="radio" name="carParking" value={`2`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>3<input type="radio" name="carParking" value={`3`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                                <label>3+<input type="radio" name="carParking" value={`3+`} onChange={(e) => setCarParking(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Washrooms</label>
                                                            {/* Int only */}
                                                            <input type="text" value={washrooms} onChange={(e) => setWashrooms(e.target.value)} />
                                                        </div>
                                                        <div className={`${style.singleinput}`}>
                                                            <label>Project Name</label>
                                                            <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} maxLength={70} required />
                                                            <p className={`${style.inputlength}`}>{title ? title.length : '0'}/70</p>
                                                        </div>

                                                    </> : ''}
                                                {/* For Rent: Shops & Offices */}

                                                {/* Education & Classes */}
                                                {pathname == "/sell/services/education-and-classes" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Type*</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Tutions<input type="radio" name="type" value={`Tutions`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Hobby Classes<input type="radio" name="type" value={`Hobby Classes`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Skill Development<input type="radio" name="type" value={`Skill Development`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Others<input type="radio" name="type" value={`Others`} onChange={(e) => setType(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                    </> : ''}
                                                {/* Education & Classes */}

                                                {/* Electronics Repair & Services */}
                                                {pathname == "/sell/services/electronics-repair-and-services" ?
                                                    <>
                                                        <div className={`${style.singleselect}`}>
                                                            <label>Type*</label>
                                                            <select required onChange={(e) => setType(e.target.value)}>
                                                                <optgroup label="Popular Type"></optgroup>
                                                                <option value="ac">AC</option>
                                                                <option value="home-appliances">Home Appliances</option>
                                                                <option value="tv-video-audio">TV, Video/Audio</option>
                                                                <option value="computer-laptops">Computer &amp; Laptops</option>
                                                                <option value="ro-water-purifier">RO / Water Purifier</option>
                                                                <option value="others">Others</option>
                                                                <optgroup label="All Type"></optgroup>
                                                                <option value="ac">AC</option>
                                                                <option value="home-appliances">Home Appliances</option>
                                                                <option value="tv-video-audio">TV, Video/Audio</option>
                                                                <option value="computer-laptops">Computer &amp; Laptops</option>
                                                                <option value="ro-water-purifier">RO / Water Purifier</option>
                                                                <option value="others">Others</option>
                                                            </select>
                                                        </div>
                                                    </> : ''}
                                                {/* Electronics Repair & Services */}

                                                {/* Health & Beauty */}
                                                {pathname == "/sell/services/health-and-beauty" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Type*</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Fitness & Wellness<input type="radio" name="type" value={`Fitness & Wellness`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Salons Services<input type="radio" name="type" value={`Salons Services`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Health & Safety<input type="radio" name="type" value={`Health & Safety`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Others<input type="radio" name="type" value={`Others`} onChange={(e) => setType(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                    </> : ''}
                                                {/* Health & Beauty */}

                                                {/* Cleaning & Pest Control */}
                                                {pathname == "/sell/services/cleaning-and-pest-control" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Type*</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>Home Cleaning<input type="radio" name="type" value={`Home Cleaning`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Pest Control<input type="radio" name="type" value={`Pest Control`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Car Cleaning<input type="radio" name="type" value={`Car Cleaning`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Others<input type="radio" name="type" value={`Others`} onChange={(e) => setType(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                    </> : ''}
                                                {/* Cleaning & Pest Control */}

                                                {/* Legal & Documentation Services */}
                                                {pathname == "/sell/services/legal-and-documentation-services" ?
                                                    <>
                                                        <div className={`${style.singleradio}`}>
                                                            <label>Type*</label>
                                                            <div className={`${style.radiolist}`}>
                                                                <label>RTO Related<input type="radio" name="type" value={`RTO Related`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>KYC Related<input type="radio" name="type" value={`KYC Related`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Notary Services<input type="radio" name="type" value={`Notary Services`} onChange={(e) => setType(e.target.value)} /></label>
                                                                <label>Others<input type="radio" name="type" value={`Others`} onChange={(e) => setType(e.target.value)} /></label>
                                                            </div>
                                                        </div>
                                                    </> : ''}
                                                {/* Legal & Documentation Services */}


                                                <div className={`${style.formphoto}`}>
                                                    <div className={`${style.formtitle}`}>
                                                        <h3>UPLOAD UP TO 20 PHOTOS</h3>
                                                    </div>
                                                    <div className={`${style.row} row`}>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.col_md_3}`}>
                                                            <div className={`${style.singlephoto}`}>
                                                                <div className={`${style.text}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" /><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>
                                                                    <p>Add Photo</p>
                                                                </div>
                                                                <input type="file" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${style.col_md_6} col-md-6`}>
                                                <div className={`${style.singleinput}`}>
                                                    <label>Title*</label>
                                                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" maxLength={70} required />
                                                    <p className={`${style.inputlength}`}>{title ? title.length : '0'}/70</p>
                                                    {/* <p className={style.shortdescription}>Mention the key features of your item (e.g. brand, model, age, type)</p> */}
                                                </div>
                                                <div className={`${style.singletextarea}`}>
                                                    <label>Description*</label>
                                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} maxLength={4096} required></textarea>
                                                    <p className={`${style.inputlength}`}>{description ? description.length : '0'}/4096</p>
                                                </div>
                                                <hr />
                                                <div className={`${style.price}`}>
                                                    <div className={`${style.formtitle}`}>
                                                        <h3>SET A PRICE*</h3>
                                                    </div>
                                                    <div className={`${style.singleinput}`}>
                                                        <label>Price</label>
                                                        <div className={`${style.iconinput}`}>
                                                            <span>&#8377;</span>
                                                            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} maxLength={10} required />

                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className={`${style.price}`}>
                                                    <div className={`${style.formtitle}`}>
                                                        <h3>CONFIRM YOUR LOCATION</h3>
                                                    </div>
                                                    <div className={`${style.singleinput}`}>
                                                        <label>State*</label>
                                                        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                                                    </div>
                                                    <div className={`${style.singleinput}`}>
                                                        <label>City*</label>
                                                        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                                                    </div>
                                                    <div className={`${style.singleinput}`}>
                                                        <label>Nearby*</label>
                                                        <input type="text" value={nearby} onChange={(e) => setNearby(e.target.value)} />
                                                    </div>
                                                    {/* <div className={`${style.singleselect}`}>
                                                        <label>State*</label>
                                                        <select>
                                                            <option>Delhi</option>
                                                        </select>
                                                    </div>
                                                    <div className={`${style.singleselect}`}>
                                                        <label>City*</label>
                                                        <select>
                                                            <option>Delhi</option>
                                                        </select>
                                                    </div>
                                                    <div className={`${style.singleselect}`}>
                                                        <label>Nearby*</label>
                                                        <select>
                                                            <option>Delhi</option>
                                                        </select>
                                                    </div> */}
                                                </div>
                                                <hr />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className={`${style.col_md_4} col-md-4`}>
                                <div className={`${style.realview}`}>
                                    <div className={`${style.singleadvertisement}`}>
                                        <div className={`${style.image}`}>
                                            <Image src={DummyImage} alt="Advertisement Image" />
                                        </div>
                                        <div className={`${style.badges}`}>
                                            <ul>
                                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" /></svg> Featured</li>
                                                <li className={`${style.urjent}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16"><path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" /><path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" /></svg>Urgent</li>
                                                {/* <li>Featured</li> */}
                                            </ul>
                                        </div>

                                        <div className={`${style.text}`}>
                                            <div className={`${style.advertisementtitle}`}>
                                                <h3>{title}</h3>
                                            </div>
                                            <div className={`${style.advertisementtitle}`}>
                                                <h3>{price}</h3>
                                            </div>
                                            <div className={`${style.feature}`}>
                                                <ul>
                                                    {type ? <li><span>Type</span> <span>{type}</span></li> : ''}
                                                    {brand ? <li><span>Brand</span> <span>{brand}</span></li> : ''}
                                                    {ram ? <li><span>Ram</span><span>{ram}</span></li> : ''}
                                                    {storage ? <li><span>Storage</span> <span>{storage}</span></li> : ''}
                                                    {year ? <li><span>Year</span> <span>{year}</span></li> : ''}
                                                    {kmdriven ? <li><span>KM Driven</span> <span>{kmdriven}</span></li> : ''}
                                                    {fuel ? <li><span>Fuel</span> <span>{fuel}</span></li> : ''}
                                                    {owner ? <li><span>Owner</span> <span>{owner}</span></li> : ''}
                                                    {salaryperiod ? <li><span>Salary Period</span> <span>{salaryperiod}</span></li> : ''}
                                                    {positiontype ? <li><span>Position</span> <span>{positiontype}</span></li> : ''}
                                                    {salaryFrom ? <li><span>Salary From</span> <span>&#8377; {salaryFrom}</span></li> : ''}
                                                    {salaryTo ? <li><span>Salary To</span> <span>&#8377; {salaryTo}</span></li> : ''}
                                                    {transmission ? <li><span>Transmission</span> <span>{transmission}</span></li> : ''}
                                                    {bedrooms ? <li><span>Bedrooms</span> <span>{bedrooms}</span></li> : ''}
                                                    {bathrooms ? <li><span>Bathrooms</span> <span>{bathrooms}</span></li> : ''}
                                                    {furnishing ? <li><span>Furnishing</span> <span>{furnishing}</span></li> : ''}
                                                    {constructionStatus ? <li><span>Construction Status</span> <span>{constructionStatus}</span></li> : ''}
                                                    {listedBy ? <li><span>Listed By</span> <span>{listedBy}</span></li> : ''}
                                                    {superBuiltupArea ? <li><span>Super Builtup Area</span> <span>{superBuiltupArea}</span></li> : ''}
                                                    {carpetArea ? <li><span>Carpet Area</span> <span>{carpetArea}</span></li> : ''}
                                                    {maintenance ? <li><span>Maintenance</span> <span>{maintenance}</span></li> : ''}
                                                    {totalFloors ? <li><span>Total Floors</span> <span>{totalFloors}</span></li> : ''}
                                                    {floorNo ? <li><span>Floor No</span> <span>{floorNo}</span></li> : ''}
                                                    {carParking ? <li><span>Car Parking</span> <span>{carParking}</span></li> : ''}
                                                    {facing ? <li><span>Facing</span> <span>{facing}</span></li> : ''}
                                                    {projectName ? <li><span>Project Name</span> <span>{projectName}</span></li> : ''}
                                                    {bachelorsAllowence ? <li><span>Bachelors Allowence</span> <span>{bachelorsAllowence}</span></li> : ''}
                                                    {subType ? <li><span>Sub Type</span> <span>{subType}</span></li> : ''}
                                                    {mealIncluded ? <li><span>Meal Included</span> <span>{mealIncluded}</span></li> : ''}
                                                    {plotArea ? <li><span>Plot Area</span> <span>{plotArea}</span></li> : ''}
                                                    {plotLength ? <li><span>Plot Length</span> <span>{plotLength}</span></li> : ''}
                                                    {plotBreadth ? <li><span>Plot Breadth</span> <span>{plotBreadth}</span></li> : ''}
                                                    {washrooms ? <li><span>Washrooms</span> <span>{washrooms}</span></li> : ''}
                                                </ul>
                                            </div>
                                            <div className={`${style.descripition}`}>
                                                <p>{description}</p>
                                            </div>
                                            <div className={`${style.adfooter}`}>
                                                <p>{nearby !== "" ? nearby + ',' : ''} {city !== "" ? city + ',' : ''}   {`${state}`}</p>
                                                <p><TodayDate /></p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={`${style.themebutton} themebutton`}>
                                        <button type="button" className="btn" onClick={AddNewProduct}>Publish Advertisement</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}