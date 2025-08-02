"use client";

import styles from 'styles/css/healthInfo.module.css';
import {text} from 'services/healthInfo';
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import {animationObserver} from '@utils/animationObserver';

function HealthInfo() {
    const [isImgChange, setIsImgChange] = useState(false);

    useEffect(() => {   // 애니메이션
        const left_img = document.querySelector(".healthInfo_left img") as HTMLElement;
        const right = document.querySelector(".healthInfo_right ul") as HTMLElement;
        const arr = [left_img, right] as HTMLElement[];

        animationObserver(arr, styles);
    }, []);

    useEffect(() => {   // resize 핸들러
        const reSizeHandler = () => {
            setIsImgChange(window.innerWidth > 1145 ? true : false);
        }
        
        reSizeHandler();
        window.addEventListener("resize", reSizeHandler);

        return (() => {
            window.removeEventListener("resize", reSizeHandler);
        })
    }, []);

    return (
        <section>
            <div className="container">
                <div className="layout">
                    <div className={styles.wrap}>
                        <div className={`${styles.left} healthInfo_left`}>
                            {isImgChange ?
                                <Image src="/images/healthInfo.png" alt="healthInfo" width={700} height={600} /> :
                                <Image src="/images/healthInfo2.png" alt="healthInfo2" width={1000} height={350} />
                            }
                        </div>
                        <div className={`${styles.right} healthInfo_right`}>
                            <nav>
                                <ul>
                                    {text.right.map((item, index) => (
                                        <li key={item + index}>
                                            <Link href="#">
                                                <Image src={`https://picsum.photos/200/300?random=${index}`} alt="random_img" width={200} height={300} />
                                                <p>{item}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HealthInfo;