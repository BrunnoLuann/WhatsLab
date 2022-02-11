import React from "react";
import styled from "styled-components";
import { MessagesContainer, Message, MyMessage, } from "./styled"


//Area para mudar posição quando escrever "Eu" em usuário. 
class MessagesList extends React.Component {
  render() {
    return (
      <MessagesContainer>
        {this.props.messages &&
          this.props.messages.map((message, index) => {
            if (message.userValue.toLowerCase() === "eu") {
              return (
                <MyMessage
                  key={index}
                  onDoubleClick={() => this.props.onDoubleClick(index)}
                >
                  <strong>{message.userValue}: </strong>
                  {message.messageValue}
                </MyMessage>
              );
            } else {
              return (
                <Message
                  key={index}
                  onDoubleClick={() => this.props.onDoubleClick(index)}
                >
                  <strong>{message.userValue}: </strong>
                  {message.messageValue}
                </Message>
              );
            }
          })}
      </MessagesContainer>
    );
  }
}
export default MessagesList;
