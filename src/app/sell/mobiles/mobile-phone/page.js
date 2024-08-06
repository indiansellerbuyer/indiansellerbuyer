"use client"
import style from "../../../components/sellForm.module.scss";
import DummyImage from "../../../../../public/dummy.jpeg";
import Image from "next/image";
import TitleComponent from "../../../components/title";
import { useState } from "react";
import TodayDate from '../../../components/todayDate';


export default function Page() {
    const [brand, setBrand] = useState("");
    const [ram, setRam] = useState("");
    const [storage, setStorage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [nearby, setNearby] = useState("");
    const [files1, setFiles1] = useState(null);
    const [files2, setFiles2] = useState(null);
    const [files3, setFiles3] = useState(null);

    const AddNewProduct = async () => {
        // Validate required fields
        // if (!brand || !title || !description || !price || !state || !city || !nearby) {
        //     alert(`Please fill ${!brand ? 'Brand,' : ''} ${!ram ? 'Ram,' : ''} ${!title ? 'title,' : ''} ${!description ? 'description,' : ''} ${!price ? 'price,' : ''} ${!state ? 'state,' : ''} ${!city ? 'city,' : ''} ${!nearby ? 'nearby,' : ''} fields!`);
        //     return;
        // }

        // Create FormData object and append fields
        const formData = new FormData();
        formData.append("brand", brand);
        formData.append("ram", ram);
        formData.append("storage", storage);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("state", state);
        formData.append("city", city);
        formData.append("nearby", nearby);
        if (files1) formData.append("files1", files1);
        if (files2) formData.append("files2", files2);
        // if (files3) formData.append("files3", files3);

        try {
            let result = await fetch('https://indiansellerbuyer-database.vercel.app/sell/mobiles/mobile-phone', {
                method: 'POST',
                body: formData,
            });

            if (!result.ok) {
                throw new Error('Network response was not ok');
            }

            result = await result.json();
            console.log(result);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };


    return (
        <>
            <div className={`${style.formpage}`}>
                <div className={`${style.container} container`}>
                    <TitleComponent title="Mobile Phones" />
                    <div className={`${style.form}`}>
                        <div className={`${style.row} row`}>
                            <div className={`${style.col_md_8} col-md-8`}>
                                <div className={`${style.formside}`}>
                                    <form>
                                        <div className={`${style.row} row`}>
                                            <div className={`${style.col_md_6} col-md-6`}>

                                                {/* Mobile Phones */}
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
                                                {/* Mobile Phones */}

                                                <div className={`${style.formphoto}`}>
                                                    <div className={`${style.formtitle}`}>
                                                        <h3>UPLOAD UP TO 20 PHOTOS</h3>
                                                    </div>
                                                    <div className={`${style.row} row`}>
                                                    <div className={`${style.col_md_3}`}>
                <div className={`${style.singlephoto}`}>
                    <div className={`${style.text}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                        </svg>
                        <p>Add Photo</p>
                    </div>
                    <input type="file" onChange={(e) => setFiles1(e.target.files[0])} />
                </div>
            </div>
            <div className={`${style.col_md_3}`}>
                <div className={`${style.singlephoto}`}>
                    <div className={`${style.text}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                        </svg>
                        <p>Add Photo</p>
                    </div>
                    <input type="file" onChange={(e) => setFiles2(e.target.files[0])} />
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
                                                    {brand ? <li><span>Brand</span> <span>{brand}</span></li> : ''}
                                                    {ram ? <li><span>Ram</span><span>{ram}</span></li> : ''}
                                                    {storage ? <li><span>Storage</span> <span>{storage}</span></li> : ''}
                                                   
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