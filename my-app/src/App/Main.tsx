import React from 'react';
import {Route, Switch, Redirect, useParams} from 'react-router-dom';

import {MainPage} from "./pages/MainPage";
import {PlayerPage} from "./pages/PlayerPage";
import {SearchPage} from "./pages/SearchPage";

import {urls} from '../configs/routes'
import {videoUrl} from "../configs/ApiUrls";

const items = [

    {
        preview: 'https://i.ytimg.com/vi/2pLT-olgUJs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2Rn_Ayy_6V-TkbXM8cd2C3HcL8g',
        duration: '12:43',
        views: '300 тыс. просмотров',
        title: ' Full Body & Abs Workout | 20 Min + ANNOUNCEMENT',
        time: '2 weeks ago',
        avatar: 'https://yt3.ggpht.com/ytc/AAUvwngN64q7ozmpEshPSDigUCsd0UTu6I1yOjbjMitEwg=s88-c-k-c0x00ffffff-no-rj',
        nickname: 'Chloe Ting',
        description: 'Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule,' +
            ' so I put together a 2 weeks schedule to help you get closer to those defined abs and to lose weight.' +
            ' A 2 weeks program is easier to commit to, and you can always do it again after you finish it!',
    },

    {
        preview: 'https://i.ytimg.com/vi/2pLT-olgUJs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2Rn_Ayy_6V-TkbXM8cd2C3HcL8g',
        duration: '12:43',
        views: '300 тыс. просмотров',
        title: ' Full Body & Abs Workout | 20 Min + ANNOUNCEMENT',
        time: '2 weeks ago',
        avatar: 'https://yt3.ggpht.com/ytc/AAUvwngN64q7ozmpEshPSDigUCsd0UTu6I1yOjbjMitEwg=s88-c-k-c0x00ffffff-no-rj',
        nickname: 'Chloe Ting',
        description: 'Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule,' +
            ' so I put together a 2 weeks schedule to help you get closer to those defined abs and to lose weight.' +
            ' A 2 weeks program is easier to commit to, and you can always do it again after you finish it!',
    },

    {
        preview: 'https://i.ytimg.com/vi/2pLT-olgUJs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2Rn_Ayy_6V-TkbXM8cd2C3HcL8g',
        duration: '12:43',
        views: '300 тыс. просмотров',
        title: ' Full Body & Abs Workout | 20 Min + ANNOUNCEMENT',
        time: '2 weeks ago',
        avatar: 'https://yt3.ggpht.com/ytc/AAUvwngN64q7ozmpEshPSDigUCsd0UTu6I1yOjbjMitEwg=s88-c-k-c0x00ffffff-no-rj',
        nickname: 'Chloe Ting',
        description: 'Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule,' +
            ' so I put together a 2 weeks schedule to help you get closer to those defined abs and to lose weight.' +
            ' A 2 weeks program is easier to commit to, and you can always do it again after you finish it!',
    },

    {
        preview: 'https://i.ytimg.com/vi/2pLT-olgUJs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2Rn_Ayy_6V-TkbXM8cd2C3HcL8g',
        duration: '12:43',
        views: '300 тыс. просмотров',
        title: ' Full Body & Abs Workout | 20 Min + ANNOUNCEMENT',
        time: '2 weeks ago',
        avatar: 'https://yt3.ggpht.com/ytc/AAUvwngN64q7ozmpEshPSDigUCsd0UTu6I1yOjbjMitEwg=s88-c-k-c0x00ffffff-no-rj',
        nickname: 'Chloe Ting',
        description: 'Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule,' +
            ' so I put together a 2 weeks schedule to help you get closer to those defined abs and to lose weight.' +
            ' A 2 weeks program is easier to commit to, and you can always do it again after you finish it!',
    },

    {
        preview: 'https://i.ytimg.com/vi/2pLT-olgUJs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2Rn_Ayy_6V-TkbXM8cd2C3HcL8g',
        duration: '12:43',
        views: '300 тыс. просмотров',
        title: ' Full Body & Abs Workout | 20 Min + ANNOUNCEMENT',
        time: '2 weeks ago',
        avatar: 'https://yt3.ggpht.com/ytc/AAUvwngN64q7ozmpEshPSDigUCsd0UTu6I1yOjbjMitEwg=s88-c-k-c0x00ffffff-no-rj',
        nickname: 'Chloe Ting',
        description: 'Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule,' +
            ' so I put together a 2 weeks schedule to help you get closer to those defined abs and to lose weight.' +
            ' A 2 weeks program is easier to commit to, and you can always do it again after you finish it!',
    },

    {
        preview: 'https://i.ytimg.com/vi/2pLT-olgUJs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2Rn_Ayy_6V-TkbXM8cd2C3HcL8g',
        duration: '12:43',
        views: '300 тыс. просмотров',
        title: ' Full Body & Abs Workout | 20 Min + ANNOUNCEMENT',
        time: '2 weeks ago',
        avatar: 'https://yt3.ggpht.com/ytc/AAUvwngN64q7ozmpEshPSDigUCsd0UTu6I1yOjbjMitEwg=s88-c-k-c0x00ffffff-no-rj',
        nickname: 'Chloe Ting',
        description: 'Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule,' +
            ' so I put together a 2 weeks schedule to help you get closer to those defined abs and to lose weight.' +
            ' A 2 weeks program is easier to commit to, and you can always do it again after you finish it!',
    },

    {
        preview: 'https://i.ytimg.com/vi/2pLT-olgUJs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2Rn_Ayy_6V-TkbXM8cd2C3HcL8g',
        duration: '12:43',
        views: '300 тыс. просмотров',
        title: ' Full Body & Abs Workout | 20 Min + ANNOUNCEMENT',
        time: '2 weeks ago',
        avatar: 'https://yt3.ggpht.com/ytc/AAUvwngN64q7ozmpEshPSDigUCsd0UTu6I1yOjbjMitEwg=s88-c-k-c0x00ffffff-no-rj',
        nickname: 'Chloe Ting',
        description: 'Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule,' +
            ' so I put together a 2 weeks schedule to help you get closer to those defined abs and to lose weight.' +
            ' A 2 weeks program is easier to commit to, and you can always do it again after you finish it!',
    },
    {
        preview: 'https://i.ytimg.com/vi/2pLT-olgUJs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2Rn_Ayy_6V-TkbXM8cd2C3HcL8g',
        duration: '12:43',
        views: '300 тыс. просмотров',
        title: ' Full Body & Abs Workout | 20 Min + ANNOUNCEMENT',
        time: '2 weeks ago',
        avatar: 'https://yt3.ggpht.com/ytc/AAUvwngN64q7ozmpEshPSDigUCsd0UTu6I1yOjbjMitEwg=s88-c-k-c0x00ffffff-no-rj',
        nickname: 'Chloe Ting',
        description: 'Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule,' +
            ' so I put together a 2 weeks schedule to help you get closer to those defined abs and to lose weight.' +
            ' A 2 weeks program is easier to commit to, and you can always do it again after you finish it!',
    },

];

const items1 = {
    video: 'https://www.youtube.com/embed/F8m8-cMpP6E',
    views: '300 тыс. просмотров',
    title: ' Full Body & Abs Workout | 20 Min + ANNOUNCEMENT',
    date: '21 января 2020',
    avatar: 'https://yt3.ggpht.com/ytc/AAUvwngN64q7ozmpEshPSDigUCsd0UTu6I1yOjbjMitEwg=s88-c-k-c0x00ffffff-no-rj',
    nickname: 'Chloe Ting',
    description: 'Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule,' +
        ' so I put together a 2 weeks schedule to help you get closer to those defined abs and to lose weight.' +
        ' A 2 weeks program is easier to commit to, and you can always do it again after you finish it!Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule,' +
        ' so I put together a 2 weeks schedule to help you get closer to those',
    subscribers: '456 345 подписчиков',
}

const VideoID = () => {
    const { id } = useParams() as any;
    items1.video =  videoUrl + id;
}

export const Main = () => {

    return (
        <div>
            <Switch>
                <Route path = {urls.Videos}>
                    <MainPage items = {items}></MainPage>
                </Route>
                <Route path = {urls.Video.mask}
                       render = {(props) => <PlayerPage {...props} items={items1} mitems={items}/>}>
                </Route>
                <Route path={urls.Search} render={(props) => <SearchPage {...props} items={items}/>}></Route>
                <Redirect to={urls.Videos}></Redirect>
            </Switch>
        </div>
    );
}