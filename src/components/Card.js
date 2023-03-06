/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getById } from "../redux/action";
import { PUBLIC_IMAGE_PATH } from "../utils/constant";
import "./Card.css";
const Card = ({ data, searchQuery, sortByName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    setCardsData(data?.results);
    if (searchQuery) {
      const filteredItems = data?.results?.filter((data) => {
        return data.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setCardsData(filteredItems);
    } else if (sortByName) {
      if (sortByName === "asc") {
        const ascSort = [...cardsData].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCardsData(ascSort);
      } else if (sortByName === "desc") {
        const desSort = [...cardsData].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        setCardsData(desSort);
      }
    } else setCardsData(data?.results);
  }, [data?.length, searchQuery, sortByName]);
  return (
    <div className="cardWrapper">
      {cardsData?.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div>
              <div
                className="cardImage"
                onClick={() => {
                  dispatch(getById(item.name));
                  navigate(`/pokemon-details/${item.name}`);
                }}>
                <img
                  src={PUBLIC_IMAGE_PATH + "/pokemon.png"}
                  alt=""
                  className=""
                />
              </div>

              <div className="cardTitle"> {item.name} </div>

              <div
                className="viewDetails"
                onClick={() => {
                  dispatch(getById(item.name));
                  navigate(`/pokemon-details/${item.name}`);
                }}>
                <button> view details </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
