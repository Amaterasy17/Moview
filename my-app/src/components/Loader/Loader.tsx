import {useParams} from "react-router-dom";
import React from "react";
import './Loader.scss'


export const Loader = (props: any) => {
        return (
            <div className="container">
                    <div className="circle circle-1"/>
                    <div className="circle circle-2"/>
                    <div className="circle circle-3"/>
                    <div className="circle circle-4"/>
                    <div className="circle circle-5"/>
            </div>
        );
}

