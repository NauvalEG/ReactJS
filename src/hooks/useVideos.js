import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearch) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    search(defaultSearch);
  }, [defaultSearch]);

  const search = async (word) => {
    const response = await youtube.get("/search", {
      params: {
        q: word,
      },
    });

    setVideo(response.data.items);
  };

  return [video, search];
};

export default useVideos;
