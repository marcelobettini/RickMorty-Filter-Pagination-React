import { useFetch } from './hook/useFetch';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Loading from './components/Loading';
import CharactersList from './components/CharactersList';

function App() {
  const [endpoint, setEndpoint] = useState("character");
  const [data, isLoading, error] = useFetch(endpoint);
  const { results: characters, info } = data;


  if (isLoading) return <Loading />;
  if (error) return <p>{error}</p>;


  return (
    <Container>
      <h1>Brave New World</h1>
      <CharactersList characters={characters} />
    </Container>);
}

export default App;
