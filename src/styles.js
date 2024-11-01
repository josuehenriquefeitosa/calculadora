import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cacaca;

    //border: 2px solid red;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 50%;
    //min-height: 350px;
    background-color: #fff;
    //border: 1px solid purple;
`
    
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;


`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


`