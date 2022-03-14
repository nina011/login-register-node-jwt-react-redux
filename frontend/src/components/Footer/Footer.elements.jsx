import styled from 'styled-components'

export const FooterContainer = styled.footer`

    height: calc(100vh - 270px);
   
    background-color: #1F2937;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin-bottom:auto;
`

export const Paragraph  = styled.p`
    margin: 0;
    color: ${(props) => props.color ? props.color: '#F1F5F9' };
    padding: .5rem 0;
    
`