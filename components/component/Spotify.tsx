"use client";
import React from "react";
import { useEffect, useState } from "react";

export type SpotifyData = {
  is_playing: boolean;
  item: { id: any; type: any; name: string; artists: any[] };
  error?: any;
};

export default function Spotify() {
  const client_id = "4c3e9cfbc7cf49298f6bd036de876195";
  const client_secret = "cb8c26499bef4a26baa915728085b73e";
  const refresh_token =
    "AQDwIEQhn7RVlz-tGKbRoqef-vAqlYog9YPbE7qxHObvIUO1tokYvjDHkhqA0gShcnKXgQ7nTOVLHJXv9sa9fsGGFhSz27QAyPiWR07pCEBhg529PIXTSL5JRovDIFAvV1o";

  const [spotifyData, setSpotifyData] = useState<SpotifyData>();
  const [spotifyArtist, setSpotifyArtist] = useState("");
  const [spotifySong, setSpotifySong] = useState("Not Currently Listening");

  useEffect(() => {
    fetchAccessToken().then((access_token) => {
      fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            return {};
          }
        })
        .then((data) => {
          if (data) {
            const spotifyData = data as SpotifyData;
            if (spotifyData && spotifyData.is_playing === true) {
              setSpotifyData(spotifyData);
              setSpotifySong(spotifyData.item.name);
              if (spotifyData.item.artists.length > 0) {
                const artist = spotifyData.item.artists[0].name;
                setSpotifyArtist(artist);
              }
            } else {
              if (
                spotifyData.error &&
                spotifyData.error.message === "The access token expired"
              ) {
              }
            }
          }
        });
    });
  }, []);

  function fetchAccessToken() {
    return fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token,
        json: true,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.access_token) {
          var access_token = json.access_token;
          return access_token;
        }
      });
  }

  const uri = spotifyData?.item?.type;
  const id = spotifyData?.item?.id;

  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col justify-center">
        <img width={"60px"} src="/spotify.png" />
      </div>
      <div className="flex flex-col">
        {!spotifyData && (
          <>
            <span className="font-bold">Not Listening. </span>
            <span>Try checking between 8AM-5PM 😎</span>
          </>
        )}

        {uri && id && (
          <>
            <span className="font-bold">Listening Now </span>
            <iframe
              className="h-18 w-full"
              src={`https://open.spotify.com/embed/${uri}/${id}`}
            //   width="400"
              height={90}
              frameBorder="0"
            //   allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </>
        )}
      </div>
    </div>
  );
}
