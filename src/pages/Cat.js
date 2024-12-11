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
`;

const Title = styled.div`
  color: white;
  font-size: 22px;
`;

const Logo = styled.div`
  color: white;
  margin-bottom: 50px;
  font-size: 22px;
`;
const Conwrap = styled.div``;
const Con = styled.div``;
const ZodiacList = styled.div``;
const zodiac = [
  {
    id: "0",
    url: "`${process.env.PUBLIC_URL}/Imgs/aquarius.png`}",
    title: "물병자리",
    date: "1.20~2.18",
  },
  {
    id: "1",
    url: "`${process.env.PUBLIC_URL}/Imgs/pisces.png`}",
    title: "물고기자리",
    date: "1.20~2.18",
  },
  {
    id: "2",
    url: "`${process.env.PUBLIC_URL}/Imgs/aries.png`}",
    title: "양자리",
    date: "3.21~4.19",
  },
  {
    id: "3",
    url: "`${process.env.PUBLIC_URL}/Imgs/taurus.png`}",
    title: "황소자리",
    date: "4.20~5.20",
  },
  {
    id: "4",
    url: "`${process.env.PUBLIC_URL}/Imgs/gemini.png`}",
    title: "쌍둥이자리",
    date: "5.21~6.21",
  },
  {
    id: "5",
    url: "`${process.env.PUBLIC_URL}/Imgs/cancer.png`}",
    title: "게자리",
    date: "6.22~7.22",
  },
  {
    id: "6",
    url: "`${process.env.PUBLIC_URL}/Imgs/leo.png`}",
    title: "사자자리",
    date: "7.23~8.22",
  },
  {
    id: "7",
    url: "`${process.env.PUBLIC_URL}/Imgs/virgo.png`}",
    title: "처녀자리",
    date: "8.23~9.23",
  },
  {
    id: "8",
    url: "`${process.env.PUBLIC_URL}/Imgs/libra.png`}",
    title: "천칭자리",
    date: "9.24~10.22",
  },
  {
    id: "9",
    url: "`${process.env.PUBLIC_URL}/Imgs/scorpio.png`}",
    title: "전갈자리",
    date: "10.23~11.22",
  },
  {
    id: "10",
    url: "`${process.env.PUBLIC_URL}/Imgs/sagitarius.png`}",
    title: "사수자리",
    date: "11.23~12.24",
  },
  {
    id: "11",
    url: "`${process.env.PUBLIC_URL}/Imgs/aries.png`}",
    title: "염소자리",
    date: "12.25~1.19",
  },
];

const Cat = () => {
  return (
    <Wrap>
      <Logo>멍냥궁합</Logo>
      <Conwrap>
        <Con>
          <Title>별자리를 선택해주세요!</Title>
          <ZodiacList></ZodiacList>
        </Con>
      </Conwrap>
    </Wrap>
  );
};

export default Cat;
