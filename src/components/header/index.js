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
            // color: "orange",
          }}
        />{" "}
        Mov{" "}
        <span
          style={{
            backgroundColor: "orange",
            borderRadius: "5px",
            marginLeft: "10px",
            color: "black",
            padding: "0 10px",
          }}
        >
          Hub
        </span>{" "}
        <HiOutlineFilm
          style={{
            marginLeft: "12px",
          }}
        />
      </Container>
    </>
  );
};
