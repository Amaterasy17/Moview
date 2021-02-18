import {Header} from '../../../components/Header/index';
import {PlayerVideo} from "../../../components/PlayerVideo";
import {MainVideo} from "../../../components/MainVideo";
import {MVideo} from "./Video";
import {useParams} from 'react-router-dom';
import './PlayerPage.css';
import '../MainPage/MainPage.css';
import {videoUrl} from "../../../configs/ApiUrls";


export const PlayerPage = (props: any) => {
    console.log(props);
    const { id } = useParams() as any;
    props.items.video = videoUrl + id;
    return (
        <div>
            <Header></Header>
            <div className="play background">
                <PlayerVideo id={id}></PlayerVideo>
                <MVideo id={id}></MVideo>
            </div>
        </div>
    );
}