import personImg from '../../assets/image-jeremy.png';
import './style.scss';

const PersonCard = ({setTimeFrame}) =>
{
    return (
        <div className='person_main_container'>
            <section>
                <img src={personImg} alt="personImg" />
                <h1><span>Report For</span><br/>Jeremy Robson</h1>
            </section>
            <ul>
                <li onClick={() => setTimeFrame(1)}>Daily</li>
                <li onClick={() => setTimeFrame(7)}>Weekly</li>
                <li onClick={() => setTimeFrame(30)}>Monthly</li>
            </ul>
        </div>
     );
}
 
export default PersonCard;