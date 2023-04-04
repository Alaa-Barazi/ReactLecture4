import './style.css';
import Box3 from '../Box3/Box3';
import styled from "styled-components";
export default function Box2() {
    const StyledDiv = styled.div`
    width:400px;
    height: 400px;
    padding: 10px;
    margin: 40px;
  background-color: ${(props) => (props.bg)};
`;
    return <StyledDiv bg='blue'><Box3 /></StyledDiv>
}