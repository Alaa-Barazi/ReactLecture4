import Box4 from '../Box4/Box4';
import './style.css';
import styled from "styled-components";
export default function Box3(){
    const StyledDiv = styled.div`
    width:300px;
    height: 300px;
    padding: 20px;
    margin: 30px;
    background-color: ${(props) => (props.bg)};
`;

    return <StyledDiv bg='pink'><Box4/><Box4/></StyledDiv>
}