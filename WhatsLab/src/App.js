import React from "react";
import styled from "styled-components";
import CreateMessage from "./components/CreateMessage";




const MainContainer = styled.div`
  background-color: black;
  background-image: url(http://st.gde-fon.com/wallpapers_original/641205_fon_dizayn_tekstura_3000x3000_www.Gde-Fon.com.jpg);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (

    <MainContainer>
      <CreateMessage />
    </MainContainer>
  );
}

export default App;
