import {Header} from '../../../components/Header/index';
import {MainVideo} from "../../../components/MainVideo";
import './MainPage.css';
import React from "react";
import {ajax} from "../../../utils/ajax";
import {ApiKey, mostPopularVideos} from "../../../configs/ApiUrls";

const Main = ({items}: any) => {
    console.log(items);
    const [videos, setVideos] = React.useState([]);

    React.useEffect( () => {
        ajax({
            method: 'get',
            url: mostPopularVideos + ApiKey,
        }).then( ({data}) => {
            setVideos(data.items);
        })
    }, []);


    return (
        <div className="main background">
            {
                videos.map((item: any) => {
                    return <MainVideo item={item}></MainVideo>;
                })
            }
        </div>
    );
};


export const MainPage = (props: any) => {

    return (
        <div>
            <Header></Header>
            <Main items={props.items}></Main>
        </div>
    );
}