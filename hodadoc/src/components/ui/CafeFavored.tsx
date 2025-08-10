"use client";

import styles from 'styles/css/cafeFavored.module.css';
import {text} from 'services/cafeFavored';
import Link from 'next/link';
import {useRef, useEffect} from 'react';
import {preventDefault} from '@utils/preventDefault';

function CafeFavored() {
    const menuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const menuRef_cur = menuRef.current as HTMLUListElement;
        const menuHeight = menuRef_cur.querySelector("li")?.clientHeight as number;
        const maxHeight = menuHeight * (menuRef_cur.querySelectorAll("li").length - 1);
        let translateY:number = 0;

        const menu_interval = setInterval(() => {
            translateY += menuHeight;
            menuRef_cur.style.setProperty("--translateY", `-${translateY}px`);

            if(translateY === maxHeight) {
                setTimeout(() => {
                    translateY = 0;
                    menuRef_cur.style.setProperty("--translateY", `${translateY}px`);
                    menuRef_cur.style.setProperty("--transition", "0");

                    setTimeout(() => {
                        menuRef_cur.style.setProperty("--transition", "0.5s");
                    }, 20);
                }, 500);
            }
        }, 3500);

        return (() => {
            clearInterval(menu_interval);
        })
    }, []);

    return (
        <div className={styles.wrap}>
            <div>
                <div>
                    <p>{text.title}</p>
                    <nav>
                        <ul ref={menuRef}>
                            {text.content.map((item, index) => (
                                <li key={item + index}>
                                    <Link href="#" onClick={(e) => preventDefault(e)}><p>{item}</p></Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <Link href="#" onClick={(e) => preventDefault(e)}>카페 홈</Link>
            </div>
        </div>
    );
}

export default CafeFavored;