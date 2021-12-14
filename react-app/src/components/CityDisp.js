import cities from '../data/city-data'
import City from "./City"

const CityDisp = () => (
    <div>
        {cities.map(city => {
            return (
                <City key={city.name} 
                name={city.name}
                header={city.header} 
                desp={city.desp} 
                imageUrl={city.imageUrl}
                temperature={city.temperature}
                />
            )
        }
        )}
    </div>
)

export default CityDisp;