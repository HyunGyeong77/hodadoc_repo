import styles from 'styles/css/healthInfo.module.css';
import {text} from 'services/healthInfo';
import Image from 'next/image';
import Link from 'next/link';

function HealthInfo() {
    return (
        <section>
            <div className="container">
                <div className="layout">
                    <div className={styles.wrap}>
                        <div className={styles.left}>
                            <Image src="/images/healthInfo.png" alt="healthInfo" width={700} height={600}  />
                        </div>
                        <div className={styles.right}>
                            <nav>
                                <ul>
                                    {text.map((item, index) => (
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