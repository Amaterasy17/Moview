import { Header } from "../../../components/Header/index";
import { PlayerVideo } from "../../../components/PlayerVideo";
import { MainVideo } from "../../../components/MainVideo";
import { MVideo } from "./Video";
import { useParams } from "react-router-dom";
import "./PlayerPage.css";
import "../MainPage/MainPage.scss";
import { videoUrl } from "../../../configs/ApiUrls";

export const PlayerPage = (props: any) => {
  const { id } = useParams() as any;

  return (
    <div className="play background">
      <PlayerVideo id={id} />
      <MVideo id={id} />
    </div>
  );
};
