import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    /* height: 500px; */
    background-color: #EF4444;

    display:flex;
    flex-direction: column;   
`;

export const Title = styled.h1`
    color: #F1F5F9;
    text-align:center;
    margin-top:4rem;
    margin-bottom:1.5rem;
    
`
export const SubTitle = styled.h2`
    color: ${(props) => props.color};
    text-align:center;
    margin-bottom: 2rem ;
`

export const OptionsContainer = styled.div`
    width: 300px;
    display: flex;
    margin: 0 auto;
    margin-bottom: 1.8rem;
    justify-content: space-around;    
`

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    font-weight: 600;
    width: ${(props)=> props.width ? props.width: null};
    &:hover{
        transform: scale(0.98);
        opacity: 0.9;

    }
`;

export const BtnBack = styled.button`

    position: absolute;
    top:1rem;
    right:8rem;
    display:flex;
    align-items:center;
    padding: 8px 12px;
    background-color: #F1F5F9;
    color: #262626;
    font-weight: 600;
    border: none;
    border-radius:5px;
    cursor:pointer;
   
    &:hover{
        opacity: 0.9;
    }

     @media (max-width: 1235px){
    top:1rem;
    right:3rem;
    }
/*
    @media (max-width: 432px){
    top:1rem;
    right:1rem;
    } */
`