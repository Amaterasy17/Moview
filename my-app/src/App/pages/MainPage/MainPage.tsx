import React from "react";
import {Main} from "./MostPopular";

import './MainPage.css';


export const MainPage = (props: any) => {
    return (
        <div>
            <div className="background">
            <Main items={props.items}/>
            </div>
        </div>
    );
}