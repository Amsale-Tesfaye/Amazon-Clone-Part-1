import React, { useEffect, useState } from "react";
import classess from "./Results.module.css";
import Layout from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    SetIsLoading(true);
    // console.log(categoryName);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        SetIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        SetIsLoading(false);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classess.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={productUrl.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
export default Results;
