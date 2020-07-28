import styled from 'styled-components';

export const Title = styled.h1`
    font-family: 'Star Jedi', arial;
    background: url('https://i.pinimg.com/564x/e0/88/36/e08836bb37900ea1b8ddc756febae6e5.jpg');
    text-align: center;
    margin: 0;
    color: #fff;
    padding: 10px 0;
`;
export const Corpo = styled.div`
    height: 100%;
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
export const Films = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    min-height: 300px;
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
export const People = styled.div`
    grid-column-start: 3;
    grid-column-end: 3;
    min-height: 300px;
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