import React, { useEffect, useState } from 'react';
import Header from './components/header';
import './App.css';
import Footer from './components/footer';
import Card from './components/card';
import axios from 'axios';

import { Container } from "@chakra-ui/react";
import { Beer } from './models/beer';


function App() {

  const [beers, setBeers] = useState<Beer[]>([]);
  const [error, setError] = useState("");


  let count: number = 0;


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get<Beer[]>("https://api.punkapi.com/v2/beers/random")
      .then(response => {
        console.log("get: ", response.data)
        //setBeers(response.data);
        setBeers(old => [...old, ...response.data]);
        count = count + 1
        if (count !== 30) {
          //alert(count)
          fetchData()
        };
      }).catch(ex => {
        const error =
          ex.response.status === 404
            ? "404"
            : "Errore generico";
        setError(error);
      });
  }


  return (
    <>
      <Header />

      <Container mt={20} maxW='container.xl' className='container'>

        {error && <p className="error">{error}</p>}
        {console.log("stato: ", beers)}
        {beers.map((beer) => (
          <>
            <Card title={beer.name} tagline={beer.tagline} imageUrl={beer.image_url} first_brewed={beer.first_brewed} />
          </>

        ))}
      </Container>





      <Footer />
    </>
  );
}

export default App;
