import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../components/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ShareIcon from "@mui/icons-material/Share";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as bookActions } from "../redux/modules/bookMark";

import { ReactIcon } from "../Icons/Icon";
import { ReactComponent as PostError } from "../Icons/PostError.svg";
import { ReactComponent as Share_Disabled } from "../Icons/Share_Disabled.svg";
import { ReactComponent as Share_Active } from "../Icons/Share_Active.svg";
import { ReactComponent as Bookmark_Disabled } from "../Icons/Bookmark_Disabled.svg";
import { ReactComponent as Bookmark_Active } from "../Icons/Bookmark_Active.svg";

import { Text, Grid, Input, Button } from "../elements/index";

const Detail = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const dataId = params.dataId;
  const detail_post = useSelector((state) => state.post.detail_post);

  useEffect(() => {
    dispatch(postActions.getDetailFB(dataId));
  }, []);

  const bookmarkState = () => {
    if (detail_post.bookmarkState === false) {
      dispatch(bookActions.addBookFB(dataId));
    } else {
      dispatch(bookActions.deleteBookFB(dataId));
    }
  };

  // const [modalOpen, setModalOpen] = useState(false);
  // const openModal = () => {
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };
  return (
    <ModalBack>
      <ModalBox>
        <ModalDetail>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <CloseBtn onClick={() => history.goBack()}>
              <CloseIcon
                style={{ fontSize: "40px", float: "right", color: "#666666" }}
              />
            </CloseBtn>
            {/* onClick={openModal} */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "25px",
              }}
            >
              <PolicyDesire
                style={{
                  backgroundColor:
                    `${detail_post.desire}` === "일자리"
                      ? "#7FAAEE"
                      : null || `${detail_post.desire}` === "주거 및 일상생활"
                      ? "#EE5D58"
                      : null || `${detail_post.desire}` === "건강"
                      ? "#6DCDC7"
                      : null || `${detail_post.desire}` === "교육 및 돌봄"
                      ? "#FF98B7"
                      : null || `${detail_post.desire}` === "안전 및 권익보장"
                      ? "#FFA95A"
                      : null || `${detail_post.desire}` === "기타"
                      ? "#A397EF"
                      : null,
                }}
              >
                {detail_post.desire}
              </PolicyDesire>
              <ModalGo onClick={() => dispatch(postActions.addBugFB(dataId))}>
                <PostError />
              </ModalGo>
            </div>
          </div>
          <div style={{ margin: "0px 0 0 45px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginRight: "59px",
              }}
            >
              <PolicyName>{detail_post.name}</PolicyName>
              <div style={{ display: "flex" }}>
                <BookBtn>
                  {detail_post.bookmarkState ? (
                    <Bookmark_Active onClick={bookmarkState} />
                  ) : (
                    <Bookmark_Disabled onClick={bookmarkState} />
                  )}
                </BookBtn>

                <Share_Disabled />
              </div>
            </div>
            <InfoBox>
              <InfoBox1>
                <span>지원대상</span>
                <p>{detail_post.summary}</p>
              </InfoBox1>
              <InfoBox2>
                <span>대상 지역 및 부서</span>
                <p>
                  {detail_post.region === undefined ||
                  detail_post.region.length === 0
                    ? detail_post.institution
                    : detail_post.region}
                </p>
              </InfoBox2>
              <InfoBox3>
                <span>서비스 내용</span>
                <p>{detail_post.support}</p>
              </InfoBox3>
            </InfoBox>
          </div>
          {/* <InfoBox1>서비스 이용 및 신청 방법 : 이미지 추가</InfoBox1> */}

          {/* <Modal open={modalOpen} close={closeModal} /> */}
        </ModalDetail>
        <div>
          {/* <ShareIcon /> */}
          <SubmitBtn
            onClick={() => {
              window.open(detail_post.link);
            }}
          >
            신청하기
          </SubmitBtn>
        </div>
      </ModalBox>
    </ModalBack>
  );
};

export default Detail;

const PolicyDesire = styled.div`
  text-align: center;
  width: max-content;
  max-width: 100px;
  padding: 5px;
  font-size: 12px;
  margin: 5px 0 10px 20px;
  background-color: #6dcdc7;
  border-radius: 5px;
  color: white;
  font-weight: 700;
`;

const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalBox = styled.div`
  position: absolute;
  top: calc(21vh - 100px);
  left: calc(45vw - 200px);
  background-color: #f8faff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  width: 700px;
  height: 800px;
  flex-direction: column;
`;

const ModalDetail = styled.div`
  width: 700px;
  height: 800px;
  margin: 20px 10px 0 0;
`;

const CloseBtn = styled.div`
  margin-right: 10px;
`;

const ModalGo = styled.div`
  cursor: pointer;
  width: 227px;
  height: 24px;
  margin: 0 70px 0 0;
`;

const BookBtn = styled.div``;

const PolicyName = styled.div`
  font-weight: 700;
  font-size: 34px;
  line-height: 49px;
  letter-spacing: 0.0025em;
  width: 445px;
`;

const InfoBox = styled.div`
  overflow: auto;
  height: 394px;
  margin-top: 40px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #217af4; /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
  }
`;

const InfoBox1 = styled.div`
  background-color: white;
  width: 581px;
  font-size: 16px;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 20px;
  gap: 10px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);
  border-radius: 14px;

  span {
    font-weight: 700;
    color: #0361fb;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.0015em;
    margin-top: 10px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.0015em;
  }
`;

const InfoBox2 = styled.div`
  background-color: white;
  margin-top: 30px;
  height: 97px;
  width: 581px;
  font-size: 16px;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 20px;
  gap: 10px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);
  border-radius: 14px;
  span {
    font-weight: 700;
    color: #0361fb;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.0015em;
    margin-top: 10px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.0015em;
  }
`;

const InfoBox3 = styled.div`
  background-color: white;
  margin-top: 30px;
  width: 581px;
  font-size: 16px;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 20px;
  gap: 10px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);
  border-radius: 14px;
  span {
    font-weight: 700;
    color: #0361fb;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.0015em;
    margin-top: 10px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.0015em;
  }
`;

const SubmitBtn = styled.div`
  width: 149px;
  height: 48px;
  cursor: pointer;
  margin-bottom: 60px;
  text-align: center;
  line-height: 48px;
  background: #0361fb;
  border-radius: 5px;
  color: #ffffff;
`;
