import React from 'react';
import './PlayerVideo.css'


export const PlayerVideo = ({items}: any) => {
    return (
        <div className = "player" >
            <div className = "player-image-content">
                < iframe className = "player-img" src = {items.video}
                    frameBorder = "0" allowFullScreen >
                </iframe>
            </div>
            <div className="player-description">
            <div className="player-name">{items.title}</div>
            <div className="player-undername">
                <div className="player-view">{items.views}</div> • <div className="player-date">{items.date}</div>
            </div>
            <div className="player-channel-info">
                <div><img className="player-channel-img" src={items.avatar}/>
        </div>
            <div className="player-channel-textinfo">
            <div className="player-channel">{items.nickname}</div>
            <div className="subscribers">{items.subscribers}</div>
        </div>
        </div>
        <div className="player-video-description">{items.description}</div>
            </div>
        </div>
    );
}