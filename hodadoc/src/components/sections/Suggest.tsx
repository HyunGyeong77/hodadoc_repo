"use client";

import styles from 'styles/css/suggest.module.css';
import modal_styles from 'styles/css/suggestModal.module.css';
import {text} from 'services/suggest';
import Image from 'next/image';
import {useState, useEffect, useRef} from 'react';
import {Props} from 'types/suggestProps';
import {animationObserver} from '@utils/animationObserver';
import StarRatings from 'react-star-ratings';
import SuggestModal from '@ui/SuggestModal';

import { FaMapMarkerAlt as MarkIcon } from "react-icons/fa";
import { IoEarth as EarthIcon } from "react-icons/io5";

function Suggest() {
    const [type, setType] = useState<Props>(text["head"]);
    const [curType, setCurType] = useState<string>("head");
    const [isClient, setIsClient] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [time, setTime] = useState<string[][]>([[]]);
    const topRef = useRef<HTMLDivElement>(null);
    const elementRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {   // 애니메이션
        const topRef_cur = topRef.current as HTMLElement;
        const elementRefs_cur = elementRefs.current as HTMLElement[];
        const arr: HTMLElement[] = [topRef_cur];

        if(topRef_cur && elementRefs_cur) {
            elementRefs_cur.forEach((item) => arr.push(item));
            animationObserver(arr, styles);
        }
    }, [isClient]);

    useEffect(() => {
        const elementRefs_cur = elementRefs.current as HTMLElement[];

        elementRefs_cur.forEach((item) => {
            item.classList.remove(styles.active);
        })
        
        animationObserver(elementRefs_cur, styles);
    }, [curType]);

    /* 서버 사이드 렌더링하지 않음 */
    useEffect(() => {
        setIsClient(true);
    }, []);

    if(!isClient) {
        return null;
    }
    /* //서버 사이드 렌더링하지 않음 */

    const typeBtn_onClick = (type: string) => () => {
        switch(type) {
            case "head":
                setType(text["head"]);
                break;
            case "face":
                setType(text["face"]);
                break;
            case "body":
                setType(text["body"]);
                break;
            case "arm":
                setType(text["arm"]);
                break;
            case "leg":
                setType(text["leg"]);
                break;
            case "organ":
                setType(text["organ"]);
                break;
        }

        setCurType(type);
    }

    const hoursBtn_onClick = (title: string, time: string[][]) => () => {
        const modal = document.getElementById("suggestModal") as HTMLDivElement;
        const body = document.querySelector("body") as HTMLBodyElement; 
        const today: number = new Date().getDay();
        let newArr = [...time.slice(today), ...time.slice(0, today)];

        modal.classList.add(modal_styles.active);
        body.style.setProperty("--overflowY", "hidden");

        setTitle(title);
        setTime(newArr);
    }

    const StarRating = ({ rating }: { rating: number }) => {
        return (
            <StarRatings
            rating={rating}                     // 현재 별점 값
            starRatedColor="gold"               // 채워진 별의 색상
            numberOfStars={5}                   // 전체 별의 개수
            name="rating"                       // 별점 컴포넌트의 이름
            starDimension="16px"                // 각 별의 크기
            starSpacing="1px"                   // 별 사이의 간격
            />
        );
    };

    return (
        <section id="suggestWrap" className={styles.section}>
            <div className="container">
                <div className="layout">
                    <SuggestModal title={title} time={time} />
                    <div className={styles.wrap}>
                        <div ref={topRef}>
                            <h2>
                                <span>{text.title.slice(0, 8)}</span>
                                <span>{text.title.slice(8)}</span>
                            </h2>
                            <nav>
                                <ul>
                                    {text.content.map((item, index) => {
                                        const isSelect = curType === item[1];

                                        return (
                                            <li key={item[0] + index}>
                                                <button onClick={typeBtn_onClick(item[1])} className={isSelect ? styles.active : ""}>{item[0]}</button>
                                            </li>
                                        )
                                    })}
                                </ul>   
                            </nav>
                        </div>
                        <nav>
                            {Object.values(type).map((item, index) => (
                                <ul key={item.title + index} ref={(el) => {elementRefs.current[index] = el}}>
                                    <li className={styles.image}>
                                        <Image src={item.image} alt={item.image} width={637} height={205} priority={true} />
                                    </li>
                                    <li className={styles.title}>
                                        <p>{item.title}</p>
                                        <ul>
                                            <li><StarRating rating={Number(item.rating)} /></li>
                                            <li><p>{item.rating}</p></li>
                                        </ul>
                                    </li>
                                    <li className={styles.addr}>
                                        <p>
                                            <span>
                                                <MarkIcon className={styles.markIcon} />
                                                주소
                                            </span>
                                            <span>{item.addr}</span>
                                        </p>
                                        <button onClick={hoursBtn_onClick(item.title, item.time)}>영업시간 보기</button>
                                    </li>
                                    <li className={styles.type}>
                                        <p>분야</p>
                                        <ul>
                                            {item.type.map((type, index) => (
                                                <li key={type + index}>{type}</li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className={styles.website}>
                                        <a href={item.site} target="_blank" rel="noopener noreferrer">
                                            <EarthIcon className={styles.earthIcon} />
                                            웹사이트
                                        </a>
                                    </li>
                                </ul>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Suggest;