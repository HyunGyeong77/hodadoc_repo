const timeComp = (weekdays_start: string, weekdays_end: string, 
                    saturday_start: string, saturday_end: string,
                    sunday_start: string, sunday_end: string) => {
    const time = [
        ["일요일", (sunday_start && sunday_end) ? 
            `오전 ${sunday_start}~오후 ${sunday_end}` : "휴무일"],
        ["월요일", `오전 ${weekdays_start}~오후 ${weekdays_end}`],
        ["화요일", `오전 ${weekdays_start}~오후 ${weekdays_end}`],
        ["수요일", `오전 ${weekdays_start}~오후 ${weekdays_end}`],
        ["목요일", `오전 ${weekdays_start}~오후 ${weekdays_end}`],
        ["금요일", `오전 ${weekdays_start}~오후 ${weekdays_end}`],
        ["토요일", (saturday_start && saturday_end) ? 
                    `오전 ${saturday_start}~오후 ${saturday_end}` : "휴무일"],
    ]

    return time;
}

const snuh = (type: string[]) => {
    const text = {
        image:"/images/suggest_snuh.jpg",
        title:"서울대학교병원",
        type: type,
        rating: "3.9",
        addr: "서울특별시 종로구 대학로 101",
        time: timeComp("8:00", "6:00", "8:00", "1:00", "", ""),
        site: "https://www.snuh.org/intro.do"
    }
    return text;
}

const ssh = (type: string[]) => {
    const text = {
        image: "/images/suggest_ssh.png",
        title:"삼성서울병원",
        type: type,
        rating: "3.9",
        addr: "서울특별시 강남구 일원로 81",
        time: timeComp("8:00", "5:00", "8:00", "12:00", "", ""),
        site: "https://www.samsunghospital.com/home/main/index.do"
    }
    return text;
}

const amc = (type: string[]) => {
    const text = {
        image: "/images/suggest_amc.jpg",
        title:"서울아산병원",
        type: type,
        rating: "4.0",
        addr: "서울특별시 송파구 올림픽로43길 88",
        time: timeComp("8:30", "5:30", "", "", "", ""),
        site: "https://www.amc.seoul.kr/asan/main.do"
    }
    return text;
}

const srh = (type: string[]) => {
    const text = {
        image: "/images/suggest_srh.jpg",
        title:"강남세브란스병원",
        type: type,
        rating: "3.6",
        addr: "서울특별시 강남구 언주로 211",
        time: timeComp("8:30", "5:30", "", "", "", ""),
        site: "https://gs.severance.healthcare/gs/index.do"
    }
    return text;
}

const hyumc = (type: string[]) => {
    const text = {
        image: "/images/suggest_hyumc.jpg",
        title:"한양대학교병원",
        type: type,
        rating: "3.6",
        addr: "서울특별시 성동구 왕십리로 222-1",
        time: timeComp("8:30", "5:30", "8:30", "12:30", "", ""),
        site: "https://seoul.hyumc.com/"
    }
    return text;
}

const bundang_c = (type: string[]) => {
    const text = {
        image: "/images/suggest_bundang_c.jpg",
        title:"분당차병원",
        type: type,
        rating: "3.3",
        addr: "경기도 성남시 분당구 야탑로 59",
        time: timeComp("8:00", "5:30", "8:00", "12:30", "", ""),
        site: "https://bundang.chamc.co.kr/"
    }
    return text;
}

const kumc = (type: string[]) => {
    const text = {
        image: "/images/suggest_kumc.jpg",
        title:"고대안암병원",
        type: type,
        rating: "3.6",
        addr: "서울특별시 성북구 고려대로 73",
        time: timeComp("8:30", "5:30", "", "", "", ""),
        site: "https://anam.kumc.or.kr/kr/index.do"
    }
    return text;
}

const cmc = (type: string[]) => {
    const text = {
        image: "/images/suggest_cmc.jpg",
        title:"서울성모병원",
        type: type,
        rating: "3.8",
        addr: "서울특별시 서초구 반포대로 222",
        time: timeComp("8:30", "5:00", "8:30", "1:00", "", ""),
        site: "https://www.cmcseoul.or.kr/page/main"
    }
    return text;
}

const snubh = (type: string[]) => {
    const text = {
        image: "/images/suggest_snubh.jpg",
        title:"분당서울대병원",
        type: type,
        rating: "3.8",
        addr: "경기도 성남시 분당구 구미로173번길 82",
        time: timeComp("8:00", "6:00", "8:00", "1:00", "", ""),
        site: "https://www.snubh.org/index.do"
    }
    return text;
}

const medi = (type: string[]) => {
    const text = {
        image: "/images/suggest_medi.jpg",
        title: "메디플라워병원",
        type: type,
        rating: "2.8",
        addr: "서울특별시 서초구 서초1동 1656-4",
        time: timeComp("7:30", "4:30", "7:30", "1:30", "", ""),
        site: "https://www.medi-flower.com/"
    }
    return text;
}

export const text = {
    title: "부위를 기준으로 추천 병원을 알려드려요!",
    content: [
        ["머리", "head"], 
        ["얼굴", "face"], 
        ["몸통", "body"], 
        ["팔", "arm"], 
        ["다리", "leg"], 
        ["내부 기관", "organ"]
    ],
    head: {
        first: snuh(["뇌졸중", "뇌종양", "신경계 질환"]),
        second: ssh(["신경과", "뇌신경과", "신경외과"]),
        three: amc(["뇌혈관 질환", "두통 치료", "신경과 및 신경외과"]),
        four: srh(["두통", "신경과", "신경외과", "정신건강"]),
        five: hyumc(["신경과", "뇌신경과", "신경외과"]),
        six: bundang_c(["뇌혈관 질환", "정신과", "신경과"]),
        seven: kumc(["뇌졸중", "두통", "신경계 질환"]),
        eight: cmc(["뇌질환", "신경과", "신경외과", "정신과"]),
        nine: snubh(["뇌졸중", "뇌혈관 질환", "두통"])
    },
    face: {
        first: snuh(["피부과", "성형외과"]),
        second: srh(["성형외과", "피부과", "안과"]),
        three: snubh(["성형외과", "피부과"]),
        four: bundang_c(["피부과", "성형외과"]),
        five: kumc(["피부과", "성형외과"]),
        six: cmc(["성형외과", "피부과", "안과"]),
        seven: hyumc(["성형외과", "피부과"]),
        eight: amc(["성형외과", "피부과"]),
        nine: medi(["성형외과", "피부과"])
    },
    body: {
        first: ssh(["소화기내과", "정형외과", "흉부외과"]),
        second: snuh(["내과", "정형외과", "흉부외과"]),
        three: amc(["정형외과", "흉부외과", "소화기내과"]),
        four: srh(["정형외과", "소화기내과", "신경외과"]),
        five: snubh(["정형외과", "소화기내과", "내과"]),
        six: bundang_c(["소화기내과", "정형외과", "흉부외과"]),
        seven: kumc(["내과", "정형외과", "흉부외과"]),
        eight: hyumc(["정형외과", "내과", "소화기내과"]),
        nine: cmc(["소화기내과", "정형외과", "흉부외과"])
    },
    arm: {
        first: snuh(["정형외과", "재활의학과"]),
        second: ssh(["정형외과", "신경과", "재활의학과"]),
        three: amc(["정형외과", "신경외과", "재활의학과"]),
        four: srh(["정형외과", "재활의학과"]),
        five: snubh(["정형외과", "신경외과", "재활의학과"]),
        six: bundang_c(["정형외과", "재활의학과"]),
        seven: kumc(["정형외과", "신경외과", "재활의학과"]),
        eight: hyumc(["정형외과", "재활의학과"]),
        nine:cmc(["정형외과", "신경외과", "재활의학과"])
    },
    leg: {
        first: snuh(["정형외과", "신경외과", "혈관외과", "재활의학과"]),
        second: ssh(["정형외과", "신경과", "혈관외과"]),
        three: amc(["정형외과", "신경외과", "혈관외과"]),
        four: srh(["정형외과", "신경외과", "혈관외과"]),
        five: snubh(["정형외과", "혈관외과", "신경외과"]),
        six: bundang_c(["정형외과", "혈관외과"]),
        seven: kumc(["정형외과", "혈관외과", "신경외과"]),
        eight: hyumc(["정형외과", "재활의학과"]),
        nine:cmc(["정형외과", "신경외과", "혈관외과"]) 
    },
    organ: {
        first: cmc(["소화기내과", "심장내과", "호흡기내과", "내분비내과"]),
        second: hyumc(["소화기내과", "신장내과", "심장내과", "내분비내과"]),
        three: kumc(["소화기내과", "심장내과", "호흡기내과", "내분비내과"]),
        four: bundang_c(["소화기내과", "심장내과", "신장내과"]),
        five: snubh(["소화기내과", "심장내과", "호흡기내과", "내분비내과"]),
        six: srh(["소화기내과", "심장내과", "호흡기내과", "신장내과"]),
        seven: amc(["소화기내과", "심장내과", "호흡기내과", "신장내과"]),
        eight: ssh(["소화기내과", "심장내과", "내분비내과", "신장내과"]),
        nine: snuh(["소화기내과", "심장내과", "호흡기내과", "신장내과"])
    }
}