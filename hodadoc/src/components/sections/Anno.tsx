import styles from 'styles/css/anno.module.css';
import AnnoComp from '@ui/AnnoComp';
import {text} from 'services/anno';

function Anno() {
    return (
        <section>
            <div className="container">
                <div className="layout" style={{display:"flex"}}>
                    <div className={styles.wrap}>
                        <AnnoComp text={text.anno} />
                        <AnnoComp text={text.bid} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Anno;