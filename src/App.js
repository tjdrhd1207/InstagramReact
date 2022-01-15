/* eslint-disable jsx-a11y/alt-text */
//import logo from './logo.svg';
import logo from './instagram.png';
import fontLogo from './Instagram_logo2.png';
import facebookLogo from './facebook_logo.png';
import Customer from './components/Customer';
import './App.css';
import React from 'react';
import { Component } from 'react/cjs/react.production.min';

/*
function App() {
  return (
    //<Customer/>
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
*/

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '김재민',
    'birthday' : '931207',
    'gender' : '남자',
    'job' : '개발자'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '유재석',
    'birthday' : '701210',
    'gender' : '남자',
    'job' : '방송인'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '강호동',
    'birthday' : '650513',
    'gender' : '남자',
    'job' : '방송인'
  }

]


class App extends Component{
  render(){
    return(
      <div>
        {
          customers.map( c =>{
            return (<Customer
              key={c.id}
              id={c.id}
              image={c.image}
              birthday={c.name}
              gender={c.gender}
              job={c.job}
            />);
          })
        }
      </div>  
    );
  }
}



export default App;
