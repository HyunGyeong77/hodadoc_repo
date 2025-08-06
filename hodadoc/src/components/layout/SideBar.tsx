"use client";

import styles from 'styles/css/sidebar.module.css';
import {text} from 'services/header';
import Link from 'next/link';
import HeaderSearch from '@common/HeaderSearch';
import {useEffect} from 'react';

import { MdOutlineCancel as CancelIcon } from "react-icons/md";

function SideBar() {

    const isVisible = () => {
        const target = document.getElementById("sidebar") as HTMLElement;
        const body = document.querySelector("body") as HTMLBodyElement;

        target.classList.remove(styles.active);
        body.style.setProperty("--overflowY", "auto");
    }

    useEffect(() => {
        const resizeHandler = () => {
            if(window.innerWidth > 1170) {
                isVisible();
            }
        }

        window.addEventListener("resize", resizeHandler);
    }, []);

    const cancel_onClick = () => {
        isVisible();
    }

    return (
        <aside id="sidebar" className={styles.aside}>
            <div>
                <button type="button"><CancelIcon onClick={cancel_onClick} className={styles.cancelIcon} /></button>
                <div>
                    <div>
                        <HeaderSearch />
                        <div>
                            <Link href="#">{text.user[0]}</Link>
                            <Link href="#">{text.user[1]}</Link>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            {text.menu.map((item, index) => (
                                <li key={item + index}>
                                    <Link href="#">
                                        {item}    
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;