import styled from "styled-components";
import emptyLike from "../../../assets/empty-heart.svg";
import fullLike from "../../../assets/red-heart.svg";
import hoverLike from "../../../assets/grey-heart.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(135, 135, 135, 0.2);
  padding: 16px 0;
  margin-right: 16px;
`;

export const HotelName = styled.p`
  font-weight: 300;
  font-size: 17px;
  line-height: 22px;
  margin: 0;
`;

export const Date = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.theme.greyColor};
`;

export const LikeButton = styled.button`
  border: none;
  width: 21px;
  height: 18px;
  background-image: url(${emptyLike});
  background-size: cover;
  cursor: pointer;
  margin-bottom: 22px;

  &:hover {
    background-image: url(${hoverLike});
  }

  &:active {
    background-image: url(${fullLike});
  }
`;

export const Description = styled.span`
  display: inline-block;
  font-weight: 300;
  font-size: 11px;
  line-height: 22px;
  color: ${(props) => props.theme.greyColor};
  margin-right: 15px;
`;

export const Price = styled.span`
  display: inline-block;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
`;

export const Star = styled.img`
  width: 17px;
  height: 17px;

  &:not(:last-child) {
    margin-right: 3px;
  }
`;