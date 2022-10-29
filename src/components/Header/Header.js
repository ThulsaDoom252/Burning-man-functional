import React, {useState} from 'react';
import logo from "../../image/logo.svg";
import Message from "./Message";
import {BsFacebook, BsInstagram, BsTelegram} from "react-icons/bs";

function Header(props) {
    const [isClicked, clicked] = useState(false)
    const [onHomePage, homeClicked] = useState(true)
    const [onAboutPage, aboutClicked] = useState(false)
    const [onContactPage, contactsClicked] = useState(false)

    const navItemClicked = (isHomeClicked = false, isAboutClicked = false, isContactsClicked = false) => {
        homeClicked(isHomeClicked)
        aboutClicked(isAboutClicked)
        contactsClicked(isContactsClicked)
        event.preventDefault()
    }
    window.clicked = isClicked
    return (
        <header className="header">
            <div className="container">
                <div className="nav">
                    <img className="logo" src={logo} alt="logo"/>
                    <ul className="menu">
                        <li>
                            <a href="src/components/Header/Header#" onClick={() => {
                                navItemClicked(true)
                            }}>Home</a>
                        </li>
                        <li>
                            <a href="src/components/Header/Header#" onClick={() => {
                                navItemClicked(false, true)
                            }}>About</a>
                        </li>
                        <li>
                            <a href="src/components/Header/Header#" onClick={() => {
                                alert("Nothing here yet")
                            }}>Contacts</a>
                        </li>
                    </ul>
                    <a hidden={onAboutPage || onContactPage} className="tel" href="tel: +1 893 839-23-64"></a>
                </div>
                <div hidden={!onHomePage} className="offer">
                    <p className="sign">Not tne event. The life</p>
                    <h1>Burning MAN</h1>
                    <a onClick={() => {
                        if (isClicked === true)
                            clicked(false)
                        else {
                            clicked(true)
                        }
                        event.preventDefault()
                    }} href="src/components/Header/Header#">Book the tickets</a>
                </div>
                <div className={"about-page"} hidden={!onAboutPage}>
                    <h1 className={"about-page-name"}>Burning man</h1>
                    <p className={"about-page-purpose"}>Codded for a test purpose</p>
                    {/*<p className={"about-page-person"}> Special for: <a className={"about-page-person-link"}*/}
                    {/*                                                    href={"https://www.instagram.com/ok_beauty_way/"}*/}
                    {/*                                                    target="_blank"></a>*/}
                    {/*</p>*/}
                    <p className={"about-page-version"}>Version: 1.0.0</p>
                </div>
                {isClicked && <Message clicked={clicked}/>}
            </div>
            {/*UNDER DEVELOPMENT*/}
            {/*<div className={"contacts-page"} hidden={!onContactPage}>*/}
            {/*    <h2>Contact me:</h2>*/}
            {/*    <p><a href={"https://www.instagram.com/t_h_u_l_s_a_d_o_o_m/"} target={"_blank"}><BsInstagram/></a>*/}
            {/*        <a href={"https://t.me/ThulsaDoom92"} target={"_blank"}><BsTelegram/></a>*/}
            {/*        <a href={"https://www.facebook.com/xenolm252/"} target={"_blank"}><BsFacebook/></a></p>*/}
            {/*</div>*/}
        </header>
    );
}

export default Header;