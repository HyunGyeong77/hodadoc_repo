"use client";

import styles from 'styles/css/vaccin.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Vaccin() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="layout">
                    <div className={styles.wrap}>
                        <Image src="/images/vaccin_bg.png" alt="vaccin_bg" width={1800} height={500} />
                        <Image src="/images/vaccin_capsule.png" alt="vaccin_capsule" width={250} height={200} />
                        <div className={styles.left}>
                            <Image src="/images/vaccin_txt.png" alt="vaccin_txt" width={450} height={150} />
                        </div>
                        <nav className={styles.right}>
                            <ul>
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <li key={index}>
                                        <Link href="#">
                                            <div>
                                                <Image src={`https://picsum.photos/200/300?random=${index}`} alt="random_img" width={200} height={300} />
                                            </div>
                                            <p>병원 및 종합병원</p>
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