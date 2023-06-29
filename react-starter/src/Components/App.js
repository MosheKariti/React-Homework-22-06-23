import { LanguagesToSelect } from "./LanguagesToSelect";
import { DisplayUserLanguages } from "./DisplayUserLanguages";
import { useState } from "react";
import { Header } from "./Header";

function App() {
    const [userLanguages, setLanguages] = useState([]);
  return (
     <>
        <Header></Header>
        <LanguagesToSelect userLanguages={userLanguages} setLanguages={setLanguages}></LanguagesToSelect>
        <DisplayUserLanguages userLanguages={userLanguages}></DisplayUserLanguages>
     </>
  );
}

export default App;
