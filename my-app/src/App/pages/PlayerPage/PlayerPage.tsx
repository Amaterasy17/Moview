import { PlayerVideo } from "@components/PlayerVideo";
import { MVideo } from "./Video";
import { useParams } from "react-router-dom";
import "./PlayerPage.css";
import "../MainPage/MainPage.scss";

export const PlayerPage = (props: any) => {
  const { id } = useParams() as any;

  return (
    <div className="play background">
      <PlayerVideo id={id} />
      <MVideo id={id} />
    </div>
  );
};
