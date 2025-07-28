import styles from 'styles/css/annoComp.module.css';
import {AnnoProps} from 'types/annoProps';
import Link from 'next/link';

import { HiMiniSlash as SlashIcon } from "react-icons/hi2";
import { ImPlus as PlusIcon } from "react-icons/im";

function AnnoComp({ text }: AnnoProps) {
    return (
        <div className={styles.anno}>
            <div className={styles.top}>
                <div>
                    <h2>{text.title[0]}</h2>
                    <SlashIcon className={styles.slashIcon} />
                    <p>{text.title[1]}</p>
                </div>
                <button>
                    <PlusIcon className={styles.plusIcon} />
                </button>
            </div>
            <nav className={styles.btm}>
                <ul>
                    {text.content.map((item, index) => (
                        <li key={item[0] + index}>
                            <Link href="#">
                                <span>{item[0]}</span>
                                <span>[{item[1]}]</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default AnnoComp;