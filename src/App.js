import { Container } from "./styles";
import ScreenPokemon from "./components/screenpokemon"
import SearchComponent from "./components/searchcomponent"
import { useState } from "react";

function App() {
  const [data, setData] = useState()
  
  return (
    <Container>
      <ScreenPokemon Data={data} />
      <SearchComponent Data={setData} />
    </Container>
  );
}

export default App;
