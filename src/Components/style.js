import styled from 'styled-components';


const Block = styled.div`
    // border: 1px solid ;
    width: 50%;
    height: 400px;
    margin: 80px auto;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    text-align: center;
`;

Block.Title = styled.div`
    font-size: 32px;
    font-weight: bold;
`;
Block.Main = styled.div`
    height: 50px;
0    >button{
        font-size: 18px;
        padding: 0px 10px;
    }

`;
Block.Input = styled.input`
    width: 40px;
    height: 20px;
`;


export default Block;