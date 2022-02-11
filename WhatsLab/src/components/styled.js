import styled from "styled-components";

export const MainContainer = styled.div`
  background-color:#8FBC8F ;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const MessagesContainer = styled.div`
  background-color: lightgray;
  width: 35vw;
  height: 90vh;
  margin-top: 19px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 10px;
  border: 1px solid lightgray;



`;

export const Message = styled.p`
  background-color: lightskyblue;
  margin: 3px;
  width: 50%;
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid lightgray;



`;
export const MyMessage = styled.p`
  align-self: flex-end;
  background-color: lightsteelblue;
  margin: 3px;
  padding: 12px 15px;
  text-align: right;
  width: 50%;
  border-radius: 5px;
  border: 1px solid lightgray;


`;

export const Container = styled.div`
  width: 45vw;
  height: 2em;
  display: flex;



`;

export const UserInput = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 3px 8px;
  width: 80px;



`;

export const MessageInput = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 3px 0px 3px 8px;
  flex-grow: 1;




`;

export const SendMessage = styled.button`
  background-color: #25D366;
  border-radius: 5px;
  border: none;
  margin: 3px 150px 6px 4px;
  color: white;
  font-weight: bold;
  font-size: 16px;



`;




export default styled;