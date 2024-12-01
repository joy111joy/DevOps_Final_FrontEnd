import flights from '../data/flights.json';
import Banner from '../components/Banner';

function flightList() {
  return (
    <div>
        <Banner mainMessage={'Flights'} subMessage={'Track Live flight information'} sideBar={true}/>
    <div className='flightListCont'>

      {flights.map((flight, index) => (
        <div key={index} className="flightItem">
        <div className='flightNum'>
            <h3>{flight.flightNumber}</h3>
          </div>
          <div className='flightAirline'>
          <p>{flight.airline}</p>
          </div>
          <div className='flightAddInfo'>
            {flight.additionalInfo && <p>{flight.additionalInfo}</p>}
          </div>
          <p>Departure: {flight.departureTime}</p>
          <p>Arrival: {flight.arrivalTime}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default flightList;
