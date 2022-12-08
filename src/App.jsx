import { useFetch } from './hook/useFetch';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Loading from './components/Loading';
import CharactersList from './components/CharactersList';
import Pages from './components/Pages';
import Filter from './components/Filter';

function App() {
  console.log("App mounted");
  const nextPage = () => {
    if (info.next != null) {
      setEndpoint(info.next);
    }
  };
  const prevPage = () => {
    if (info.prev != null) {
      setEndpoint(info.prev);
    }
  };

  const [endpoint, setEndpoint] = useState("character");
  const [data, isLoading, error] = useFetch(endpoint);
  const { results: characters, info } = data;


  if (isLoading) return <Loading />;
  if (error) return <p>{error}</p>;


  return (
    <Container>
      <h1>Brave New World</h1>
      <Filter setEndpoint={setEndpoint} />
      <CharactersList characters={characters} />
      <Pages prevPage={prevPage} nextPage={nextPage} pageBefore={info.prev} pageAfter={info.next} />

    </Container>);
}

export default App;
