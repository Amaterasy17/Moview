import {Header} from '../../../components/Header/index';
import {SearchedVideo} from "../../../components/SearchedVideo";
import './SearchPage.css';

const Search = ({items}: any) => {
    console.log(items);
    return (
        <div className="search background">
            {
                items.map((item: any) => {
                   return <SearchedVideo items={item}></SearchedVideo>;
                })
            }
        </div>
    );
};


export const SearchPage = (props: any) => {
    console.log(props.items);
    return (
        <div>
            <Header></Header>
            <Search items={props.items}></Search>
        </div>
    );
}