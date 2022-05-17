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


  const fetchData = () => {
    axios
      .get<Beer[]>("https://api.punkapi.com/v2/beers/random")
      .then(response => {

        let brewed_year;
        let brewed_month;


        if (response.data[0].first_brewed.includes("/")) {
          [brewed_month, brewed_year] = response.data[0].first_brewed.split("/");

        } else {
          brewed_month = "0";
          brewed_year = response.data[0].first_brewed
        }

        response.data[0].brewed_year = brewed_year;
        response.data[0].brewed_month = brewed_month;

        setBeers(old => [...old, ...response.data]);



        count = count + 1
        if (count < 30) {
          //alert(count)
          fetchData()
        }
      }).catch(ex => {
        const error =
          ex.response.status === 404
            ? "404"
            : "Errore generico";
        setError(error);
      });
  }




  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {

    if (beers.length === 30) {
      const pippo = beers.sort((a, b) => +(a.brewed_year + a.brewed_month) - +(b.brewed_year + b.brewed_month))
    }


  }, [beers]);



  return (
    <>
      <Header />

      <Container mt={20} maxW='container.xl' className='container'>

        {error && <p className="error">{error}</p>}

        {console.log("hook beer", beers)}

        {beers.map(({ id, name, tagline, image_url, brewed_month, brewed_year }) => (
          <>
            <Card title={name} tagline={tagline} imageUrl={image_url} key={id} year_brewed={brewed_year} month_brewed={brewed_month} />
          </>

        ))}
      </Container>



      <Footer />
    </>
  );
}

export default App;
