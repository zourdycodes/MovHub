import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  background-color: #39445a;
  font-family: "Montserrat", sans-serif;
  font-size: 5vw;
  padding-bottom: 15px;
  box-shadow: 0px 1px 5px black;
  color: white;
  z-index: 100;
  align-items: center;
  font-weight: 700;
  padding-top: 10px;

  @media (max-width: 1000px) {
    padding-top: 15px;
    font-size: 6.4vw;
  }
`;
