import React from 'react'
import {Link, useHistory} from "react-router-dom";
import './Header.scss'
import {urls} from "../../configs/routes";


export const Header = () => {

    const history = useHistory();

    return (
        <div className="header">

                <Link to={urls.Videos} className="header__logo1">
                    <img className="logo-img"
                         src="https://sun9-46.userapi.com/impf/pX8G2t1V-0gpuGdGBdQir3deVQJrAWx8KhcEwA/pjMXfZUh6mU.jpg?size=571x487&quality=96&proxy=1&sign=3241983732d6747cbde468bb11e99e95&type=album"/>
                </Link>
                <Link to={urls.Videos} className="header__text"> o v i e</Link>
                <Link to={urls.Videos} className="header__logo2">
                    <img className="logo-img"
                         src="https://sun9-55.userapi.com/impf/XU4dymAGJ8AuxNqKou5qMvWC2AG-OCEtEXQ1rA/Or5Zb53Sp0k.jpg?size=572x487&quality=96&proxy=1&sign=9bfc84af1ea9fc585f80d2d14273ad0c&type=album"/>
                </Link>


            <div className="header__button">
                <form className="formButton" onSubmit={(evt) => {
                    history.push(urls.Searching.create((document.getElementById('input') as HTMLInputElement).value))
                }}>
                    <input type="text" className="inputButton" id="input" placeholder="Введите запрос"/>
                        <button type="submit" className="search-button"/>
                </form>
            </div>
        </div>
    );
}
