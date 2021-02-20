import {Header} from '../../../components/Header/index';
import {SearchedVideo} from "../../../components/SearchedVideo";
import './SearchPage.css';
import {useParams} from "react-router-dom";
import {ApiKey, searchAnalogVideos, searchVideo, videoUrl} from "../../../configs/ApiUrls";
import React from "react";
import {ajax} from "../../../utils/ajax";
import {Video} from "../PlayerPage/SubVideo";
import {DopVideo} from "./DopVideo";
import {MainVideo} from "../../../components/MainVideo";

const Search = ({q}: any, {id}:any) => {
    const [videos, setVideos] = React.useState<any>([]);

    React.useEffect( () => {
        ajax({
            method: 'get',
            url: searchVideo + q + ApiKey,
        }).then( ({data}) => {
            setVideos(data.items);
        })
    }, [q]);

    return (
        <div className="search">
            <DopVideo mainVideos={videos} idsUrl={videos.map((video:any) => video.id.videoId).join(',')}/>
        </div>
    );
};

export const SearchPage = (props: any) => {
    const { q } = useParams() as any;
    return (
        <div  className="background">
            <Search q={q} id={props.id}/>
        </div>
    );
}