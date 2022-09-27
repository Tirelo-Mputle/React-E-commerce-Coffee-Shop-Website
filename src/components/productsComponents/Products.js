import React from "react";
import styled from "styled-components";
import { coffeeBlendsData, Coffee } from "../index";

const ProductsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.lightestGray};
  padding: 5rem 0;
`;
const ProductsContainer = styled.section``;
const ProductsBanner = styled.section`
  margin-bottom: 2rem;
  h1 {
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts[0]};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: 1.5rem;
  }
  p {
    font-family: ${({ theme }) => theme.fonts[1]};
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    color: ${({ theme }) => theme.colors.darkerGray};
    line-height: 1.3rem;
    max-width: 40rem;
  }
`;
const ProductImgsContainer = styled.div`
  display: flex;
  gap: 2rem;
  overflow: auto;
  white-space: nowrap;
  padding: 0rem 3rem 2rem 3rem;

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.lgLaptop}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 3rem;
    overflow: visible;
    width: 90%;
    margin: 0 auto;
    overflow: visible;
  }
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.xlgLaptop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Products = ({ h1, p, array }) => {
  return (
    <>
      <ProductsSection>
        <ProductsContainer className="centered-section">
          <ProductsBanner>
            <h1>{h1}</h1>
            <p>{p}</p>
          </ProductsBanner>
        </ProductsContainer>
        <ProductImgsContainer>
          {array.map((coffee, index) => {
            return <Coffee key={index} {...coffee} />;
          })}
        </ProductImgsContainer>
      </ProductsSection>
    </>
  );
};

export default Products;
