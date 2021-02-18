import React from 'react';
import './PlayerVideo.scss'
import axios from "axios";
import {ApiKey, channelById, videoById, videoUrl} from "../../configs/ApiUrls";

import {Ajax, ajax} from '../../utils/ajax'

type VideoContent = {
    video: string,
    title: string,
    views: bigint,
    date: string,
    avatar: string,
    nickname: string,
    subscribers: bigint,
    description: string,
}

export const PlayerVideo = ({id}: any) => {
    const [content, setContent] = React.useState({
        video: '',
        title: undefined,
        views: '',
        date: '',
        description: undefined,
        });

    const [user, setUser] = React.useState({
        avatar: undefined,
        nickname: undefined,
        subscribers: '',
    });

    React.useEffect( () => {
        ajax({
            method: 'get',
            url: videoById + id + ApiKey,
        }).then( ({data}) => {
            setContent({
                    video: videoUrl + id,
                    title: data.items[0].snippet.title,
                    views: data.items[0].statistics.viewCount + ' просмотров ',
                    date: new Date(data.items[0].snippet.publishedAt).getDate() + '.' +
                        new Date(data.items[0].snippet.publishedAt).getMonth() + '.' +
                        new Date(data.items[0].snippet.publishedAt).getFullYear(),
                    description: data.items[0].snippet.description,
            });
            ajax({
                method: 'get',
                url: channelById + data.items[0].snippet.channelId + ApiKey,
            }).then( ({data}) => {
                setUser({
                    avatar: data.items[0].snippet.thumbnails.default.url,
                    nickname: data.items[0].snippet.title,
                    subscribers: data.items[0].statistics.subscriberCount + ' подписчиков',
                });
            });
            })
    }, [id]);


    return (
        <div className="player">
            <div className="player-image-content">
                < iframe className="player-img" src={content.video}
                         frameBorder="0" allowFullScreen>
                </iframe>
            </div>
            <div className="player-description">
                <div className="player-name">{content.title}</div>
                <div className="player-undername">
                    <div className="player-view">{content.views}</div>
                    • <div className="player-date">{content.date}</div>
                </div>
                <div className="player-channel-info">
                    <div><img className="player-channel-img" src={user.avatar}/>
                    </div>
                    <div className="player-channel-textinfo">
                        <div className="player-channel">{user.nickname}</div>
                        <div className="subscribers">{user.subscribers}</div>
                    </div>
                </div>
                <div className="player-video-description">{content.description}</div>
            </div>
        </div>

    );
}