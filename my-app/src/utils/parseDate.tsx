export const parseDate = (date: string) => {
  let arr = date.split(".");

  arr[1] = (Number(arr[1]) + 1).toString();
  if (Number(arr[0]) < 10) {
    arr[0] = "0" + arr[0];
  }
  if (Number(arr[1]) < 10) {
    arr[1] = "0" + arr[1];
  }
  date = arr.join(".");
  return date;
};
