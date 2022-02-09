import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    min-height:500px;
    background-color: #fff;
    margin:50px auto;
    border-radius:20px;
    padding: 10px;
    display: flex;
    @media screen and (max-width: 1000px){
        flex-direction: column;
    }
  `;