import Card from "./Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const ProductListing = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchFunction();
  }, []);

  useEffect(() => {
    console.log(productList);
  });
  const fetchFunction = async () => {
    try {
      const data = await axios.get("/api/products");
      setProductList(data.data.products);
      console.log(data.data.products);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div className="App">
      {productList.map((ele) => {
        return <Card key={ele.id} ele={ele} />;
      })}
    </div>
  );
};

export { ProductListing };
