import styles from 'styles/css/news.module.css';
import {text} from 'services/news';
import Image from 'next/image';
import Link from 'next/link';

function News() {
    return (
        <div className={styles.wrap}>
            <div>
                <h2>{text.title}</h2>
                <Link href="#">
                    <Image src="/images/more-button.png" alt="more" width={64} height={64} priority={true} />
                </Link>
            </div>
            <nav>
                <ul>
                    {text.content.map((item, index) => (
                        <li key={item + index}>
                            <span>·</span>
                            <Link href="#">
                                <p>{item}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default News;