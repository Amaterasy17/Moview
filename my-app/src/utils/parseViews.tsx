export const parseViews = (views: string) => {
  let last = views.slice(-1);
  if (last == "1") {
    return views + " просмотр ";
  }
  if (last == "2" || last == "3" || last == "4") {
    return views + " просмотра ";
  }
  if (
    last == "5" ||
    last == "6" ||
    last == "7" ||
    last == "8" ||
    last == "9" ||
    last == "0"
  ) {
    return views + " просмотров ";
  }
};
