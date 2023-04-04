import './style.css';
import Box2 from '../Box2/Box2';
import styled from "styled-components";
export default function Box1(){
    const StyledDiv = styled.div`
    width:500px;
    height: 500px;
    padding-bottom: 40px;
  background-color: ${(props) => (props.bg)};
`;
    return (
        <StyledDiv bg="green">
        <br/><Box2/>
        </StyledDiv>
    )
}