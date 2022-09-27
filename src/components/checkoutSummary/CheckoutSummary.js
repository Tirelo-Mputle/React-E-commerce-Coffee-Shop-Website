import React from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { Buttons } from "../../UI/index";
import { SummaryItem, Backdrop, WhiteOverlay } from "../index";

const CheckoutTop = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto;
  grid-template-rows: 3rem auto;
`;
const CheckoutHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
const CheckoutItemList = styled.div`
  overflow-y: scroll;
  max-height: 23rem;
  height: 100%;
  width: auto;
`;
const CheckoutFooter = styled.header`
  border-top: 1px solid ${({ theme }) => theme.colors.darkerGray};
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const FooterTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
`;
const ContinueShopping = styled.span`
  display: inline-block;
  margin-left: 0.3rem;
  color: ${({ theme }) => theme.colors.secondaryGreen};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const CheckoutSummary = (props) => {
  // const initialValue = 0;
  const itemTotals = props.checkoutList.reduce(
    (accumulator, currValue) =>
      accumulator + +(currValue.price * currValue.quantity),
    0
  );
  return (
    <>
      <Backdrop onClick={props.closeCheckoutSummary}></Backdrop>
      <WhiteOverlay className="right">
        <CheckoutTop>
          <CheckoutHeader>
            <span>YOUR CART</span>
            <ImCross onClick={props.closeCheckoutSummary} />
          </CheckoutHeader>
          <CheckoutItemList>
            {props.checkoutList.map((item, index) => {
              return (
                <SummaryItem
                  key={index}
                  {...item}
                  setCheckoutList={props.setCheckoutList}
                  checkoutList={props.checkoutList}
                />
              );
            })}
          </CheckoutItemList>
        </CheckoutTop>
        <CheckoutFooter>
          <FooterTotalContainer>
            <span>SUBTOTAL</span>
            <span>${itemTotals}.00</span>
          </FooterTotalContainer>
          <p>Shipping and discounts calculated at checkout.</p>
          <Buttons
            bg={(props) => props.theme.colors.secondaryGreen}
            color={(props) => props.theme.colors.white}
            to="check-out"
            onClick={props.closeCheckoutSummary}
          >
            Checkout
          </Buttons>
          <p>
            or
            <ContinueShopping onClick={props.closeCheckoutSummary}>
              Continue Shopping
            </ContinueShopping>
          </p>
        </CheckoutFooter>
      </WhiteOverlay>
    </>
  );
};

export default CheckoutSummary;
