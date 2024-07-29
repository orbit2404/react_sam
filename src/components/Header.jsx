import React, { useState } from 'react'

const headerNav = [
    {
        title : "intro",
        url : "#intro",
    },
    {
        title : "skip",
        url : "#skip",
    },
    {
        title : "site",
        url : "#site",
    },
    {
        title : "port",
        url : "#port",
    },
    {
        title : "contact",
        url : "#contact",
    }
]

const Header = () => {

    const [show,setShow] = useState(false)
    const toggleMenu = () =>{
        setShow((prevShow) => !prevShow); //! : 반대, 1이면 0으로, 0이면 1로 바꿔주는것 
    }

  return (
    <header id='header' role='banner'>
        <div className="header_inner">
            <div className="header_logo">
                <a href="/">portfolio<em>react</em></a>
            </div>
            <div 
                className={`header_nav ${show ? "show":""}` }                role='navigation'
                aria-label='메인메뉴'
            >
                <ul>
                    {headerNav.map((nav,key)=>(
                        <li key={key}>
                            <a href={nav.url}>{nav.title}</a>
                        </li> 
                    ))}                 
                </ul>

        </div>
        <div 
            className="header_nav_mobile"
            id="headerToggle"
            aria-controls="primary_menu"
            aria-expanded={show ? "true":"false"}
            role="button"
            tabIndex="0"
            // tabindex="1"
            //     문서 안에서 가장 먼저 초점을 받을 수 있습니다. 그러나 자연스러운 마크업 순서를 거스르기 때문에 주의해서 사용해야 합니다. 검색엔진 사이트에서 검색창에 사용하면 적합하지만(이 대신 autofocus 속성이 더 적절할 듯 해요) 그 외 적합한 경우는 잘 떠오르지 않는군요.

            //     tabindex="0"
            //     키보드 초점을 받을 수 없는 div, span과 같은 요소도 초점을 받을 수 있도록 만들어 줍니다. 초점을 받되 초점을 받는 순서는 자연스러운 마크업 순서를 따릅니다.

            //     tabindex="-1"
            //     키보드 초점을 받을 수 있는 요소도 초점을 받을 수 없도록 만들어 줍니다. 초점을 받을 수 없기 때문에 "-1" 이외의 다른 음의 정수 값은 사실상 의미가 없습니다.
            onClick={toggleMenu}
            >
                <span></span>
            </div>
      </div>
    </header>
  )
}

export default Header
