import loadingicon from "../../assets/loading.gif"
import styled from "styled-components"

const LoadingContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    img{
        max-width:50px;
    }
`;

export default function Loading() {
    return (
        <LoadingContainer>
            <img src={loadingicon} alt="carregando..." />
        </LoadingContainer>
    )
}