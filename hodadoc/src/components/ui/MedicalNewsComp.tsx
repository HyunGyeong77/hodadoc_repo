import styles from 'styles/css/medicalNewsComp.module.css';
import {Props} from 'types/medicalNewsProps';
import Image from 'next/image';
import Link from 'next/link';

function MedicalNewsComp({ text, width, height }: { text: Props, width: number, height: number }) {
    return (
        <div className={styles.wrap}>
            <div>
                <Image src={text.image} alt={text.image} width={width} height={height} />
                <div>
                    <p>{text.type}</p>
                </div>
            </div>
            <div>
                <div>
                    <h2>{text.title}</h2>
                    <p>{text.content}</p>
                    <p>{text.date && text.date}</p>
                </div>
                <Link href="#">자세히 보기</Link>
            </div>
        </div>
    );
}

export default MedicalNewsComp;