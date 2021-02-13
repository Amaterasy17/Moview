import {Header} from '../../../components/Header/index';
import {PlayerVideo} from "../../../components/PlayerVideo";
import {MainVideo} from "../../../components/MainVideo";
import './PlayerPage.css';
import '../MainPage/MainPage.css';


const MVideo = ({items}: any) => {
    return (
        <div className="player-back">
            {
                items.map((item: any) => {
                    return <MainVideo items={item}></MainVideo>;
                })
            }
        </div>
    );
};


export const PlayerPage = (props: any) => {
    return (
        <div>
            <Header></Header>
            <div className="play background">
                <PlayerVideo items={props.items}></PlayerVideo>
                <MVideo items={props.mitems}></MVideo>
            </div>
        </div>
    );
}