import React from 'react';
import {Route, Switch, Redirect, useParams} from 'react-router-dom';
import {MainPage} from "./pages/MainPage";
import {PlayerPage} from "./pages/PlayerPage";
import {SearchPage} from "./pages/SearchPage";
import {urls} from '../configs/routes'
import {videoUrl} from "../configs/ApiUrls";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer/Footer";


export const Main = () => {
    return (
        <>
            <Header/>
            <Switch>
                <Route path={urls.Video.mask}
                       render={(props) => <PlayerPage {...props}/>}>
                </Route>
                <Route path={urls.Searching.search}
                       render={(props) => <SearchPage {...props}/>}/>
                <Route path={urls.Videos}>
                    <MainPage/>
                </Route>
            </Switch>
            <Footer/>
        </>
    );
}