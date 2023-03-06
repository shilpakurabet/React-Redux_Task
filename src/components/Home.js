/** @format */

import { Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "../redux/action";
import { PUBLIC_IMAGE_PATH } from "../utils/constant";
import Card from "./Card";
import Header from "./Header";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => {
    if (state.Reducer.getAllData) {
      return state.Reducer.getAllData;
    }
    return null;
  });
  const [data, setData] = useState("");
  const [sortByName, setSortByName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortName = (
    <Menu>
      <Menu.Item
        onClick={() => {
          setSortByName("asc");
        }}>
        {" "}
        A - Z{" "}
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setSortByName("desc");
        }}>
        {" "}
        Z - A{" "}
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setSortByName("");
        }}>
        No sort
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {
    dispatch(getAllPokemon());
    if (allData) {
      setData(allData);
    }
  }, [dispatch, allData.length]);
  return (
    <div>
      <Header setSearchQuery={setSearchQuery} />
      <div className="container">
        <div>
          <div className="filterSort">
            <Dropdown overlay={sortName}>
              <div className="filter">
                Sort
                <img
                  src={PUBLIC_IMAGE_PATH + "/down-arrow.png"}
                  alt=""
                  className="w-[10px]"
                />
              </div>
            </Dropdown>
          </div>
          <Card data={data} searchQuery={searchQuery} sortByName={sortByName} />
        </div>
      </div>
    </div>
  );
};

export default Home;
