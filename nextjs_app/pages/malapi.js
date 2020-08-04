import Link from "next/link";
import Head from "next/head";
import React, { useEffect } from "react";
import axios from "axios";
import jikanjs from "jikanjs";
import AnimeCard from "../components/animeCard";
import Chars from "../components/Chars";
import pressdown from "../styles/pressdown.module.css";

// function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

export default function malapi() {
  const [quote, setQuote] = React.useState("N/A");
  const [image, setImage] = React.useState("N/A");
  const [title, setTitle] = React.useState("N/A");
  const [query, setQuery] = React.useState("Attack On Titan");
  const [malid, setMalid] = React.useState(1);
  var char_list = [];
  const [chars, setChars] = React.useState([]);
  const [next, setNext] = React.useState(1);
  const [goodToApi, setGoodToApi] = React.useState(true);

  function onChange(q) {
    setGoodToApi(false);
    setQuery(q);
    console.log(q);
    setNext(1);
    setTimeout(() => {
      setGoodToApi(true);
    }, 4000);
    fetchAnime();
  }

  async function fetchAnime() {
    if (query.length < 3) {
      console.log("not able to search");
    } else if (goodToApi === true) {
      await fetchingAnimeChild();
    } else {
      console.log(
        "not able to search because of request delay is ongoing right now"
      );
    }
  }

  function pushChar(result) {
    const ten = 10;
    var i;
    for (i = 0; i < ten * next; i++) {
      try {
        char_list.push({
          name: result.data["characters"][i]["name"],
          image_url: result.data["characters"][i]["image_url"],
        });
      } catch (error) {
        console.log(error);
        if (error instanceof TypeError) {
          console.log("This is all the characters.");
        }
      }
    }
  }

  function nextPage() {
    setNext(next + 1);
    checkChars();
  }

  async function checkChars() {
    const result = await axios(
      `https://api.jikan.moe/v3/anime/${malid}/characters_staff`
    );

    console.log(result.data);
    pushChar(result);
    console.log(char_list);
    setChars(char_list);
  }

  async function fetchingAnimeChild() {
    const result = await axios(
      `https://api.jikan.moe/v3/search/anime?q=${query}&page=1`
    );

    console.log(result.data["results"][0]);
    setImage(result.data["results"][0]["image_url"]);
    setTitle(result.data["results"][0]["title"]);
    setMalid(result.data["results"][0]["mal_id"]);
  }

  // useEffect(() => {
  //   // async function fetchWords() {
  //   //   const result = await axios(
  //   //     "https://programming-quotes-api.herokuapp.com/quotes/random"
  //   //   );

  //   //   console.log(result.data["en"]);
  //   //   setQuote(result.data["en"]);
  //   // }

  //   //fetchWords();
  // }, []);

  return (
    <>
      <Head>
        <title>MAL api</title>
      </Head>
      <div>from MAL api</div>
      <input
        placeholder="type anime name"
        value={query}
        onChange={(e) => onChange(e.target.value)}
      ></input>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <h3>{quote}</h3>
      <AnimeCard title={title} image={image}></AnimeCard>
      <button className={pressdown.pressDown} onClick={() => checkChars()}>
        check the characters and staff
      </button>
      <Chars char_list={chars}></Chars>
      <button className={pressdown.pressDown} onClick={() => nextPage()}>
        next page
      </button>
      <style jsx>{`body {background-image url('/images/DjoFAH.jpg');}`}</style>
    </>
  );
}
