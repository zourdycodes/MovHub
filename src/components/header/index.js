import { FaVideo } from "react-icons/fa";
import { HiOutlineFilm } from "react-icons/hi";
import { Container } from "./styles/Header";

export const Header = () => {
  return (
    <>
      <Container>
        <FaVideo
          style={{
            marginRight: "12px",
          }}
        />{" "}
        The Movies Hub{" "}
        <HiOutlineFilm
          style={{
            marginLeft: "12px",
          }}
        />
      </Container>
    </>
  );
};
