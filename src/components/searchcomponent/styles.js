import styled from "styled-components"

export let State = false;

export const SearchContainer = styled.div`
    width: 40%;
    padding: 20px;
    color: #978C2F;
    display: flex;
    flex-direction:column;
    @media screen and (max-width: 1000px){
        align-items:center;
        justify-content: center;
        width: 90%
    }
`;
export const SearchField = styled.div`
    color: #BE1515;
    border: 2px solid #BE1515;
    border-radius:5px;
    padding:3px;
    display:flex;
    align-items: center;
    font-size:19px;
    background-color: #F5F5F5;
    @media screen and (max-width: 1000px){
        ${State && "display: none;"}
        width:100%
    }
`;
export const SearchResult = styled.div`
    margin-top: 10px;
    margin-bottom:40px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-gap: 20px;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
        ${State && "display: none;"}
    }
    @media screen and (max-width: 760px){
        grid-template-columns: 1fr 1fr 1fr;
        ${State && "display: none;"}
    }
    @media screen and (max-width: 600px){
        grid-template-columns: 1fr 1fr;
        ${State && "display: none;"}
    }
    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
        width:50%;
        ${State && "display: none;"}
    }
`;
export const SearchBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    height: 140px;
    color: #464114;
    background-color: #C9BB3F;
    border-radius: 20px;
    border: 4px solid #978C2F;
    font-size: 20px;
    cursor: pointer;
`;
export const SearchImg = styled.img`
    max-width:100px;
`;
export const SearchName = styled.span`
    background-color: #FFEA7D;
    padding:5px;
    border-radius:10px;
    margin-bottom:10px;
`;
export const Search = styled.input`
    font-size:19px;
    border:0;
    outline-width: 0;
    width: 100%;
    background-color: #F5F5F5;
`;
export const Label = styled.label`
    cursor: text;
`;
export const SearchBack = styled.div`
    display: none;
    @media screen and (max-width: 1000px){
        ${!State ? "display: none;" : "display: flex;"}
        font-size: 19px;
        text-align:center;
        position:relative;
        bottom:0;
        cursor: pointer;
    }
`;