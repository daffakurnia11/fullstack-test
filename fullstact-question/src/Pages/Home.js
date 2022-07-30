import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(function () {
    const apiKey = '2cee552b7c4f4810aa780133223007';
    const city = 'Jakarta';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    async function getData() {
      const request = await fetch(url);
      const response = await request.json();

      setData(response);
      setLoading(false);
    }

    getData();
  }, []);

  return (
    <Container id="home" className='d-flex flex-column justify-content-center align-items-center text-center'>
      {loading ? (
        <h1 className='home-datetime'>Loading Data..</h1>
      ) : (
        <>
          <h1 className='home-datetime'>{data.current.last_updated}</h1>
          <p className='home-weather mt-5'>
            <img src='assets/weather.png' />
            {data.current.temp_c} <sup>o</sup>C
          </p>
        </>
      )}
      <Link to='/posts'>
        <Button variant="danger" className='home-button mt-5'>Enter</Button>
      </Link>
    </Container>
  );
}

export default Home;
