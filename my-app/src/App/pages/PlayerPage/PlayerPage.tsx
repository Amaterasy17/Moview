import {Header} from '../../../components/Header/index';
import {PlayerVideo} from "../../../components/PlayerVideo";
import './PlayerPage.css';

const Player= ({items}: any) => {
    return (
        <div className="player">
            {/*{*/}
            {/*    items.((item: any) => {*/}
            {/*        return <PlayerVideo items={item}></PlayerVideo>;*/}
            {/*    })*/}
            {/*}*/}
        </div>
    );
};


export const PlayerPage = (props: any) => {
    console.log('В PlayerPage')
    console.log(props)
    return (
        <div>
            <Header></Header>
            <PlayerVideo items={props.items}></PlayerVideo>
        </div>
    );
}