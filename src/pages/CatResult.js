import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { CatDesc } from "../components/CatDesc";

const Wrap = styled.div`
  max-width: 450px;
  height: 100vh;
  background-image: url("/Img/resultBg (1).png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 50px;
  display: flex;
  text-align: center;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: scroll;
`;

const Logo = styled.div`
  color: white;
  margin-bottom: 58px;
  font-size: 22px;
`;
const Con = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  position: relative;
  height: 100%;
`;
const Img = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 20%;
  margin-bottom: 30px;
  img {
    display: block;
    width: 125px;
    height: 125px;
  }
`;
const Desc = styled.div`
  width: 100%;
  opacity: 0.8;
  margin-bottom: 100px;
  height: 30%;
  line-height: 34px;
  font-size: 20px;
  font-family: "BMHANNAPro";
`;
const Detail = styled.div`
  font-family: "BMHANNAPro";
  height: 30%;
  opacity: 0.8;

  display: flex;
  width: 95%;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 30px;
`;
const Tip = styled.div`
  width: 45%;
  line-height: 20px;
  /* opacity: 0.9; */

  div {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
const Rec = styled.div`
  width: 45%;
  line-height: 20px;
  /* opacity: 0.9; */

  div {
    opacity: 1;
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

const Btn = styled.div`
  img {
    margin-right: 5px;
    display: block;
  }
  display: flex;

  width: 90%;
  line-height: 20px;
  color: white;
  margin-bottom: 100px;
  letter-spacing: 2px;
  justify-content: space-between;

  a {
    width: 49%;
    height: 60px;
    border: 3px solid #1b154d;
    border-radius: 100px;
    display: flex;
    text-align: center;
    background-color: #9580e8;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    margin-bottom: 50px;
    &:hover {
      background-color: #7c60ee;
    }
  }

  .pre {
    color: white;
    background-color: rgba(168, 174, 208, 0.5);
    img {
      display: block;
      width: 16px;
      height: 16px;
    }
    &:hover {
      background-color: rgba(168, 174, 208, 0.8);
    }
  }
`;
const Retry = styled.div`
  display: flex;
`;
const Pre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CatResult = () => {
  const location = useLocation();
  const { keeperId, catsId, keeperImage, catsImage } = location.state || {};

  const desc = CatDesc.find(
    (item) => item.keeperId === keeperId && item.catsId === catsId
  );

  return (
    <>
      {desc ? (
        <>
          <Wrap>
            <Logo>멍냥궁합</Logo>
            <Con>
              <Img>
                <img src={keeperImage} alt="" />
                <img src={catsImage} alt="" />
              </Img>
              <Desc>{desc.description}</Desc>
              <Detail>
                <Tip>
                  <div>💡 맞춤형 팁 </div>
                  {desc.tip}
                </Tip>
                <Rec>
                  <div>✅ 추천 활동 </div>
                  {desc.recommendedActivity}
                </Rec>
              </Detail>
              <Btn>
                <Link to="/cat" className="pre">
                  <Pre>
                    <img src="/Img/arrow.png" alt="" />
                    이전으로
                  </Pre>
                </Link>
                <Link to="/version">
                  <Retry>
                    <img src="/Img/retry.png" alt="" />
                    다시하기
                  </Retry>
                </Link>
              </Btn>
            </Con>
          </Wrap>
        </>
      ) : (
        <div>궁합정보가없습니다</div>
      )}
    </>
  );
};

export default CatResult;
