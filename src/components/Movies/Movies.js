import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import posts from '../../utils/movies';
import Preloader from "../Preloader/Preloader";
import './Movies.css';

let arrayForHoldingPosts = [];

const Movies = () => { 
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(4);
  const [isPreloaderEnable, setIsPreloaderEnable] = useState(false);

  const loopWithSlice = (start, end) => {
    if (start !== arrayForHoldingPosts.length && arrayForHoldingPosts.length !== 0) {
      setPostsToShow(arrayForHoldingPosts);
      setIsPreloaderEnable(false);
    } else {
      const slicedPosts = posts.slice(start, end);
      arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
      setPostsToShow(arrayForHoldingPosts);
      setIsPreloaderEnable(false);
    }
  };

  const mobileToolHandler = () => setPostsPerPage(1);
  const tabletToolHandler = () => setPostsPerPage(2);
  const lapTopToolHandler = () => setPostsPerPage(4);

  useEffect(() => {
    const mobileTool = window.matchMedia("(min-width: 320px)");
    mobileTool.addEventListener("change", mobileToolHandler);

    const tabletTool = window.matchMedia("(min-width: 768px)");
    tabletTool.addEventListener("change", tabletToolHandler);

    const lapTopTool = window.matchMedia("(min-width: 1280px)");
    lapTopTool.addEventListener("change", lapTopToolHandler);
    return () => {
      mobileTool.removeEventListener("change", mobileToolHandler);
      tabletTool.removeEventListener("change", tabletToolHandler);
      lapTopTool.removeEventListener("change", lapTopToolHandler);
    };
  }, []);

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    setIsPreloaderEnable(true);
    setTimeout(function() {
      loopWithSlice(next, next + postsPerPage);
      setNext(next + postsPerPage);
    }, 1000)
  };
  
    return (
        <>
          <SearchForm />
          <MoviesCardList cards={postsToShow} />
          {isPreloaderEnable 
          ? <Preloader /> 
          :
          <div className="cards__button-container">
              <button className="cards__button" type="button" name="more" onClick={handleShowMorePosts}>Ещё</button>
          </div>
}          
        </>
    );
};

export default Movies;