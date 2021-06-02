import styled from "styled-components";
export const BoxCard = styled.div`
  margin: 10px 0 10px;
  width: 100%;
  /*border-radius: 10px;*/
  display: flex;
  &:before {
    display: inline-block;
    width: 60px;
    content: " ";
    padding-right: 10px;
    margin-left: -10px;
    /*border-radius: 10px 0 0 10px;*/
  }
`;

export const CharCard = styled.div`
  & {
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 255, 0.2);
    margin: 10px 0 10px;
    width: 100%;
    height: 40%;
    border-radius: 5px;
    display: flex;
  }
  .row {
    width: 100%;
  }
  &:after {
    display: inline-block;
    width: 30px;
    background-color: #120060;
    content: " ";
    /* padding-left: 10px;*/
    /*margin-right: -10px;*/
    border-radius: 0 5px 5px 0;
  }
  @media only screen and (max-width: 750px) {
    &:after {
      display: none;
      width: 0;

      content: "";
    }
    .row {
      justify-content: center;
      text-align: center;
    }
  }
`;

export const SqrCard = styled.div`
  box-shadow: 3px 3px 10px 2px rgba(0, 0, 255, 0.2);
  margin: 50px 0 50px;
  border-radius: 0px;
  width: 100%;
  display: flex;
  padding: 5px 5px 5px 40px;
`;

export const CmHeader = styled.h1`
  margin-top: 6rem;
  font-weight: bold;
`;
