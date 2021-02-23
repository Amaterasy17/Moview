export const parseTime = (time: string) => {
  let i = 0;
  let time1 = time.replace(/H/i, ":");
  time1 = time1.replace(/M/i, ":");
  time1 = time1.replace(/S/i, "");
  time1 = time1.replace(/PT/i, "");
  let arr = time1.split(":");
  if (arr.length == 2) {
    if (Number(arr[1]) < 10) {
      arr[1] = "0" + arr[1];
    }
  }
  if (arr.length == 3) {
    if (Number(arr[1]) < 10) {
      arr[1] = "0" + arr[1];
    }
    if (Number(arr[2]) < 10) {
      arr[2] = "0" + arr[2];
    }
  }
  time1 = arr.join(":");
  return time1;
};
