"use client";

import styles from 'styles/css/detailedSearch.module.css';
import {text} from 'services/detailedSearch';
import React from 'react';

function DetailedSearch() {
    return (
        <div className={styles.wrap}>
            <h2>{text.title}</h2>
            <div className={styles.top}>
                <div className={styles.left}>
                    <div>
                        <div>
                            <p>{text.region}</p>
                            <article>
                                <button></button>
                                <nav>
                                    <ul>
                                        {Object.values(text.regions).map((region, index) => (
                                            <React.Fragment key={region.title + index}>
                                                <li>
                                                    <p>{region.title}</p>
                                                </li>
                                                {region.content.map((content, index) => (
                                                    <li key={content + index}>
                                                        <button>{content}</button>
                                                    </li>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </ul>
                                </nav>
                            </article>
                        </div>
                        <div>
                            <p>{text.field}</p>
                            <article>
                                <button></button>
                                <nav>
                                    <ul>

                                    </ul>
                                </nav>
                            </article>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="search_name">{text.name}</label>
                        <input id="search_name" type="text" />
                    </div>
                </div>
                <div className={styles.right}>
                    <div>
                        <p>{text.time.title}</p>
                        <ul>
                            {text.time.content.map((item, index) => (
                                <li key={item + index}>
                                    <button>{item}</button>
                                </li>
                            ))}    
                        </ul>
                    </div>
                    <div>
                        <p>{text.day.title}</p>
                        <ul>
                            {text.day.content.map((item, index) => (
                                <li key={item + index}>
                                    <button>{item}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p>{text.reservation.title}</p>
                        <ul>
                            {text.reservation.content.map((item, index) => (
                                <li key={item + index}>
                                    <button>{item}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.btm}>
                <button>{text.search}</button>
            </div>
        </div>
    );
}

export default DetailedSearch;