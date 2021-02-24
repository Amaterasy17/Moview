export const videoUrl = "https://www.youtube.com/embed/";
export const searchVideo =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=";
export const videoById =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20id%2C%20statistics%2CcontentDetails&id=";
export const channelById =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20id%2Cstatistics&id=";
export const searchAnalogVideos =
  searchVideo + "?part=snippet%2C%20id&maxResults=24&q=";

export const mostPopularVideos =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=RU";

export const ApiKey = "&key=AIzaSyCnpNDwgqURJK3N3v4-hKJvt1CYRaltfYc";

//'&key=AIzaSyCnpNDwgqURJK3N3v4-hKJvt1CYRaltfYc';

//'&key=AIzaSyBt1n2Ifih9fKKAyBYCJbcIByPP-m6ncrI';
//'&key=AIzaSyCe-eX18XkjaV3_ChgXqrShm2uRUE_jPfc';
