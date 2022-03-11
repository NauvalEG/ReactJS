import axios from "axios";

const YTKEY = "AIzaSyBxfyCpBFMi21Hoc_QbeRvisVAOFuPABGU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: YTKEY,
  },
});
