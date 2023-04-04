import './style.css';
import styled from "styled-components";
export default function Box4(){
    const StyledDiv = styled.div`
    width:100px;
    height: 50px;
    padding: 20px;
    margin: 40px;
    margin-left: 25%;
    flex: auto;
    background-color: ${(props) => (props.bg)};
`;
    return <StyledDiv bg='purple'></StyledDiv>
}