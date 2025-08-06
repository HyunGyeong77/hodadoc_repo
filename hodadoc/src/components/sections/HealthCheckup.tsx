"use client";

import styles from 'styles/css/healthCheckup.module.css';
import {text} from 'services/healthCheckup';
import {useState, useRef, useEffect} from 'react';
import {animationObserver} from '@utils/animationObserver';
import NextImage from 'next/image';
import Link from 'next/link';
import {ColorMapType} from 'types/healthCheckupProps';

import { BsWindow as WindowIcon } from "react-icons/bs";
import { BiCurrentLocation as NaviIcon } from "react-icons/bi";

const colorMap: ColorMapType = {
    "#E51B20": "/images/map_image1.png",    // 서울
    "#EB601A": "/images/map_image2.png",    // 인천
    "#FAE414": "/images/map_image3.png",    // 경기도
    "#55B030": "/images/map_image4.png",    // 강원도
    "#305AA6": "/images/map_image5.png",    // 충청남도
    "#204B9B": "/images/map_image6.png",    // 충청북도
    "#464798": "/images/map_image7.png",    // 경상북도
    "#53C3EA": "/images/map_image8.png",    // 경상남도
    "#E71F7F": "/images/map_image9.png",    // 대구
    "#1F2020": "/images/map_image10.png",   // 울산
    "#232857": "/images/map_image11.png",   // 부산
    "#B54C97": "/images/map_image12.png",   // 전라북도
    "#FBB916": "/images/map_image13.png",   // 전라남도
    "#665D1B": "/images/map_image14.png"    // 제주도
}

let isMapImgClick = false;

function HealthCheckup() {
    const mapRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mapTextWrapRef = useRef<HTMLElement>(null);
    const mapTextRef = useRef<HTMLUListElement>(null);
    const [mapTextSel_number, setMapTextSel_number] = useState(-1);
    const [mapChange, setMapChange] = useState<string>("/images/map.png");
    
    useEffect(() => {   // 애니메이션
        const title = document.querySelector(".healthCheckup_title") as HTMLTitleElement;
        const left = document.querySelector(".healthCheckup_left") as HTMLDivElement
        const right = document.querySelector(".healthCheckup_right") as HTMLDivElement;
        const arr = [title, left, right] as HTMLElement[];

        animationObserver(arr, styles);
    }, []);

    useEffect(() => {   // 이미지 클릭 시 해당 지역 추출
        const mapRef_cur = mapRef.current as HTMLImageElement;
        const canvasRef_cur = canvasRef.current as HTMLCanvasElement; 
        const ctx = canvasRef_cur.getContext("2d", { willReadFrequently: true }) as CanvasRenderingContext2D;
    
        const maskImage: HTMLImageElement = new Image();
        maskImage.src = "/hodadoc/images/map_canvas.png";

        maskImage.onload = () => {
            canvasRef_cur.width = maskImage.width;
            canvasRef_cur.height = maskImage.height;

            ctx.drawImage(maskImage, 0, 0);
        }

        const colorHexComp = (x: number, y: number) => {
            const pixel = ctx.getImageData(x, y, 1, 1).data as Uint8ClampedArray<ArrayBufferLike>;
            
            const rgbHex = (r: number, g: number, b: number) => {
                return "#" + [r, g, b].map(item => (
                    item.toString(16).padStart(2, "0"))).join("");
            }

            const hex = rgbHex(pixel[0], pixel[1], pixel[2]);

            return colorMap[hex.toLocaleUpperCase()] || "/hodadoc/images/map.png";
        }

        const clickHandler = (e: MouseEvent) => {
            const rect = mapRef_cur.getBoundingClientRect() as DOMRect;
            const x: number = e.clientX - rect.left;
            const y: number = e.clientY - rect.top;

            setMapChange(colorHexComp(x, y));
            isMapImgClick = true;
            mapTextRef.current = null;
        }

        const mouseEnterHandler = (e: MouseEvent) => {
            const rect = mapRef_cur.getBoundingClientRect() as DOMRect;
            const x: number = e.clientX - rect.left;
            const y: number = e.clientY - rect.top;

            if(colorHexComp(x, y).includes("/hodadoc/images/map.png")) {
                mapRef_cur.style.setProperty("--cursor", "default");
            } else {
                mapRef_cur.style.setProperty("--cursor", "pointer");
            }
        }

        mapRef_cur.addEventListener("click", clickHandler);
        mapRef_cur.addEventListener("mousemove", mouseEnterHandler);

        return (() => {
            mapRef_cur.removeEventListener("click", clickHandler);
            mapRef_cur.removeEventListener("mousemove", mouseEnterHandler);
        });
    }, []);

    useEffect(() => {
        const textRect = mapTextRef.current?.offsetTop as number;
        const wrapRect = mapTextWrapRef.current?.offsetTop as number;
        const scrollToTop = textRect - wrapRect;

        mapTextWrapRef.current?.scrollTo({
            top: scrollToTop,
            behavior:"smooth"
        });
    }, [mapChange]);

    const mapText_onClick = (src: string, index: number) => () => {
        setMapChange(src);
        setMapTextSel_number(index);
        isMapImgClick = false;
    }

    return (
        <section>
            <div className="container">
                <div className="layout">
                    <div className={styles.wrap}>
                        <h2 className="healthCheckup_title">
                            <span>{text.title.slice(0, 4)}</span>
                            <span>{text.title.slice(4)}</span>
                        </h2>
                        <div className={styles.btm}>
                            <div className={`${styles.left} healthCheckup_left`}>
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
                            <div className={`${styles.right} healthCheckup_right`}>
                                <div>
                                    <div>
                                        <NextImage ref={mapRef} src={mapChange} alt="map" width={380} height={570} priority={true} />
                                        <canvas ref={canvasRef} style={{display:"none"}}></canvas>
                                    </div>
                                </div>
                                <div>
                                    <nav ref={mapTextWrapRef}>
                                        {text.map.map((item, index) => {
                                            const src_agree: boolean = mapChange === item[1];
                                            const click_agree: boolean = mapTextSel_number === index;
                                            const isClick = isMapImgClick ? src_agree : click_agree;

                                            return (
                                                <ul ref={(el) => {
                                                    if(isMapImgClick) {
                                                        if(src_agree && !mapTextRef.current) {
                                                            mapTextRef.current = el;
                                                        }
                                                    } else {
                                                        if(click_agree) {
                                                            mapTextRef.current = el;
                                                        }
                                                    }
                                                }} key={item[0] + index}>
                                                    <li>
                                                        <button style={{color: isClick ? "#00AD56" : "black"}} 
                                                            onClick={mapText_onClick(item[1], index)}>{item[0]}</button>
                                                    </li>
                                                    <li>
                                                        <Link href="#" title={`${item[0].replace(/\(.*$/, '').trim()}지부 새창으로 열림`}>
                                                            <WindowIcon />
                                                        </Link>
                                                        <Link href="#" title="오시는 길 새창으로 열림">
                                                            <NaviIcon />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            );
                                        })}
                                    </nav>
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