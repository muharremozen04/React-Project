import IPhone11Beyaz from './images/IPhone11Beyaz.jpg';
import IPhone11Mor from './images/IPhone11Mor.jpg';
import IPhone13 from './images/IPhone13.jpg';
import IPhone13ProMax from './images/IPhone13ProMax.jpg';
import './Phone.css';

const phoneMap = {
    IPhone11Beyaz:IPhone11Beyaz,
    IPhone11Mor:IPhone11Mor,
    IPhone13:IPhone13,
    IPhone13ProMax:IPhone13ProMax
}

function Phone({ phoneName }) {
    console.log(IPhone11Beyaz);
    console.log(phoneName);
    return ( <div className="phoneDiv">
        <img className='phone' src={phoneMap[phoneName]} alt="Telefon" ></img>
    </div> );
}

export default Phone;