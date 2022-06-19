import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as colors from "../../colors";

export default function MovieItem({ movie, genres }) {
  const genreList = genres.genres;
  const movieGenres = movie.genre_ids;
  let genresAsStrings = [];
  let genreString = "";
  const [filmGenres, setFilmGenres] = useState("");

  useEffect(() => {
    if (genreList) {
      for (let i = 0; i < movieGenres.length; i++) {
        const index = genreList.findIndex((object) => {
          return object.id === movieGenres[i];
        });
        genresAsStrings.push(genreList[index].name);
        genreString = genresAsStrings.join(" | ");
        setFilmGenres(genreString);
      }
    }
  });
  const imgBase = "https://image.tmdb.org/t/p/w200";

  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        <img src={`${imgBase}${movie.poster_path}`} alt={"movie poster"} />
      </LeftCont>
      <RightCont>
        <Title>{movie.title}</Title>
        <Genres>{filmGenres}</Genres>
        <Description>{movie.overview}</Description>
        <Rating>{movie.vote_average}</Rating>
        <Date>{movie.release_date}</Date>
      </RightCont>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  display: flex;

  @media screen and (max-width: 600px) {
    width: 75vw;
    height: 220px;
    align-items: center;
  }
`;

const LeftCont = styled.div`
  display: inline-block;
  padding-right: 20px;

  @media screen and (max-width: 600px) {
    img {
      height: 150px;
    }
  }
`;

const RightCont = styled.div`
  display: inline-block;
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.4;

  @media screen and (max-width: 600px) {
    font-size: 1;
    width: 130px;
    max-height: 65px;
    overflow: hidden;
    margin: 0;
  }
`;

const Genres = styled.h4`
  color: ${colors.primaryColor};
  font-size: 1;

  @media screen and (max-width: 600px) {
    margin: 5px;
  }
`;

const Description = styled.p`
  font-size: 1;

  @media screen and (max-width: 600px) {
    overflow: hidden;
    max-height: 70px;
  }
`;

const Rating = styled.p`
  background-color: ${colors.primaryColor};
  width: 30px;
  text-align: center;
  border-radius: 4px;
  color: white;
  position: absolute;
  right: 5px;
  top: 5px;

  @media screen and (max-width: 600px) {
    top: 0px;
    right: 0px;
  }
`;

const Date = styled.p`
  color: ${colors.primaryColor};
`;
