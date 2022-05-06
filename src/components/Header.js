import React from "react";
import styled from "styled-components";
import smallLogo from "../imgs/Group 10.png";

import { Text, Grid, Input, Button } from "../elements/index";
import { ReactIcon } from "../Icons/Icon";

import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";

import Cookies from "universal-cookie";
import { apis } from "../shared/axios";
const cookies = new Cookies();

const Header = () => {
  const logOut = () => {
    cookies.remove("userToken", { path: "/" });
    cookies.remove("refreshToken", { path: "/" });
    localStorage.clear();

    history.replace("/");
  };

  const userRemove = () => {
    const userId = localStorage.getItem("userId");
    apis
      .userDelete(userId)
      .then((res) => {
        cookies.remove("userToken", { path: "/" });
        cookies.remove("refreshToken", { path: "/" });
        localStorage.clear();

        history.replace("/");
      })
      .catch((err) => {
        console.log("회원탈퇴 실패", err);
      });
  };

  return (
    <Wrap>
      <Contain>
        <img
          src={smallLogo}
          style={{
            width: "170px",
            height: "44px",
            margin: "18px 0 18px 363px",
          }}
        />
        <div>복세편살</div>
        <Nav>
          <div>
            <ReactIcon.AiOutlineSearch />
            검색
          </div>
          <div>
            <ReactIcon.CgProfile />
            나의 정책
          </div>
          <div onClick={logOut}>
            <ReactIcon.MdLogout />
            로그아웃
          </div>
          <div onClick={userRemove}>X 회원탈퇴</div>
        </Nav>
      </Contain>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: white;
  border-bottom: 1px solid silver;
`;

const Contain = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  right: 0;
  height: 80px;
  height: 50px;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  margin: 28px 363px 29px 0;
  justify-content: center;
  align-items: center;

  div {
    margin: auto 10px;
  }
`;
