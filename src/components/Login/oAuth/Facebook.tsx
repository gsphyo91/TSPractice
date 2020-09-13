import React, { Fragment } from "react";
import FacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login";

function Facebook() {
  const responseFacebook = (values: ReactFacebookLoginInfo) => {
    console.log(values);
  };
  return (
    <Fragment>
      <FacebookLogin
        cssClass="facebook-login"
        appId="520447728887956"
        autoLoad={false}
        fields="name, first_name, last_name, email"
        callback={responseFacebook}
        icon={
          <img
            className="facebook-login-icon"
            src="/assets/f_logo_RGB-White_58.png"
            alt="facebookLogin"
          />
        }
      />
    </Fragment>
  );
}

export default Facebook;
