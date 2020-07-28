import styled from 'styled-components';

export const Title = styled.h1`
    background: #;
    text-align: center;
    margin: 0;
    color: #fff;
    padding: 10px 0;
`;
export const Corpo = styled.div`
    
    height: 100%;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
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
    background: rgba(8, 21, 23, .8);
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
export const List = styled.ul`
    list-style: none;
    margin-top: 40px;
`;
export const Txt = styled.li`
    display: flex;
    justify-content:center; 
    align-items: center;
    font-size: 16px;
    color: #fff;
    p{
        margin-left: 20px;
        font-weight: bold;
    }
`;