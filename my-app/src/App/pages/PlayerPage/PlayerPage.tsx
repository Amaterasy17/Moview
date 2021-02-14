import {Header} from '../../../components/Header/index';
import {PlayerVideo} from "../../../components/PlayerVideo";
import {MainVideo} from "../../../components/MainVideo";
import {useParams} from 'react-router-dom';
import './PlayerPage.css';
import '../MainPage/MainPage.css';
import {videoUrl} from "../../../configs/ApiUrls";


const MVideo = ({items}: any) => {
    return (
        <div className="main">
            {
                items.map((item: any) => {
                    return <MainVideo items={item}></MainVideo>;
                })
            }
        </div>
    );
};


export const PlayerPage = (props: any) => {
    console.log(props);
    const { id } = useParams() as any;
    props.items.video = videoUrl + id;
    return (
        <div>
            <Header></Header>
            <div className="play background">
                <PlayerVideo items={props.items} id={id}></PlayerVideo>
                <MVideo items={props.mitems}></MVideo>
            </div>
        </div>
    );
}