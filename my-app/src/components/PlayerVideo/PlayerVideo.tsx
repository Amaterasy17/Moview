import React from 'react';
import './PlayerVideo.css'
import axios from "axios";
import {ApiKey, channelById, videoById} from "../../configs/ApiUrls";

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

export const PlayerVideo = ({items, id}: any) => {
    const [content, setContent] = React.useState({
        video: undefined,
        title: undefined,
        views: undefined,
        date: undefined,
        avatar: undefined,
        nickname: undefined,
        subscribers: undefined,
        description: undefined,
        }
    );

    React.useEffect( () => {
        const getVideoContent = async () => {
            console.log(videoById + id + ApiKey);

            const response = await axios(
                {
                    method: 'get',
                    url: videoById + id + ApiKey,
                }
            );
            console.log(response);
            return response;
        }
        getVideoContent().then( ({data}:any) => {
                setContent({
                    video: items.video,
                    title: data.items[0].snippet.title,
                    views: data.items[0].statistics.viewCount,
                    date: data.items[0].snippet.publishedAt,
                    avatar: undefined,
                    nickname: data.items[0].snippet.channelTitle,
                    subscribers: undefined,
                    description: data.items[0].snippet.description,
                    }
                );
            const getChannelInfo = async () => {
                    return axios({
                        method: 'get',
                        url: channelById + data.items[0].snippet.channelId + ApiKey,
                    });
            }
            getChannelInfo().then(({data}) => {
                content.subscribers = data.items[0].statistics.subscriberCount;
                console.log(content.subscribers);
                content.avatar = data.items[0].snippet.thumbnails.default.url;
                console.log(content.avatar);
            })
        })
        console.log(content);
    }, [])




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
                    <div><img className="player-channel-img" src={content.avatar}/>
                    </div>
                    <div className="player-channel-textinfo">
                        <div className="player-channel">{content.nickname}</div>
                        <div className="subscribers">{content.subscribers}</div>
                    </div>
                </div>
                <div className="player-video-description">{content.description}</div>
            </div>
        </div>

    );
}