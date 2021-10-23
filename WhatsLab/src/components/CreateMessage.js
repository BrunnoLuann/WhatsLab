import React from "react";
import styled from "styled-components";
import MessagesList from "./MessagesList";

const Container = styled.div`
  width: 45vw;
  height: 2em;
  display: flex;



`;

const UserInput = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 3px 8px;
  width: 80px;



`;

const MessageInput = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 3px 15px 3px 8px;
  flex-grow: 1;




`;

const SendMessage = styled.button`
  background-color: #25D366;
  border-radius: 5px;
  border: none;
  margin: 3px 190px 3px 4px;
  color: white;
  font-weight: bold;
  font-size: 16px;



`;

//Area de Envio de Mensagem
class CreateMessage extends React.Component {
  state = {
    user: "",
    message: "",
    messages: [],
  };
  // Area Nome do usuário 
  onChangeUser = (event) => {
    this.setState({ user: event.target.value });
  };
  // Area Mensagem 
  onChangeMessage = (event) => {
    this.setState({ message: event.target.value });
  };

  onClickSendMessage = () => {
    if (this.state.user !== "" && this.state.message !== "") {
      const newMessage = {
        userValue: this.state.user,
        messageValue: this.state.message,
      };
      const newArray = [newMessage, ...this.state.messages];
      this.setState({ messages: newArray });
      this.setState({ message: "", user: "" }); //Area para resetar o campo mensagem e nome
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };
  //Enviar com o botão Enter
  enterSendMessage = (event) => {
    if (event.key === "Enter") {
      this.onClickSendMessage();
    }
  };

  //Deletar Mensagem quando clicar nela
  deleteMessage = (index) => {
    if (window.confirm("Tem certeza que quer remover essa mensagem?")) {
      const deletedMessage = this.state.messages;
      deletedMessage.splice(index, 1);
      this.setState({ messages: deletedMessage });
    }
  };

  render() {
    return (
      <div>
        {/* Chamando o MessagesList.js */}
        <MessagesList
          messages={this.state.messages}
          user={this.state.user}
          message={this.state.message}
          onDoubleClick={this.deleteMessage}
        />
        <Container onKeyPress={this.enterSendMessage}>
          {/* Alterações dos Campos e Envio de Mensagem */}
          <UserInput
            placeholder="Usuário"
            onChange={this.onChangeUser}
            value={this.state.user}
            required
          />
          <MessageInput
            placeholder="Mensagem"
            onChange={this.onChangeMessage}
            value={this.state.message}
            required
          />
          <SendMessage onClick={this.onClickSendMessage} type="submit">
            Enviar
          </SendMessage>
        </Container>
      </div>
    );
  }
}
export default CreateMessage;
