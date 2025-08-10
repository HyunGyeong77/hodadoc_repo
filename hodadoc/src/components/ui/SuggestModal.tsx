"use client";

import styles from 'styles/css/suggestModal.module.css';
import {useState, useRef} from 'react';

import { IoClose as CloseIcon } from "react-icons/io5";
import { FaChevronDown as DownIcon } from "react-icons/fa";
import { FaChevronUp as UpIcon } from "react-icons/fa";

let tb_onClick_coolTime: boolean | null;

function SuggestModal({ title, time }: { title: string, time: string[][] }) {
    const [isDropDown, setIsDropDown] = useState<boolean>(true);
    const timeTableRef = useRef<HTMLLIElement>(null);

    const close_onClick = () => {
        const modal = document.getElementById("suggestModal") as HTMLDivElement;
        const body = document.querySelector("body") as HTMLBodyElement;

        modal.classList.remove(styles.active);
        body.style.setProperty("--overflowY", "auto");
    }

    const timetable_onClick = () => {
        if(tb_onClick_coolTime) return;

        const timeTableRef_cur = timeTableRef.current as HTMLLIElement;

        timeTableRef_cur.classList.toggle(styles.hide, isDropDown);
        tb_onClick_coolTime = true;
        setIsDropDown(!isDropDown);

        setTimeout(() => {
            tb_onClick_coolTime = false;
        }, 300);
    }

    return (
        <div id="suggestModal" className={styles.wrap}>
            <div className={styles.bg} onClick={close_onClick}>
                <CloseIcon className={styles.closeIcon} />
            </div>
            <div className={styles.modal}>
                <h2>영업시간</h2>
                <nav onClick={timetable_onClick}>
                    <ul>
                        <li>
                            {isDropDown ? 
                                <UpIcon className={styles.UpIcon} /> :
                                <DownIcon className={styles.DownIcon} />}
                        </li>
                        <li ref={timeTableRef}>
                            <span>{title}</span>
                            <ul>
                                {time.map((item, index) => (
                                    <li key={item[0] + index}>
                                        <span>{item[0]}</span>
                                        <span>{item[1]}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default SuggestModal;