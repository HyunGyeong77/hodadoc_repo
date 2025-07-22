import styles from 'styles/css/hero.module.css'; 
import BannerSlider from '@ui/BannerSlider';
import CafeFavored from '@ui/CafeFavored';
import News from '@ui/News';

function Hero() {
    return (
        <section className={`main-section-inner ${styles.section}`}>
            <div className="container">
                <div className="layout">
                    <div className={styles.left}>
                        <BannerSlider />
                        <CafeFavored />
                    </div>
                    <div className={styles.right}>
                        <News />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;