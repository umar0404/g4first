import styled from 'styled-components';


const Container = styled.div `
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    width: 1275px;
    height: 827px;
    border: 2px solid red;
    margin-left: 60px;
    margin-top: 40px;
    background:  #F0F1F6;
    .firstpage{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .firstpage>a{
        text-decoration: none;
        margin-top: 15px;
    }

    .firstpage>h1{
        margin-left: 144px;
        margin-top: 8px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        color: #1A1A1A;
    }


    .firstpage>div{
        display: flex;
        justify-content: space-between;
        margin-right: 123px;
    }
    .button_1{
        background: #066F14;
        width: 81px;
        height: 42px;
        border-radius: 4px;
        border: none;
        margin-top: 7px;
    }

    @media screen and (max-width: 600px) {
        padding: 20px 20px;
    }

    .growing{
        /* display: flex; */
        margin-left: 144px;
        margin-top: 50px;
        font-family: 'Nunito';
        font-weight: 700;
        font-style: normal;
        /* line-height: 92px; */
        /* font-size: 72px; */
    }

    .growing p {
        margin:24px 0 40px 0 ;
    }
`;


export { Container }