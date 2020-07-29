import styled from 'styled-components';
import App from './App'

export const Title = styled.h1`
    font-family: 'Star Jedi', arial;
    text-align: center;
    margin: 0;
    color: #fff;
    padding: 10px 0;
`;
export const Corpo = styled.div`
    height: 100%;
    position: relative;
`;
export const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Barra = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;
export const Botao = styled.button`
    outline: none;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    padding: 10px 20px;
    font-size: 18px;
    color: #fff;
    border: .8px solid #fff;
    background: none;
    border-radius: 60px;
`;

export const Input = styled.input`
    outline: none;
    margin: 10px;
    display: flex;
    padding: 10px 20px;
    border: none;
    color: #fff;
    background: rgba(24, 28, 28, .8);
    border-radius: 20px;
`;
export const Check = styled.button`
    outline: none;
    padding: 10px 15px;
    color: #fff;
    border: .5px solid #fff;
    background: none;
    border-radius: 20px;
`;
export const List = styled.div`
    margin-top: 80px;
    color: #fff;
    display:grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
`;
export const Planets = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    min-height: 300px;
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};
    h3{
        text-align: center;
    }
    ul{
        list-style: none;
    }
    li{
        button{
            margin: 20px;
            outline: none;
            color: #964141;
            background: none;
            border: none;
            font-weight: bold;
            font-size: 16px;
        }
    }
`;
export const Films = styled.div`
    grid-column-start: 3;
    grid-column-end: 3;
    min-height: 300px;
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};
    h3{
        text-align: center;
    }
    ul{
      
        list-style: none;
    }
    li{
        strong{
            color: #964141;
        }
    }
`;
export const Modal = styled.div`

         /* display: none; 
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: auto; 
        background: rgba(0,0,0,.1); 
    div{
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
        width: 200px;
        height: 200px;
        background: #fff;
        padding: 40px 60px;
        border-radius: 20px;
        p{
            color: #000;
            margin-top: 20px
        }
    } */

`;
export const People = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    min-height: 300px;
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};
    h3{
        text-align: center;
    }
    ul{
        list-style: none;
    }
    li{
        strong{
            color: #964141;
        }
    }
`;
export const Message = styled.h2`
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
`;
