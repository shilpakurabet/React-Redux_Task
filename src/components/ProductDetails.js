/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { PUBLIC_IMAGE_PATH } from "../utils/constant";
import Header from "./Header";
import "./ProductDetails.css";
const ProductDetails = () => {
  const singleData = useSelector((state) => {
    if (state.Reducer.getSingleData) {
      return state.Reducer.getSingleData;
    }
    return null;
  });
  const { abilities, types, stats } = singleData;
  return (
    <>
      <Header />
      <div className="pokemonContainer">
        <div className="pokemonInfo">
          <div className="pokemonImg">
            <img src={PUBLIC_IMAGE_PATH + "/pokemon.png"} alt="" className="" />
          </div>
          <div className="pokemonDetails">
            <div className="pokemonName"> Name : {singleData.name} </div>

            <div className="list">
              <ul>
                <strong> ability</strong>
                {abilities?.map((data) => {
                  return <li> {data.ability.name}</li>;
                })}
              </ul>
            </div>
            <div className="list">
              <ul>
                <strong> Type </strong>
                {types?.map((data) => {
                  return <li> {data.type.name}</li>;
                })}
              </ul>
            </div>
            <div className="list">
            <ul>
              <strong> stats </strong>
              {stats?.map((data) => {
                return <li> {data.stat.name}</li>;
              })}
            </ul>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
