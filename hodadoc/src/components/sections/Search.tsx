"use client";

import styles from 'styles/css/search.module.css';
import {text} from 'services/search';
import React, {useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import {animationObserver} from '@utils/animationObserver';

import { MdKeyboardArrowDown as DownArrow } from "react-icons/md";
import { FaSquareCheck as SquareCheckBox } from "react-icons/fa6";
import { FaCheckCircle as CircleCheckBox } from "react-icons/fa";

function Search() {
    const regionMenuRef = useRef<HTMLElement>(null);
    const fieldMenuRef = useRef<HTMLElement>(null);
    /* 값 입력 */
    const [regionValue, setRegionValue] = useState<string>("");
    const [fieldValue, setFieldValue] = useState<string>("");
    const [nameValue, setNameValue] = useState<string>("");
    const [timeValue, setTimeValue] = useState<string[]>(["오전"]);
    const [dayValue, setDayValue] = useState<string>("무관");
    const [dayOtherValue, setDayOtherValue] = useState<boolean>(false);
    const [reserValue, setReserValue] = useState<string>("무관");
    /* //값 입력 */
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const [moreText, setMoreText] = useState<string>("더보기");
    const [moreNumber, setMoreNumber] = useState<number>(1);

    useEffect(() => {   // 애니메이션
        const menus = document.querySelector(".imgs")?.querySelectorAll("li") as NodeList;
        const menuArray = Array.from(menus) as HTMLElement[];

        animationObserver(menuArray, styles);
    }, []);

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
    }, [regionValue, fieldValue, nameValue]);

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
        const imgs = document.querySelector(".imgs") as HTMLImageElement;

        window.scrollTo({
            top: imgs.offsetTop + 500,
            behavior: "smooth"
        });
    }

    const more_onClick = () => {
        const moreList = document.querySelectorAll(".moreList") as NodeList;

        moreList.forEach((item) => {
            if(item instanceof HTMLLIElement) {
                item.classList.toggle(styles.visible);
            }
        });

        setMoreText(moreNumber === 1 ? "접기" : "더보기");
        setMoreNumber(moreNumber === 1 ? 2 : 1);
    }

    return (
        <section id="search_section">
            <div className="container">
                <div className="layout">
                    <div className={styles.wrap}>
                        <div className={styles.sticky}>
                            <div>
                                <p>{text.sticky.title}</p>
                                <ul>
                                    {Object.values(text.sticky.content).map((item, index) => (
                                        <li key={item.content + index}>
                                            <p>{item.title}</p> 
                                            <span>{item.content}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={styles.search}>
                            <h2>{text.title}</h2>
                            <div>
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
                        </div>
                        <nav className={`${styles.imgs} imgs`}>
                            <ul>
                                {Object.values(text.searchImg).map((item, index) => (
                                    <li key={index} className={index > 5 ? "moreList" : ""}>
                                        <article>
                                            <Image src={item[0]} alt="random_img" width={400} height={180} />
                                        </article>
                                        <article>
                                            <p>{item[1]}</p>
                                            <p>지역 : <span>{item[2]}</span></p>
                                            <p>전문 분야 : <span>{item[3]}</span></p>
                                            <p>진료 시간 (평일) : <span>{item[4]}</span></p>
                                            <p>진료 요일 : <span>{item[5]}</span></p>
                                        </article>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <button className={styles.more} onClick={more_onClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            {moreText} <span>({moreNumber} / 2)</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Search;