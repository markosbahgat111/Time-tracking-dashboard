import dotsIcon from '../../assets/icon-ellipsis.svg';
import './style.scss';
const TimeCard = ({ card, timeFrame }) =>
{
    const { timeframes, title, img } = card;
    const { daily, monthly, weekly } = timeframes;
    return (
        <div className={`main_container ${title}`}>
            <img src={img} alt={title} className="back"/>
            <div className='card_container'>
                <section className='sectionOne'>
                    <h1>{title}</h1>
                    <img src={dotsIcon} alt="dotsIcon" />
                </section>
                <section className='sectionTwo'>
                    <h1>{(timeFrame === 1 ? daily : (timeFrame === 7 ? weekly : monthly)).current}hrs</h1>
                    <span>{timeFrame === 1 ? "Yesterday" : (timeFrame === 7 ? "Last Week" : "Last Month")} - {(timeFrame === 1 ? daily : (timeFrame === 7 ? weekly : monthly)).previous}hrs</span>
                </section>
            </div>
        </div>
     );
}
 
export default TimeCard;