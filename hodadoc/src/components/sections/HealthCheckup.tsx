import styles from 'styles/css/healthCheckup.module.css';
import {text} from 'services/healthCheckup';

function HealthCheckup() {
    return (
        <section>
            <div className="container">
                <div className="layout">
                    <div className={styles.wrap}>
                        <h2>
                            <span>{text.title.slice(0, 4)}</span>
                            <span>{text.title.slice(4)}</span>
                        </h2>
                        <div className={styles.btm}>
                            <div className={styles.left}>
                                <div>
                                    <div>
                                        <p>{text.healthCheckup.target.title}</p>
                                        <span>{text.healthCheckup.target.content}</span>
                                    </div>
                                    <div>
                                        <p>{text.healthCheckup.item.title}</p>
                                        {Object.values(text.healthCheckup.item.content).map((item, index) => (
                                            <ul key={item.title + index}>
                                                <li>
                                                    <p>{item.title}</p>
                                                    <ul>
                                                        {item.content.map((content, index) => (
                                                            <li key={content + index}>{content}</li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                                <p>
                                    <span>{text.other.slice(0, 9)}</span>
                                    <span>{text.other.slice(9)}</span>
                                </p>
                            </div>
                            <div className={styles.right}>
                                <div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HealthCheckup;