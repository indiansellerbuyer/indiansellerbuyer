'use client'
import Image from "next/image";
import style from "./advertisement.module.scss";
import TodayDate from "./todayDate";
import { useState } from "react";
export default function SingleAdvertisement({files1, title, price, type, brand, ram, storage, year, kmdriven, fuel, owner, salaryperiod, positiontype, salaryFrom, salaryTo, transmission, bedrooms, bathrooms, furnishing, constructionStatus, listedBy, superBuiltupArea, carpetArea, maintenance, totalFloors, floorNo, carParking, facing, projectName, bachelorsAllowence, subType, mealIncluded, plotArea, plotLength, plotBreadth, washrooms, description, nearby, city, state, }) {
    return (
        <>

            <div className={`${style.singleadvertisement}`}>
                <div className={`${style.image}`}>
                    <Image src={`http://localhost:5000/${files1}`} width={100} height={100} alt="Advertisement Image" />
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
                        <p>{nearby ? nearby + ',' : ''} {city ? city + ',' : ''}   {state ? state + ',' : ''}</p>
                        <p><TodayDate /></p>
                    </div>

                </div>
            </div>
        </>
    )
}