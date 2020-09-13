import React, { Fragment } from "react";
import KakaoLogin from "react-kakao-login";

import '../Login.css'

function KaKao() {
  const onSuccess = (values: any) => {
    console.log(values);
  };
  const onFailure = (values: any) => {
    console.log(values);
  };

  return (
    <Fragment>
      <KakaoLogin
        className="kakao-login"
        jsKey="2c13855b10e968a2ef9229e77aeb65e4"
        onSuccess={onSuccess}
        onFailure={onFailure}
        getProfile={true}
        buttonText=""
      >
        <img src='/assets/kakao_login_medium_wide.png' alt="kakaoLogin"/>
      </KakaoLogin>
    </Fragment>
  );
}

export default KaKao;
