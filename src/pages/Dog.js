import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 450px;
  height: 100vh;
  background-image: url("/Img/starImg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 50px;
  margin: 0 auto;
  text-align: center;
  overflow: scroll;
`;

const Title = styled.div`
  color: white;
  font-size: 22px;
`;

const Logo = styled.div`
  color: white;
  margin-bottom: 30px;
  font-size: 22px;
`;
const Conwrap = styled.div``;
const Con = styled.div``;
const ZodiacList = styled.div`
  color: white;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  img {
    width: 110px;
    height: 110px;
    margin-top: 10px;
  }
`;
const Selected = styled.div`
  color: white;
  display: flex;
  width: 80%;
  height: 150px;
  justify-content: space-around;
  background-color: rgba(168, 174, 208, 0.5);
  border-radius: 20px;
  padding: 20px;
  margin: 0 auto;
  font-size: 22px;
  margin-top: 100px;
  margin-bottom: 70px;
  h4 {
    margin-bottom: 5px;
  }
  img {
    display: block;
    width: 80px;
    height: 80px;
  }
`;
const Keeper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Cats = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ZodiacItem = styled.div`
  img {
    display: block;
    width: 110px;
    height: 110px;
    margin-bottom: 15px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Result = styled.div`
  width: 180px;
  padding: 15px 5px;
  font-size: 18px;
  border: 1px solid white;
  border-radius: 200px;
  color: white;
  background-color: #222a5c;
  margin: 0 auto;
  margin-bottom: 50px;
`;
const zodiac = [
  {
    id: "0",
    url: "/Img/aquarius.png",
    title: "물병자리",
    date: "1.20~2.18",
  },
  {
    id: "1",
    url: "/Img/pisces.png",
    title: "물고기자리",
    date: "1.20~2.18",
  },
  {
    id: "2",
    url: "/Img/aries.png",
    title: "양자리",
    date: "3.21~4.19",
  },
  {
    id: "3",
    url: "/Img/taurus.png",
    title: "황소자리",
    date: "4.20~5.20",
  },
  {
    id: "4",
    url: "/Img/gemini.png",
    title: "쌍둥이자리",
    date: "5.21~6.21",
  },
  {
    id: "5",
    url: "/Img/cancer.png",
    title: "게자리",
    date: "6.22~7.22",
  },
  {
    id: "6",
    url: "/Img/leo.png",
    title: "사자자리",
    date: "7.23~8.22",
  },
  {
    id: "7",
    url: "/Img/virgo.png",
    title: "처녀자리",
    date: "8.23~9.23",
  },
  {
    id: "8",
    url: "/Img/libra.png",
    title: "천칭자리",
    date: "9.24~10.22",
  },
  {
    id: "9",
    url: "/Img/scorpio.png",
    title: "전갈자리",
    date: "10.23~11.22",
  },
  {
    id: "10",
    url: "/Img/sagitarius.png",
    title: "사수자리",
    date: "11.23~12.24",
  },
  {
    id: "11",
    url: "/Img/aries.png",
    title: "염소자리",
    date: "12.25~1.19",
  },
];

const Dog = () => {
  const [keeperId, setKeeperId] = useState(null);
  const [dogsId, setDogsId] = useState(null);
  const [keeperImage, setKeeperImage] = useState(null);
  const [dogsImage, setDogsImage] = useState(null);
  //   const [clickCount, setClickCount] = useState(0);
  //   const [visibleKeeper, setVisibleKeeper] = useState(false);
  //   const [visibleDogs, setVisibleDogs] = useState(false);
  const [isKeeperSelected, setIsKeeperSelected] = useState(false);
  const [isDogsSelected, setIsDogsSelected] = useState(false);
  const navigate = useNavigate();

  const handleClick = (id, url) => {
    if (!isKeeperSelected) {
      setKeeperId(id);
      setKeeperImage(url);
      setIsKeeperSelected(true);
    } else if (!isDogsSelected) {
      setDogsId(id);
      setDogsImage(url);
      setIsDogsSelected(true);
    }
  };
  console.log(keeperId);
  console.log(dogsId);

  //   const handleClick = (id, url) => {
  //     setClickCount((prevCount) => prevCount + 1);
  //     if (clickCount % 2 === 0) {
  //       setKeeperImage(url);
  //       setVisibleKeeper(true);
  //       setKeeperId(id);
  //       console.log(keeperImage);
  //     } else {
  //       setDogsImage(url);
  //       setVisibleDogs(true);
  //       setDogsId(id);
  //       console.log(dogsImage);
  //     }
  //   };

  const goToResult = () => {
    navigate("/dogresult", {
      state: { keeperId, dogsId, keeperImage, dogsImage },
    });
  };

  return (
    <Wrap>
      <Logo>멍냥궁합</Logo>
      <Conwrap>
        <Title>별자리를 선택해주세요!</Title>
        <ZodiacList>
          {zodiac.map((list) => (
            <ZodiacItem
              key={list.id}
              onClick={() => handleClick(list.id, list.url)}
            >
              <img src={list.url} alt={list.title} />
              <h4>{list.title}</h4>
              <h5>{list.date}</h5>
            </ZodiacItem>
          ))}
        </ZodiacList>
        <Selected>
          <Keeper>
            <h4>집사 별자리</h4>
            <img
              src={keeperImage || ""}
              alt=""
              style={{ display: isKeeperSelected ? "block" : "none" }}
            />
          </Keeper>
          <Cats>
            <h4>강아지 별자리</h4>
            <img
              src={dogsImage || ""}
              alt=""
              style={{ display: isDogsSelected ? "block" : "none" }}
            />
          </Cats>
        </Selected>

        <Result onClick={goToResult}>결과보기!</Result>
      </Conwrap>
    </Wrap>
  );
};

export default Dog;
