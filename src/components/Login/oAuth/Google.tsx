import React, { Fragment } from 'react';
import { GoogleLogin, GoogleLoginInfo } from 'react-google-login-component';

function Google () {
  const responseGoogle = (googleUser: GoogleLoginInfo) => {
    console.log(googleUser.getAuthResponse());
    console.log(googleUser);
  };
  return (
    <Fragment>
      <GoogleLogin
        socialId="333469968750-3g0ch7cdil7aoepagqv2lrlu9kvonl9t.apps.googleusercontent.com"
        className="google-login"
        scope="profile"
        fetchBasicProfile={false}
        responseHandler={responseGoogle}
        buttonText="Login with Google"
      >
        {/* <img src='/assets/btn_google_signin_light_normal_web@2x.png' alt="googleLogin"/> */}
        <img className="google-login-icon" src='/assets/g-logo.png' alt="googleLogin"/>
      </GoogleLogin>
    </Fragment>
  )
}

export default Google;