/* eslint-disable jsx-a11y/alt-text */
//import logo from './logo.svg';
import logo from './instagram.png';
import fontLogo from './Instagram_logo2.png';
import facebookLogo from './facebook_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="article_loginMenu">
        <div className="article_loginImage">
          <img src={logo} lat="logo"></img>
        </div>
        <div className="article_login">
          <img className="img_loginFont" src={fontLogo} lat="fontLogo" ></img>
          <div className="article_loginDetail">
            <form>
              <table>
                <tr>
                  <td><input type="text" placeholder='전화번호, 사용자 이름 또는 이메일'/></td>
                </tr>
                <tr>
                  <td><input type="text" placeholder='비밀번호' /></td>
                </tr>
                <tr>
                  <td><button>로그인</button></td>
                </tr>
                <tr>
                  <td>-----또는----</td>
                </tr>
                <tr>
                  <td><img className="facebook_logo" src={facebookLogo} lat="facebook" ></img><span>Facebook으로 로그인</span></td>
                </tr>

              </table>
            </form>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
