export const parseSubscribers = (subscribers: string) => {
  let last = subscribers.slice(-1);
  if (last == "1") {
    return subscribers + " подписчик";
  }
  if (last == "2" || last == "3" || last == "4") {
    return subscribers + " подписчика";
  }
  if (
    last == "5" ||
    last == "6" ||
    last == "7" ||
    last == "8" ||
    last == "9" ||
    last == "0"
  ) {
    return subscribers + " подписчиков";
  }
};
