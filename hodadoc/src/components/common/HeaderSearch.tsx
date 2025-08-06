import styles from 'styles/css/headerSearch.module.css';
import Image from 'next/image';

function HeaderSearch() {
    return (
        <form className={styles.search} action="">
            <label htmlFor="search" />
            <input id="search" type="text" placeholder="이 병원을 찾고 싶어요!" />
            <button type="submit">
                <Image src={"/icons/search.svg"} alt="search" width={40} height={64} />
            </button>
        </form> 
    );
}

export default HeaderSearch;