"use client";

import styles from 'styles/css/header.module.css';
import sidebar_styles from 'styles/css/sidebar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {text} from 'services/header';
import HeaderSearch from '@common/HeaderSearch';
import {sidebarResize} from '@utils/sidebarResize';

function Header() {

    const hamburger_onClick = () => {
        const target = document.getElementById("sidebar") as HTMLElement;
        const body = document.querySelector("body") as HTMLBodyElement;

        target.classList.add(sidebar_styles.sidebar_styles);
        body.style.setProperty("--overflowY", "hidden");

        sidebarResize("click");
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className="layout">
                    <div className={styles.top}>
                        <div className={styles.logo}>
                            <Link href="/">
                                <Image src={"/images/logo.png"} alt="logo" width={90} height={60} priority={true} />
                            </Link>
                        </div>
                        <HeaderSearch />
                        <div className={styles.login}>
                            <Link href="">{text.user[0]}</Link>
                            <Link href="">{text.user[1]}</Link>
                        </div>
                        <button type="button" className={styles.menu} onClick={hamburger_onClick}>
                            <Image src={"/images/menu-button.png"} alt="menu" width={128} height={128} />
                        </button>
                    </div>
                    <nav className={styles.btm}>
                        <ul>
                            {text.menu.map((item, index) => (
                                <li key={item + index}>
                                    <Link href={text.link[index]}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;