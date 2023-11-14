import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/Ai';

export const WannaCreate = styled.div`
  position: fixed;
  margin: 75px 20px 20px 20px;
  background: #191919;
  width: calc(100% - 40px);
  height: 50px;
  border-radius: 10px;
  color: #ffc4da;
  border: 1px solid #ffc4da;
  display: flex;
  align-items: center;
  font-size: 18px;
  padding-left: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  transition: ease 300ms;

  @media (max-width: 600px) {
    font-size: 12px;
  }

  &:hover {
    cursor: pointer;
    background-color: #251c1f;
    transition: ease-out 300ms;
  }
`;

interface WannaCreateMenuProps {
  state: boolean;
}

export const WannaCreateMenu = styled.div<WannaCreateMenuProps>`
  position: fixed;
  margin: 145px 20px 20px 20px;
  background: ${(props) => (props.state ? 'transparent' : '#191919')};
  width: calc(100% - 40px);
  height: ${(props) => (props.state ? '0px' : 'calc(100vh - 165px)')};
  border-radius: 10px;
  color: #ffc4da;
  border: ${(props) => (props.state ? '0px solid transparent' : '1px solid #ffc4da')} ;
  font-size: 18px;
  padding-left: 10px;
  box-shadow: ${(props) => (props.state ? '0px 0px 10px 0px rgba(0, 0, 0, 0.0)' : '0px 0px 10px 0px rgba(0, 0, 0, 0.3)')};;
  transition: ease-out 300ms;
  padding: 15px 25px 15px 25px;
`;

interface TableProps {
  state: boolean;
}

export const Table = styled.ul<TableProps>`
height: calc(100vh - 175px);
/* position: absolute; */
opacity: ${(props) => (props.state ? '0' : '1')};
display: flex;
flex-direction: column;
flex-wrap: wrap;
transition: all ease-out ${(props) => (props.state ? '100ms' : '800ms')};
`

export const List = styled.li`
list-style: none;
`

export const Add = styled(AiOutlinePlus)`
  color: #ffc4da;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 0;
  margin-right: 25px;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
  width: 18px;
  height: 18px;
  border: 1px solid #ffc4da;
  
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:checked {
    background-color: #ffc4da;
    border-color: #ffc4da;
  }

  &:before {
    display: inline-block;
    width: 18px; 
    height: 18px; 
    border: 2px solid #333; 
    border-radius: 4px; 
    background-color: white; 
    margin-right: 5px; 
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Selects = styled.button`
border: none;
border: 1px solid #ffc4da;
background-color: transparent;
color: #ffc4da;
font-size: 18px;
padding: 5px;
margin-top: 10px;
font-weight: bolder;
transition: all ease-out 300ms;

&:hover {
  cursor: pointer;
  background-color: #ffc4da;
  color: #191919;
  font-weight: bolder;
  transition: all ease-out 300ms;
}
`