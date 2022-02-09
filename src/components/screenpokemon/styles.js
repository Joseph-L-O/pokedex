import styled from "styled-components"

export const DivContainer = styled.div`
    max-width: 50%;
    min-width:50%;
    margin: 20px auto;
    background-color: #C9BB3F;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
    border: 8px solid #978C2F;
    @media screen and (max-width: 1000px){
        max-width:100%;
        margin: 20px 0;
    }
`;

export const InfoComponent = styled.div`
    background-color: #FFEA7D;
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    label {
        color: #978C2F;
    }
    `;
export const PokeData = styled.div`
    background-color: #978C2F;
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #978C2F;
    label {
        color: #464114;
    }
`;
export const PokeDataNImg = styled.div`
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    gap: 10px;
    @media screen and (max-width: 1000px){
        flex-direction: column;
    }
`;
export const Img = styled.img`
    width: 100%;
    height: auto;
    max-width: 50%;
`;
export const PokeDataTable = styled.div`
    width: 100%;
    background-color:  #978C2F;
    color: #FFEA7D;
`;
export const PokeDataTr = styled.div`
    width: 100%;
    color: #978C2F;
    text-align: center;
    display: flex;
    align-items:center;
    justify-content: space-between;
`;
export const PokeDataTh = styled.div`
    width: 50%;
    border: 1px solid #978C2F;
    padding: 2px;
    background-color: #FFEA7D;
    color: #978C2F;
    text-align: center;
    font-size:17px;
`;
export const PokeDataTd = styled.div`
    width: 50%;
    border: 1px solid #978C2F;
    padding: 2px;
    background-color: #978C2F;
    color: #FFEA7D;
    text-align: center;
    font-size:17px;
`;
export const PokeDataDesc = styled.div`
    background-color: #FFEA7D;
    font-size: 18px;
    width: 90%;
    padding: 10px;
    margin: 10px 0;
    color: #978C2F;
    border: 4px solid #978C2F;
    `;
