import React from 'react';
import './MainVideo.css'

export const MainVideo = ({items}: any) => {
    return (
        <div className="main-video">
            <div className="main-image-content">
                <img className="main-image-content-img" src={items.preview}/>
                <span className="duration">{items.duration}</span>
                <span className="views">{items.views}</span>
            </div>
            <div className="bottom-info">
                <div><img className="channel-logo" src={items.avatar}/></div>
                <div className="right-info">
                    <div className="heading">{items.title}</div>
                    <div className="low">
                        <div className="name-channel">{items.nickname}</div>
                        ·
                        <div className="time"> {items.time}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}