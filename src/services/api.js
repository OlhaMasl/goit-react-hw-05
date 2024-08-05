import axios from "axios";

export const fetchMovies = async () => {
const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGY0ZTI3OTdhN2ZmOWEwZWYwY2I2NmM2YWViNTYwMCIsIm5iZiI6MTcyMjM2MjMzMS43OTgxMDUsInN1YiI6IjY2YTc0YzM5MjY1N2I5YmIwYTY2MWMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uIzL1vF1gbU-R9_s-zlCJqTLeeNjNYSWXilsVRZ3GzM",
    accept: "application/json",
  }
};

    const res = await axios.get(url, options);
    return res.data;
};

export const fetchMovieById = async (id) => {
const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

const options = {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGY0ZTI3OTdhN2ZmOWEwZWYwY2I2NmM2YWViNTYwMCIsIm5iZiI6MTcyMjM2MjMzMS43OTgxMDUsInN1YiI6IjY2YTc0YzM5MjY1N2I5YmIwYTY2MWMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uIzL1vF1gbU-R9_s-zlCJqTLeeNjNYSWXilsVRZ3GzM",
    accept: "application/json",
  }
};

    const res = await axios.get(url, options);
    return res.data;
};

export const fetchCastById = async (id) => {
const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;

const options = {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGY0ZTI3OTdhN2ZmOWEwZWYwY2I2NmM2YWViNTYwMCIsIm5iZiI6MTcyMjM2MjMzMS43OTgxMDUsInN1YiI6IjY2YTc0YzM5MjY1N2I5YmIwYTY2MWMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uIzL1vF1gbU-R9_s-zlCJqTLeeNjNYSWXilsVRZ3GzM",
    accept: "application/json",
  }
};

    const res = await axios.get(url, options);
    return res.data;
};

export const fetchReviewsById = async (id) => {
const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;

const options = {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGY0ZTI3OTdhN2ZmOWEwZWYwY2I2NmM2YWViNTYwMCIsIm5iZiI6MTcyMjM2MjMzMS43OTgxMDUsInN1YiI6IjY2YTc0YzM5MjY1N2I5YmIwYTY2MWMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uIzL1vF1gbU-R9_s-zlCJqTLeeNjNYSWXilsVRZ3GzM",
    accept: "application/json",
  }
};

    const res = await axios.get(url, options);
    return res.data;
};

export const fetchSearchMovie = async (query) => {
const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

const options = {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGY0ZTI3OTdhN2ZmOWEwZWYwY2I2NmM2YWViNTYwMCIsIm5iZiI6MTcyMjM2MjMzMS43OTgxMDUsInN1YiI6IjY2YTc0YzM5MjY1N2I5YmIwYTY2MWMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uIzL1vF1gbU-R9_s-zlCJqTLeeNjNYSWXilsVRZ3GzM",
    accept: "application/json",
  }
};

    const res = await axios.get(url, options);
    return res.data;
};