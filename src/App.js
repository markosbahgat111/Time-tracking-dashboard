import { useEffect, useState } from 'react';
import './App.scss';
import PersonCard from './components/personCard/personCard.component';
import TimeCard from './components/timeCard/timeCard.component';

function App()
{
  const [data, setData] = useState([]);
  const [timeFrame, setTimeFrame] = useState(24)
  useEffect(() =>
  {
    fetch('data.json').then(res => res.json()).then(data => setData(data))
  }, [])
  console.log(data);
  return (
    <div className="App">
      <PersonCard setTimeFrame={setTimeFrame}/>
      <div className='timeCards_container'>
        {data?.map(card => (
          <TimeCard card={card} key={card.title} timeFrame={timeFrame}/>
        ))}
      </div>
    </div>
  );
}

export default App;
