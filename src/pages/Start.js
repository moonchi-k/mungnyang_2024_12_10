import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Ani = keyframes`
0% {
top: 40px;
left: 20px;
}
100% {
top: 340px;
left: 420px;
opacity: 0.1;
}
`;
const Star = styled.div`
  position: absolute;
  top: 40px;
  left: 20px;
  animation-name: ${Ani};
  animation-timing-function: cubic-bezier(0, 0.45, 0.26, 0.95);
  animation-duration: 2s;
  animation-iteration-count: infinite;
  /* animation-delay: 3s; */
`;

const Anim = keyframes`
0% {
  top: 330px;
  left: 50px;
  background-color: purple;
}
100% {}
`;

const Anima = keyframes``;
const StarRd = styled.div`
  position: absolute;
  top: 330px;
  left: 50px;
  /* z-index: -10; */
  animation-name: ${Anim};
  animation-timing-function: cubic-bezier(0, 0.45, 0.26, 0.95);
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;
const StarNd = styled.div`
  position: absolute;
  top: 40px;
  left: 20px;
  animation-name: ${Anima};
  animation-timing-function: cubic-bezier(0, 0.45, 0.26, 0.95);
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const Wrap = styled.div`
  position: relative;
  max-width: 450px;
  height: 100vh;
  background-image: url("/Img/nightImg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  text-align: center;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  a {
    color: white;
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 71px;
    border: 1px solid white;
    border-radius: 80px;
    background-color: #222a5c;
    position: absolute;
    bottom: 20px;
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
  width: 250px;
  height: 250px;
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
      <Star>
        <img src="/Img/star.png" alt="" />
      </Star>
      <StarNd>
        <img src="/Img/star.png" alt="" />
      </StarNd>
      <StarRd>
        <img src="/Img/star.png" alt="" />
      </StarRd>

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
