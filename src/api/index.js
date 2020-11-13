import axios from "axios";
const key1 = "AIzaSyAFl_vy-ZylzJRPCO2eUsuoota9cdYP-gc";
const key2 = "AIzaSyCb1OkmFb__bC6aHA1qdBbNcxaAdPyrFkI";

export const youTubeQuerry = async (text) => {
  const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
  });

  const {
    data: { items },
  } = await youtube.get("/search", {
    params: {
      q: text,
      type: "video",
      part: "snippet",
      maxResults: 50,
      key: key2,
    },
  });

  const result = items.map(
    ({
      id: { videoId },
      snippet: { channelId, channelTitle, description, thumbnails, title },
    }) => ({
      channelId,
      videoId,
      description,
      channelTitle,
      thumbnails,
      title,
    })
  );

  return result;
};
