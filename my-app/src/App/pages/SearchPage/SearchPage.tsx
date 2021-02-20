import {useParams} from "react-router-dom";
import React from "react";
import {Search} from "./Search";

import './SearchPage.css';


export const SearchPage = (props: any) => {
    const { q } = useParams() as any;
    return (
        <div  className="background">
            <Search q={q} id={props.id}/>
        </div>
    );
}