import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [video, search] = useVideos("buildings");

  useEffect(() => {
    setSelectedVideo(video[1]);
  }, [video]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList onObjectSelect={setSelectedVideo} videos={video} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
