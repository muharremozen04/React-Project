import './App.css';
import Phone from './Phone';
import {useState} from 'react';

function getRandomPhone(){
  const phoneArray = ['IPhone11Beyaz','IPhone11Mor','IPhone13','IPhone13ProMax'];
  return phoneArray[Math.floor(Math.random() * phoneArray.length)];
}


function App() {
  const [phone, setPhone] = useState([]);

  const handleClick = () => {
    setPhone([...phone, getRandomPhone()]);
  };
  const phoneList = phone.map((phone, index) => {
      return <Phone key={index} phoneName={phone} />;
     });
   

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>Telefon Ekle</button>
  <div className='phoneList'>
    {phoneList}
  </div>
    </div>
  );
}

export default App;
