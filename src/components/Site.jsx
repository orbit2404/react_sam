import React from 'react';


const siteText = [
    {
        text: ["make", "2차 포트폴리오", "HSJ"],
        title: "AQUARIUM ODYSSEA",
        code: "/",
        view: "/",  //여기가 주소
        info: ["site coding", "production perriod : 5day", "use stack : HTML5 / CSS3 / SCSS / FIGMA"],
    },
    {
        text: ["make", "팀 프로젝트", "CODENAME99"],
        title: "SPIN PRO SPIN",
        code: "/",
        view: "/",  //여기가 주소
        info: ["site coding", "production perriod : 14day", "use stack : HTML5 / CSS3 / SCSS / FIGMA"],
    },
    {
        text: ["make", "1차 포트폴리오", "HSJ"],
        title: "GARDEN OF VICTORIAN",
        code: "/",
        view: "/",  //여기가 주소
        info: ["site coding", "production perriod : 14day", "use stack : HTML5 / CSS3 / SCSS / FIGMA"],
    },
    {
        text: ["make", "리디자인", "HSJ"],
        title: "리디자인 작품이름",
        code: "/",
        view: "/",  //여기가 주소
        info: ["site coding", "production perriod : 3day", "use stack : HTML5 / CSS3 / SCSS / FIGMA"],
    },
];

const Site = () => {
    return (
        <section id='site'>
            <div className="site_inner">
                <div className="site_title">
                    Site coding <em>나의 작품</em>
                </div>
                <div className="site_wrap">
                    {
                        siteText.map((site, key) => (
                            <article className={`site_item s${key+1}`} key={key}>
                                <span className='num'>{key+1} </span>
                                <div className="text">
                                    <div>{site.text[0]}</div>
                                    <div>{site.text[1]}</div>
                                    <div>{site.text[2]}</div>
                                </div>
                                <h3 className='title'>
                                    {site.title}
                                </h3>
                                <div className="btn">
                                    <a href={site.code}>사이트바로가기</a>
                                    <a href={site.view}>자세히보기</a>
                                </div>
                                <div className="info">
                                    <span>{site.info[0]}</span>
                                    <span>{site.info[1]}</span>
                                    <span>{site.info[2]}</span>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Site
