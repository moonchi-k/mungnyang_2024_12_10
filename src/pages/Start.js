import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 450px;
  height: 100vh;
  background-image: url("/Img/nightImg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  text-align: center;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  a {
    color: white;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 264px;
    height: 81px;
    border: 1px solid white;
    border-radius: 80px;
    background-color: #222a5c;
    position: absolute;
    bottom: 120px;
    text-decoration: none;
  }
`;

const Con = styled.div`
  color: white;
  margin-top: 150px;
`;

const Title = styled.div`
  font-size: 48px;
  color: white;
  margin-bottom: 10px;
`;

const SubTitle = styled.div``;
const Img = styled.div`
  width: 310px;
  height: 310px;
  background-image: url("/Img/zodiac.png");
  background-position: center;
  background-size: contain;
  border-radius: 130px;
  margin-top: 40px;
`;

const Btn = styled.div``;

const Start = () => {
  return (
    <Wrap>
      <Con>
        <Title>멍냥궁합</Title>
        <SubTitle>우리집 댕냥이와 나의 궁합은?</SubTitle>
        <Img></Img>
      </Con>
      <Link to="/version">
        <Btn> 보러가기!</Btn>
      </Link>
    </Wrap>
  );
};

export default Start;
