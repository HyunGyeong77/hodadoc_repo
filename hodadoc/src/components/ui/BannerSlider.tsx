"use client";

import styles from 'styles/css/bannerSlider.module.css';
import {text} from 'services/bannerSlider';
import Link from 'next/link';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';

function BannerSlider() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLElement>(null);
    const [isBtnHover, setIsBtnHover] = useState([false, false]);

    useEffect(() => {
        const wrapRef_cur = wrapRef.current as HTMLDivElement;
        const imgRef_cur = imgRef.current as HTMLElement;
        const imgs = imgRef_cur.querySelectorAll("img") as NodeList;

        const reSizeHandler = () => {
            const {clientWidth} = wrapRef_cur;

            imgs.forEach((item) => {
                if(item instanceof HTMLImageElement) {
                    item.style.setProperty("--width", `${clientWidth}px`);
                }
            });
        }

        reSizeHandler();

        window.addEventListener("resize", reSizeHandler);

        return (() => {
            window.removeEventListener("resize", reSizeHandler);
        });
    }, []);

    const arrow_onMouse = (bool: boolean, index: number) => () => {
        setIsBtnHover((prev) => {
            const newArr = [...prev];
            newArr[index] = bool;
            return newArr;
        });
    };

    return (
        <div ref={wrapRef} className={styles.wrap}>
            {text.btn.map((item, index) => (
                <button key={item + index} onMouseEnter={arrow_onMouse(true, index)} onMouseLeave={arrow_onMouse(false, index)}>
                    <Image src={!isBtnHover[index] ? `/images/${item}.png` : `/images/${item}-hover.png`} alt={item} width={64} height={64} priority={true} />
                </button>
            ))}
            <nav ref={imgRef}>
                <ul>
                    {text.imgs.map((item, index) => (
                        <li key={item + index}>
                            <Link href="#">
                                <Image src={`/images/${item}`} alt={item} width={1000} height={500} priority={true} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default BannerSlider;