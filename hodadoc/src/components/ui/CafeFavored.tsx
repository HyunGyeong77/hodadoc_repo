import styles from 'styles/css/cafeFavored.module.css';
import {text} from 'services/cafeFavored';
import Link from 'next/link';

function CafeFavored() {
    return (
        <div className={styles.wrap}>
            <div>
                <div>
                    <p>{text.title}</p>
                    <nav>
                        <ul>
                            {text.content.map((item, index) => (
                                <li key={item + index}>
                                    <Link href="#"><p>{item}</p></Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <Link href="#">카페 홈</Link>
            </div>
        </div>
    );
}

export default CafeFavored;