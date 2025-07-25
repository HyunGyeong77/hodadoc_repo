"use client";

import styles from 'styles/css/detailedSearch.module.css';
import {text} from 'services/detailedSearch';
import React, {useState, useRef, useEffect} from 'react';
import Image from 'next/image';

import { MdKeyboardArrowDown as DownArrow } from "react-icons/md";
import { FaSquareCheck as SquareCheckBox } from "react-icons/fa6";
import { FaCheckCircle as CircleCheckBox } from "react-icons/fa";

function DetailedSearch() {
    const regionMenuRef = useRef<HTMLElement>(null);
    const fieldMenuRef = useRef<HTMLElement>(null);
    const [regionValue, setRegionValue] = useState<string>("");
    const [fieldValue, setFieldValue] = useState<string>("");
    const [nameValue, setNameValue] = useState<string>("");
    const [timeValue, setTimeValue] = useState<string[]>(["오전"]);
    const [dayValue, setDayValue] = useState<string>("무관");
    const [dayOtherValue, setDayOtherValue] = useState<boolean>(false);
    const [reserValue, setReserValue] = useState<string>("무관");
    const [searchRegion, setSearchRegion] = useState<string>(text.region);
    const [searchField, setSearchField] = useState<string>(text.field);
    const [searchName, setSearchName] = useState<string>(text.name);
    const [searchTime, setSearchTime] = useState<string[]>([text.time.title]);
    const [searchDay, setSearchDay] = useState<string>(text.day.title);
    const [isSearch, setIsSearch] = useState<boolean>(false);

    useEffect(() => {   // 메뉴 창 open 상태에서 다른 곳 클릭 시 창 close
       const clickHandler = (e: Event) => {
            const menus = document.querySelectorAll(".menu") as NodeListOf<HTMLElement>;
            let isMenu = false;

            menus.forEach(element => {
                if(element.contains(e.target as Node)) {
                    isMenu = true;
                }
            });

            if(!isMenu) {
                regionMenuRef.current?.classList.remove(styles.active);
                fieldMenuRef.current?.classList.remove(styles.active);
            }
        }

        document.addEventListener("click", clickHandler);

        return (() => {
            document.addEventListener("click", clickHandler);
        })
    }, []);

    useEffect(() => {
        if(regionValue && fieldValue && nameValue) {
            setIsSearch(true);
        } else {
            setIsSearch(false);
        }
    }, [regionValue, fieldValue, nameValue])

    const menu_onClick = (ref: React.RefObject<HTMLElement | null>) => () => {
        ref.current?.classList.toggle(styles.active);
    }

    const subMenu_onClick = (setValue: React.Dispatch<string>) => (e: React.MouseEvent) => {
        const target = e.currentTarget as HTMLButtonElement;
        const nav = target.closest("nav") as HTMLElement;
        
        setValue(target.textContent as string);
        nav.classList.remove(styles.active);
    }

    const name_onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.currentTarget.value);
    }

    const timeMenu_onClick = (e: React.MouseEvent) => {
        const textContent = e.currentTarget.textContent as string;

        if(timeValue.length === 1 && timeValue.includes(textContent)) {
            alert("최소 한 개 이상 선택하셔야 합니다.");
            return;
        }

        setTimeValue((prev) => {
            const newArr = [...prev] as string[];

            if(newArr.includes(textContent)) {
                const index = newArr.indexOf(textContent);
                newArr.splice(index, 1);   
            } else {
                newArr.push(textContent);
            }

            return newArr;
        });
    }

    const checkMenu_onClick = (setValue: React.Dispatch<string>) => (e: React.MouseEvent) => {
        setValue(e.currentTarget.textContent as string);
    }

    const otherMenu_onClick = () => {
        setDayOtherValue(!dayOtherValue);
    }

    const searchBtn_onClick = () => {
        setSearchRegion(regionValue);
        setSearchField(fieldValue);
        setSearchName(nameValue);
        setSearchTime(timeValue);
        setSearchDay(dayValue);
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.sticky}>
                <div>
                    <p>{text.sticky.title}</p>
                    <ul>
                        {Object.values(text.sticky.content).map((item, index) => (
                            <li>{item.title} <span>{item.content}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.search}>
                <h2>{text.title}</h2>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <div>
                            <div>
                                <p>{text.region}</p>
                                <article className="menu">
                                    <button onClick={menu_onClick(regionMenuRef)}>
                                        <span>{regionValue}</span> 
                                        <DownArrow className={styles.downArrow} />
                                    </button>
                                    <nav ref={regionMenuRef}>
                                        <ul>
                                            {Object.values(text.regions).map((region, index) => (
                                                <React.Fragment key={region.title + index}>
                                                    <li>
                                                        <p>{region.title}</p>
                                                    </li>
                                                    {region.content.map((content, index) => (
                                                        <li key={content + index}>
                                                            <button onClick={subMenu_onClick(setRegionValue)}>{content}</button>
                                                        </li>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                        </ul>
                                    </nav>
                                </article>
                            </div>
                            <div>
                                <p>{text.field}</p>
                                <article className="menu">
                                    <button onClick={menu_onClick(fieldMenuRef)}> 
                                        <span>{fieldValue}</span>
                                        <DownArrow className={styles.downArrow} />
                                    </button>
                                    <nav ref={fieldMenuRef}>
                                        <ul>
                                            {Object.values(text.fields).map((item, index) => (
                                                <li key={item + index}>
                                                    <button onClick={subMenu_onClick(setFieldValue)}>{item}</button>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </article>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="search_name">{text.name}</label>
                            <input id="search_name" type="text" value={nameValue} onChange={name_onChange} />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <p>{text.time.title}</p>
                            <ul>
                                {text.time.content.map((item, index) => (
                                    <li key={item + index}>
                                        <button type="button" className={timeValue.includes(item) ? styles.active : styles.inActive}
                                            onClick={timeMenu_onClick}> 
                                            {item}
                                        </button>
                                    </li>
                                ))}    
                            </ul>
                        </div>
                        <div>
                            <p>{text.day.title}</p>
                            <div>
                                <ul>
                                    {text.day.content.map((item, index) => (
                                        <li key={item + index}>
                                            <button type="button" className={dayValue.includes(item) ? styles.active : styles.inActive}
                                                onClick={checkMenu_onClick(setDayValue)}>
                                                {item}
                                                <SquareCheckBox />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <div>
                                    <button type="button" className={dayOtherValue ? styles.active : styles.inActive}
                                        onClick={otherMenu_onClick}>
                                        {text.day.other}
                                        <CircleCheckBox />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>{text.reservation.title}</p>
                            <ul>
                                {text.reservation.content.map((item, index) => (
                                    <li key={item + index}>
                                        <button type="button" className={reserValue.includes(item) ? styles.active : styles.inActive}
                                            onClick={checkMenu_onClick(setReserValue)}>
                                            {item}
                                            <SquareCheckBox />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.btm}>
                    <button onClick={searchBtn_onClick} className={isSearch ? styles.active : styles.inActive}>{text.search}</button>
                </div>
            </div>
            <nav className={styles.imgs}>
                <ul>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <li key={index}>
                            <Image src={`https://picsum.photos/200/300?random=${index}`} alt="random_img" width={200} height={300} />
                            <p>지역 : <span>({searchRegion})</span></p>
                            <p>전문 분야 : <span>({searchField})</span></p>
                            <p>병원 이름 : <span>({searchName})</span></p>
                            <p>진료 시간 : <span>({searchTime.join(", ")})</span></p>
                            <p>진료 요일 : <span>({searchDay})</span></p>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default DetailedSearch;