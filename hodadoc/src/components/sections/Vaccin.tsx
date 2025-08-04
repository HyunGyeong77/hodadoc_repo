"use client";

import styles from 'styles/css/vaccin.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect} from 'react';
import {text} from 'services/vaccin';
import {animationObserver} from '@utils/animationObserver';

function Vaccin() {
    useEffect(() => {
        const left = document.querySelector(".vaccin_left") as HTMLElement;
        const right = document.querySelectorAll(".vaccin_right li") as NodeList;
        const arr = [left, ...right] as HTMLElement[];

        animationObserver(arr, styles);
    }, []);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="layout">
                    <div className={styles.wrap}>
                        <Image src="/images/vaccin_bg.png" alt="vaccin_bg" width={1800} height={500} />
                        <Image src="/images/vaccin_capsule.png" alt="vaccin_capsule" width={250} height={200} />
                        <div className={`${styles.left} vaccin_left`}>
                            <Image src="/images/vaccin_txt.png" alt="vaccin_txt" width={450} height={150} />
                        </div>
                        <nav className={`${styles.right} vaccin_right`}>
                            <ul>
                                {text.content.map((item, index) => (
                                    <li key={index}>
                                        <Link href="#">
                                            <div>
                                                <Image src={text.image[index]} alt={text.image[index]} width={200} height={300} />
                                            </div>
                                            <p>{item}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Vaccin;