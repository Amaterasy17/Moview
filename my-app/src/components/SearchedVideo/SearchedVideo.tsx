import React from 'react';
import './SearchedVideo.css'


export const SearchedVideo = ({items}: any) => {
    return (
        <div className="search__video">
            <div className="image-content">
                <img className="image-content__img" src={items.preview}/>
                    <span className="duration">{items.duration}</span>
                    <span className="views">{items.views}</span>
            </div>
            <div className="description">
                <div className="description__name">{items.title}</div>
                <div className="time">{items.time}</div>
                <div className="channel_info">
                    <div className="channel">
                        <div>
                            <img className="left_info" src={items.avatar}/>
                        </div>
                        <div className="description__blogger">{items.nickname}</div>
                    </div>
                    <div className="description_video">
                        {items.description}
                    </div>
                </div>
            </div>
        </div>
    );
}