import styles from 'styles/css/header.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
    return (
        <div className={`main-section-inner ${styles.header}`}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <Link href="">
                            <Image src={"/images/logo.png"} alt="logo" width={90} height={60} />
                        </Link>
                    </div>
                    <form className={styles.search} action="">
                        <label htmlFor="search" />
                        <input id="search" type="text" placeholder="이 병원을 찾고 싶어요!" />
                        <button type="submit">
                            <Image src={"/icons/search.svg"} alt="search" width={40} height={64} />
                        </button>
                    </form> 
                    <div className={styles.login}>
                        <Link href="">로그인</Link>
                        <Link href="">회원가입</Link>
                    </div>
                </div>
                <nav className={styles.btm}>
                    <ul>
                        <li><Link href="#">추천 병원</Link></li>
                        <li><Link href="#">의료 뉴스</Link></li>
                        <li><Link href="#">고객 지원</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;