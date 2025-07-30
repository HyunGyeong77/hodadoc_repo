"use client";

import styles from 'styles/css/healthCheckup.module.css';
import {text} from 'services/healthCheckup';
import {useEffect} from 'react';
import {animationObserver} from '@utils/animationObserver';

function HealthCheckup() {
    
    useEffect(() => {   // 애니메이션
        const title = document.querySelector(".title") as HTMLTitleElement;
        const left = document.querySelector(".left") as HTMLDivElement
        const right = document.querySelector(".right") as HTMLDivElement;
        const arr = [title, left, right] as HTMLElement[];

        animationObserver(arr, styles);
    }, []);

    return (
        <section>
            <div className="container">
                <div className="layout">
                    <div className={styles.wrap}>
                        <h2 className="title">
                            <span>{text.title.slice(0, 4)}</span>
                            <span>{text.title.slice(4)}</span>
                        </h2>
                        <div className={styles.btm}>
                            <div className={`${styles.left} left`}>
                                <div>
                                    <div>
                                        <p>{text.healthCheckup.target.title}</p>
                                        <span>{text.healthCheckup.target.content}</span>
                                    </div>
                                    <div>
                                        <p>{text.healthCheckup.item.title}</p>
                                        {Object.values(text.healthCheckup.item.content).map((item, index) => (
                                            <ul key={item.title + index}>
                                                <li>
                                                    <p>{item.title}</p>
                                                    <ul>
                                                        {item.content.map((content, index) => (
                                                            <li key={content + index}>{content}</li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                                <p>
                                    <span>{text.other.slice(0, 9)}</span>
                                    <span>{text.other.slice(9)}</span>
                                </p>
                            </div>
                            <div className={`${styles.right} right`}>
                                <div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HealthCheckup;