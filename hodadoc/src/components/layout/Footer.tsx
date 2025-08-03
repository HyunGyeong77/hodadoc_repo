"use client";

import styles from 'styles/css/footer.module.css';
import {text} from 'services/footer';
import Link from 'next/link';

import { FaArrowAltCircleUp as ArrowUpIcon } from "react-icons/fa";

function Footer() {
    const search_onClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const id_search = document.getElementById("search_section") as HTMLElement;
        
        id_search.scrollIntoView({behavior: "smooth"});
    }

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="layout">
                    <div className={styles.left}>
                        <div className={styles.top}>
                            <h2>{text.title}</h2>
                            <p>{text.content}</p>
                        </div>
                        <nav className={styles.btm}>
                            <ul>
                                {text.course.map((item, index) => (
                                    <li key={item + index}>
                                        <Link href="#">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.right}>
                        <Link href="#search_section" onClick={search_onClick} className={styles.top}>
                            <p>{text.search}</p>
                            <ArrowUpIcon className={styles.arrowUpIcon} />
                        </Link>
                        <div className={styles.btm}>
                            <span>{text.reserved}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;