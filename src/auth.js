import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';

const LOGIN_SUCCESS_PAGE = "/secret";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
   auth0 = new auth0.WebAuth({
      domain: 'divyanshu.auth0.com',
      clientID: 'TJyKPI6aRiRwgr6SxlT7ExW10NEHW4Vy',
      redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://appbaseio-apps.github.io/reactivesearch-auth0-example/callback',
      audience: 'https://divyanshu.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid profile'
   });

   login = () => {
      this.auth0.authorize();
   }

   hendleAuthentication = () => {
      this.auth0.parseHash((error, authResults) => {
         if (authResults && authResults.accessToken && authResults.idToken) {
            let expiresAt = JSON.stringify((authResults.expiresIn)* 1000 + new Date().getTime());
            localStorage.setItem("access_token", authResults.accessToken);
            localStorage.setItem("id_token", authResults.idToken);
            localStorage.setItem("expires_at", expiresAt);
            localStorage.hash = "";
            // eslint-disable-next-line no-restricted-globals
            location.pathname = LOGIN_SUCCESS_PAGE;
         } else if (error) {
            // eslint-disable-next-line no-restricted-globals
            location.pathname = LOGIN_FAILURE_PAGE;
         }
      })
   }

   isAutenticated = () => {
      let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
      return new Date().getTime() < expiresAt;
   }

   logout = () => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
      // eslint-disable-next-line no-restricted-globals
      location.pathname = LOGIN_FAILURE_PAGE;
   }

   getProfile = () => {
      if (localStorage.getItem("id_token")) {
         return jwtDecode(localStorage.getItem("id_token"));
      }else {
         return {};
      }
   }
}