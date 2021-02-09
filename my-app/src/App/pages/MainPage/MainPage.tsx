import {Header} from '../../../components/Header/index';
import {MainVideo} from "../../../components/MainVideo";
import './MainPage.css';

const Main = ({items}: any) => {
    console.log(items);
    return (
        <div className="main background">
            {
                items.map((item: any) => {
                    return <MainVideo items={item}></MainVideo>;
                })
            }
        </div>
    );
};


export const MainPage = (props: any) => {

    return (
        <div>
            <Header></Header>
            <Main items={props.items}></Main>
        </div>
    );
}