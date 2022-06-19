import React, { useEffect, useState } from "react";
import styled from "styled-components";

import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default function Discover({ setIsOpen, screenWidth }) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [count, setCount] = useState(0);
  const languages = [
    { id: "GR", name: "Greek" },
    { id: "EN", name: "English" },
    { id: "RU", name: "Russian" },
    { id: "PO", name: "Polish" },
  ];
  const ratings = [
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ];

  const [keywordSearch, setKeywordSearch] = useState("");
  const [yearSearch, setYearSearch] = useState("");

  useEffect(() => {
    const getPopularResults = async () => {
      let res = [];

      if (keywordSearch === "") {
        res = await fetcher.getPopular();
      } else if (yearSearch === "") {
        res = await fetcher.getMovies(keywordSearch);
      } else {
        res = await fetcher.getMoviesByYear(keywordSearch, yearSearch);
      }
      setMovies(res.results);
      const genreRes = await fetcher.getGenres();
      setGenres(genreRes);
      setCount(res.results.length);
    };
    getPopularResults();
  }, [keywordSearch, yearSearch]);

  const setOpen = () => {
    setIsOpen(true);
  };

  // TODO: Preload and set the popular movies and movie genres when page loads

  // TODO: Update search results based on the keyword and year inputs

  const searchMovies = (keyword, id) => {
    if (id === "keyword") {
      const queryKeyword = keyword.toLowerCase().split(" ").join("%");
      setKeywordSearch(queryKeyword);
    } else if (id === "year") {
      setYearSearch(keyword);
    }
  };

  return (
    <DiscoverWrapper>
      <MobilePageTitle>
        <Hamburger onClick={setOpen}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
        Discover
      </MobilePageTitle>{" "}
      {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
      <TotalCount>{count} movies</TotalCount>
      <MovieFilters>
        <SearchFilters
          genres={genres}
          ratings={ratings}
          languages={languages}
          searchMovies={searchMovies}
          screenWidth={screenWidth}
        />
      </MovieFilters>
      <MovieResults>
        <MovieList movies={movies || []} genres={genres || []} />
      </MovieResults>
    </DiscoverWrapper>
  );
}

const DiscoverWrapper = styled.main`
  padding: 35px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;

  @media screen and (max-width: 600px) {
    order: -1;
  }
`;

const MobilePageTitle = styled.h1`
  display: flex;
  align-items: center;
  order: -2;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  padding-right: 10px;
  div {
    width: 35px;
    height: 3px;
    background-color: black;
    margin: 7px 0;
    border-radius: 1px;
  }
`;

const TotalCount = styled.p`
  display: block;
  margin: 0;
`;
