import { Tooltip } from 'react-tooltip'
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img data-tooltip-id="my-country" data-tooltip-content={country.country_Name} src={country.image} alt="Shoes" /></figure>
            <Tooltip id="my-country" />
            <div className="card-body">
                <h2 className="card-title">{country.country_Name}</h2>
                <p>{country.description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/allTouristSpot/countries/${country.country_Name}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Country;