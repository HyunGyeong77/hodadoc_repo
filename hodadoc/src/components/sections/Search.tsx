import styles from 'styles/css/search.module.css';
import DetailedSearch from '@ui/DetailedSearch';

function Search() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="layout">
                    <div className={styles.top}>
                        <DetailedSearch />
                    </div>
                    <div className={styles.btm}>

                    </div>
                </div>
            </div>
        </section>
    );
}


export default Search;