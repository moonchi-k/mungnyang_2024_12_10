import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 450px;
  height: 100vh;
  background-image: url("/Img/starImg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 50px;
  margin: 0 auto;
  /* display: flex;
  justify-content: center;
  flex-direction: ; */
`;

const Logo = styled.div`
  color: white;
  font-size: 22px;
  margin: 0 auto;
  width: 74px;
`;

const Con = styled.div`
  /* margin: 0 auto; */
  width: 260px;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  left: 50%;

  a {
    text-decoration: none;
  }
`;
const DogBtn = styled.div`
  color: white;
  font-size: 30px;
  padding: 20px;
  width: 260px;
  border-radius: 80px;
  text-align: center;
  border: 2px solid white;
  background-color: #222a5c;
  margin-bottom: 20px;
`;
const CatBtn = styled.div`
  color: white;
  font-size: 30px;
  padding: 20px;
  width: 260px;
  border-radius: 80px;
  text-align: center;
  border: 2px solid white;
  background-color: #222a5c;
`;

const Version = () => {
  return (
    <Wrap>
      <Logo>멍냥궁합</Logo>
      <Con>
        <Link to="/dog">
          <DogBtn>강아지 ver</DogBtn>
        </Link>
        <Link to="/cat">
          <CatBtn>고양이 ver</CatBtn>
        </Link>
      </Con>
    </Wrap>
  );
};

export default Version;
