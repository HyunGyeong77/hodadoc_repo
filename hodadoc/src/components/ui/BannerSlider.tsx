"use client";

import styles from 'styles/css/bannerSlider.module.css';
import {text} from 'services/bannerSlider';
import Link from 'next/link';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';

import { FaCircle as BtnIcon } from "react-icons/fa";
import { IoIosArrowBack as LeftArrow } from "react-icons/io";
import { IoIosArrowForward as RightArrow } from "react-icons/io";


const init_translateX = -100;
const last_translateX = -400;
let translateX = init_translateX;

function BannerSlider() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const btnsRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLElement>(null);
    const intervalRef = useRef<NodeJS.Timeout>(null);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [btnOrder, setBtnOrder] = useState(0);

    useEffect(() => {   // 이미지 resize 이벤트 리스너 등록
        const wrapRef_cur = wrapRef.current as HTMLDivElement;
        const imgRef_cur = imgRef.current as HTMLElement;
        const imgs = imgRef_cur.querySelectorAll("img") as NodeList;

        const reSizeHandler = () => {
            const {clientWidth} = wrapRef_cur;

            imgs.forEach((item) => {
                if(item instanceof HTMLImageElement) {
                    item.style.setProperty("--width", `${clientWidth - 0.2}px`);
                }
            });
        }

        reSizeHandler();

        window.addEventListener("resize", reSizeHandler);

        return (() => {
            window.removeEventListener("resize", reSizeHandler);
        });
    }, []);

    const revertImg = () => {
        const ul = imgRef.current?.querySelector("ul") as HTMLUListElement;
        let newTranslateX: number;

        if(translateX === last_translateX) {
            newTranslateX = init_translateX;
        } else if(translateX === 0) {
            newTranslateX = last_translateX + 100;
        }

        setTimeout(() => {
            ul.style.setProperty("--transition", "0");
            ul.style.setProperty("--translateX", `${newTranslateX}%`);

            translateX = newTranslateX;

            setTimeout(() => {
                ul.style.setProperty("--transition", "1s");
            }, 20);
        }, 1000);
    }

    const plus_translateX = () => {
        translateX -= 100;

        if(translateX === last_translateX) {
            revertImg();
        }
    }

    const sub_translateX = () => {
        translateX += 100;

        if(translateX === 0) {
            revertImg();
        }
    }

    const img_move = () => {
        const ul = imgRef.current?.querySelector("ul") as HTMLUListElement;
        ul.style.setProperty("--translateX", `${translateX}%`);

        setTimeout(() => {
            const newBtnOrder = Math.abs(translateX / 100) - 1; 
            setBtnOrder(newBtnOrder);
        }, 1020);
    }

    useEffect(() => {   // 이미지 슬라이더 구현
        if(!isRunning) {
            intervalRef.current = setInterval(() => {
                translateX -= 100;

                if(translateX === last_translateX) {
                    revertImg();
                }
                img_move();
            }, 3000);
        } else {
            if(intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return (() => {
            if(intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        })
    }, [isRunning]);

    const arrow_onClick = (arrowName: string) => () => {
        if(isRunning) return;

        setIsRunning(true);

        switch(arrowName) {
            case "left":
                sub_translateX();
                img_move();
                break;
            case "right":
                plus_translateX();
                img_move();
                break;
        }

        setTimeout(() => {
            setIsRunning(false);
        }, 1020);
    }

    const btn_onClick = (index: number) => () => {
        if(isRunning) return;

        setIsRunning(true);

        const change_translateX = (index: number) => {
            translateX = init_translateX * index;
            img_move();
        }

        switch(index) {
            case 0:
                change_translateX(1);
                break;
            case 1:
                change_translateX(2);
                break;
            case 2:
                change_translateX(3);
                break;
        }

        setTimeout(() => {
            setIsRunning(false);
        }, 1020);
    }

    return (
        <div ref={wrapRef} className={styles.wrap}>
            <div>
                <button onClick={arrow_onClick("left")}>
                    <LeftArrow className={styles.arrowIcon} />
                </button>
                <button onClick={arrow_onClick("right")}>
                    <RightArrow className={styles.arrowIcon} />
                </button>
            </div>
            <nav ref={btnsRef} className={styles.btns}>
                <ul>
                    {text.imgs.slice(1, text.imgs.length - 1).map((item, index) => (
                        <li key={item + index}>
                            <button type="button" onClick={btn_onClick(index)}>
                                <BtnIcon className={styles.btnIcon} style={{opacity: btnOrder === index ? "1" : "0.5"}} />
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav ref={imgRef} className={styles.imgs}>
                <ul>
                    {text.imgs.map((item, index) => (
                        <li key={item + index}>
                            <Link href="#">
                                <Image src={`/images/${item}`} alt={item} width={866} height={300} priority={true} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default BannerSlider;