import { MainVideo } from "@components/MainVideo";
import { observer } from "mobx-react-lite";
import "./MainPage.scss";
import React from "react";
import { Loader } from "@components/Loader/Loader";
import { MainPageStore } from "@store/MainPageStore";
import { useLocal } from "@utils/useLocal";
import { Meta } from "@utils/Meta";

const Main = ({ items }: any) => {
  const store = useLocal(() => new MainPageStore());

  React.useEffect(() => {
    store.fetch();
  }, []);

  return (
    <div className="main">
      {store.meta === Meta.error && <div>какая то ошибка</div>}
      {store.meta === Meta.loading && <Loader />}
      {store.videos.map((item: any) => {
        return <MainVideo key={item.id} item={item} />;
      })}
    </div>
  );
};

export default observer(Main);
