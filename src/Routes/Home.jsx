import React, {useEffect, useState} from 'react';
import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setDentists(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <main className="main" >
      <h1>Salud por Digital House</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </main>
  );
}

export default Home