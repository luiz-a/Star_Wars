import styled from 'styled-components';

export const Title = styled.h1`
    font-family: 'Star Jedi', arial;
    text-align: center;
    margin: 0;
    color: #fff;
`;
export const Search = styled.div`
    box-sizing:border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Barra = styled.div`
    box-sizing:border-box;
    display:flex;
    justify-content: center;
    align-items: center;
`;
export const Botao = styled.button`
    outline: none;
    display:flex;
    justify-content: center;
    align-items: center;  
    margin: 40px ;
    padding: 10px 60px;
    font-size: 18px;
    color: #fff;
    border: .8px solid rgba(245, 245, 245, .4);
    background: none;
    border-radius: 60px;
    box-shadow: ${({ isVisible }) => isVisible ? '0px 0px 30px #3f698f' : ''};
`;

export const Input = styled.input`
    outline: none;
    margin: 10px;
    display: flex;
    padding: 10px 20px;
    background: none;
    color: #fff;
    border: .6px solid rgba(214, 214, 214, .6);
    border-radius: 20px;
`;
export const Check = styled.button`
    outline: none;
    padding: 5px 15px;
    color: #c3c3c3;
    border: .4px solid #c3c3c3;
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
        strong{
            color: #708499;
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
            color: #709978;
            font-weight: bold;
            font-size: 16px;
        }
    }
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
            color: #997070;
            font-weight: bold;
            font-size: 16px;
        }
    }
`;
export const Message = styled.h2`
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
`;
