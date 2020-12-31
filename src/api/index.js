import axios from "axios";
const key2 = "AIzaSyBlY8_gftan32DzZ1hINQYLQZiaoNP2iLU";
// api for the project
export const getUsersList = async () => {
    const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'
    try {
        const response = await axios.get(url)
        return response
    } catch (error) {
        console.log(error);
        return [];
    }
}
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
