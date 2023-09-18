import React from 'react';
import "./Footer.css";

export default function Footer() {


    return (
        <>
            <div className="footer_container">
                <div className="team">
                    <p className="medium">This cookbook was created by:</p>
                    <p className="large">Super group 2!</p>
                    <ul className="name_list">
                        <li>Hari</li>
                        <li>Ehsan</li>
                        <li>Renata</li>
                        <li>Jennifer</li>
                    </ul>
                </div>

                <button className="button">Follow Us!</button>

                <div className="icons">
                    <img className="icon" src="./icons/facebook_white.svg"></img>
                    <img className="icon" src="./icons/instagram_white.svg"></img>
                    <img className="icon" src="./icons/youtube_white.svg"></img>
                </div>
            </div>
        </>
    );
}