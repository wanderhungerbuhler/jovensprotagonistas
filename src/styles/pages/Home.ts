import styled, { keyframes } from 'styled-components';

export const animationTitle = keyframes`
  0%, 55% { filter: brightness(0) invert(1); }
  11%, 33% { filter: none; }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    
    li { 
      list-style: none;
      margin: 0 10px;
      
      a {
        text-decoration: none;
        color: #fff;
        transition: color .3s;
        letter-spacing: -1px;
        font-size: .8rem;
        font-weight: 400;
        text-transform: uppercase;

        &:hover { 
          color: #9464F0;
        }
      }
    }
  }
`;

export const Slider = styled.div`
  margin-top: 70px;
  
  h1 {
    font-size: 5rem;
    text-transform: uppercase;
    letter-spacing: -3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 900;
    line-height: 70px;
    background-size: cover;

    &::before {
      content: "";
      width: 70%;
      height: 30px;
      margin-bottom: 20px;
      display: block;
      background: url("/images/line-separator-title-slide.svg") no-repeat;
      background-size: 70%;
    }

    &::after {
      content: "";
      width: 100%;
      height: 370px;
      display: block;
      background: url("/images/three-line-separator.svg") no-repeat center center;
      background-size: 53.70%;
    }

    span {
      filter: brightness(0) invert(1);

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      animation: ${animationTitle} 10s ease-in-out infinite;
    }

    span:nth-child(1) {
      background: -webkit-linear-gradient(60deg, #111111, #ebd32a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    span:nth-child(2) {
      background: -webkit-linear-gradient(60deg, #111111, #9464F0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation-delay: 3.33s;
    }

    span:nth-child(3) {
      background: -webkit-linear-gradient(60deg, #111111, #e62222);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation-delay: 6.66s;
    }

  }
`;

export const Content = styled.div`
  section {
    width: 780px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 200px;

    article {
      text-align: center;

      &::before {
        width: 35px;
        height: 35px;
        background: #322153;
        color: #F0F0F5;
        font-weight: bold;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
      }
      
      span { 
        font-weight: 900;
        font-size: 3rem;
        letter-spacing: -3px;
        color: #F0F0F5;
        text-transform: uppercase;
      }

      p { font-size: .8em; color: #F0F0F5; }
    }

    article:nth-child(1) {
      &::before { content: "1"; }
    }

    article:nth-child(2) {
      &::before { content: "2"; }
    }

    article:nth-child(3) {
      &::before { content: "3"; }
    }
  }
`;

export const QuemSomos = styled.div`
  width: 70%;
  margin: 0 auto;
  
  h1 { 
    font-size: 3rem;
    letter-spacing: -5px;
    background: -webkit-linear-gradient(60deg, #111111 7%, #9464F0 93%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
  
    &::after {
      content: "";
      width: 70%;
      height: 10px;
      display: block;
      background: url("/images/line-separator-title.svg") no-repeat;
      background-size: 50%;
    }
  }

  p { text-align:center; margin-top: 15px; color: #F0F0F5; }
`;

export const Comunidade = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 150px;
  margin-bottom: 70px;

  h1 { 
    font-size: 3rem;
    letter-spacing: -5px;
    background: -webkit-linear-gradient(60deg, #111111 7%, #9464F0 93%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 

    &::after {
      content: "";
      width: 70%;
      height: 10px;
      display: block;
      background: url("/images/line-separator-title.svg") no-repeat;
      background-size: 100%;
    }
  }

  p { margin-top: 15px; color: #F0F0F5; margin-bottom: 20px; }
  a { border-radius: 50px; background: #322153; color: #F0F0F5;
    font-weight: 600; padding: 7px 20px; text-decoration: none; }
`;