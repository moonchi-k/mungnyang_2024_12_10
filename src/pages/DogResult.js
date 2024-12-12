import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 450px;
  height: 100vh;
  background-image: url("/Img/nightImg.png");
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
`;

const Logo = styled.div`
  color: white;
  margin-bottom: 100px;
  font-size: 22px;
`;
const Con = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  img {
    display: block;
    width: 125px;
    height: 125px;
  }
`;
const Desc = styled.div`
  width: 100%;
`;
const Detail = styled.div``;
const Tip = styled.div``;
const Rec = styled.div``;

const DogResult = () => {
  const location = useLocation();
  const { keeperId, dogsId, keeperImage, dogsImage } = location.state || {};

  const relationshipDescriptions = [
    {
      keeperId: 2, // 양자리 집사
      dogsId: 2, // 양자리 강아지
      description:
        "양자리 집사와 양자리 강아지는 매우 잘 맞습니다. 둘 다 활발하고 에너지가 넘치며, 서로 잘 맞는 성격을 가지고 있습니다. 함께 뛰어놀고 모험을 즐기는 관계입니다.",
      tip: "서로의 에너지를 잘 맞추고, 함께 활동적인 시간을 보내세요.",
      recommendedActivity: "달리기, 산책, 야외 모험",
    },
    {
      keeperId: 3, // 황소자리 집사
      dogsId: 4, // 쌍둥이자리 강아지
      description:
        "황소자리 집사는 안정적이고 신중한 성격을 가진 집사로, 쌍둥이자리 강아지와 성격 차이가 있을 수 있습니다. 황소자리 집사는 일관된 환경을 선호하지만, 쌍둥이자리 강아지는 변화를 좋아합니다.",
      tip: "서로의 성격 차이를 이해하고 조화를 이루기 위한 배려가 필요합니다.",
      recommendedActivity:
        "규칙적인 산책, 간단한 훈련, 변화가 적은 환경에서의 활동",
    },
    {
      keeperId: 4, // 쌍둥이자리 집사
      dogsId: 4, // 쌍둥이자리 강아지
      description:
        "쌍둥이자리 집사와 쌍둥이자리 강아지는 매우 잘 맞습니다. 둘은 모두 활발하고 지적인 성향을 가지고 있으며, 새로운 자극을 즐깁니다. 다양한 활동을 함께 할 수 있습니다.",
      tip: "서로의 변화를 즐기고, 지적 자극을 제공하는 활동을 함께 하세요.",
      recommendedActivity: "퍼즐 놀이, 실내 외 탐험, 창의적인 활동",
    },
    // 다른 궁합 항목들도 추가 가능
  ];

  // 궁합 설명을 찾는 함수
  function getRelationshipDescription({ keeperId, dogsId }) {
    if (keeperId === 0 && dogsId === 0) {
      return (
        <div>
          <h2>
            {keeperId} 집사와 {dogsId} 강아지의 궁합
          </h2>
          <p>{relationshipDescriptions.description}</p>
          <p>
            <strong>팁:</strong> {relationshipDescriptions.tip}
          </p>
          <p>
            <strong>추천 활동:</strong>{" "}
            {relationshipDescriptions.recommendedActivity}
          </p>
        </div>
      );
    } else {
      return <p>해당 궁합 정보를 찾을 수 없습니다.</p>;
    }
  }
  console.log(keeperId);
  return (
    <Wrap>
      <Logo>멍냥궁합</Logo>
      <Con>
        <Img>
          <img src={keeperImage} alt="" />
          <img src={dogsImage} alt="" />
        </Img>
        <Desc>{getRelationshipDescription(keeperId, dogsId)}</Desc>
        <Detail>
          <Tip></Tip>
          <Rec></Rec>
        </Detail>
      </Con>
    </Wrap>
  );
};

export default DogResult;
