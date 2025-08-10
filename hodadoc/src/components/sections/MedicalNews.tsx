"use client";

import styles from 'styles/css/medicalNews.module.css';
import {text} from 'services/medicalNews';
import Image from 'next/image';
import Link from 'next/link';
import {preventDefault} from '@utils/preventDefault';
import MedicalNewsComp from '@ui/MedicalNewsComp';
import React, {useEffect, useRef} from 'react';
import {animationObserver} from '@utils/animationObserver';

function MedicalNews() {
    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const comps = wrapRef.current?.children as HTMLCollection;
        const arr = [] as HTMLElement[];

        const elements = (target: HTMLElement) => {
            const div = target.querySelector("div") as HTMLDivElement;

            Array.from(div.children).forEach((item) => (
                arr.push(item as HTMLElement)
            ));
        }

        arr.push(comps[0] as HTMLElement);
        elements(comps[1] as HTMLElement);
        elements(comps[2] as HTMLElement);

        animationObserver(arr, styles);
    }, []);

    return (
        <section>
            <div className="container">
                <div className="layout">
                    <div ref={wrapRef} className={styles.wrap}>
                        <div className={styles.hero}>
                            <div className={styles.left}>
                                <h2>{text.hero.title}</h2>
                                <div>
                                    <p>{text.hero.content}</p>
                                    <Link href="#" onClick={(e) => preventDefault(e)}>더 읽어보기</Link>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <Image src={text.hero.image} alt={text.hero.image} width={568} height={688} />
                            </div>
                        </div>
                        <div className={styles.mainNews}>
                            <h2>주요 뉴스</h2>
                            <div>
                                {Object.values(text.mainNews).map((item, index) => (
                                    <React.Fragment key={item.title + index}>
                                        <MedicalNewsComp text={item} width={395} height={249} />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className={styles.latestNews}>
                            <h2>최신 소식</h2>
                            <div>
                                {Object.values(text.latestNews).map((item, index) => (
                                    <React.Fragment key={item.title + index}>
                                        <MedicalNewsComp text={item} width={606} height={198} />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MedicalNews;