import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  padding-top: 80px;
`;

const ProductListing = () => {
  //const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </Container>
  );
};

export default ProductListing;
