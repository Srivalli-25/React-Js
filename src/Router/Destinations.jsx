import {NavLink, Outlet} from 'react-router-dom';

export default function Destinations() {
return (
    <div className='page'>
    <h1>Explore Destinations</h1>
    <p>
        Choose your favorite type of destinations and start exploring.
    </p>
    <div className="nested-nav">
        <NavLink to={"Beaches"}>Beaches</NavLink>
        <NavLink to={"Mountains"}>Mountains</NavLink>
        <NavLink to={"Historical"}>Historical Places</NavLink>
        <NavLink to={"Wildlife"}>Wildlife</NavLink>
        <NavLink to={"International"}>International</NavLink>
    </div>
    <div className="nested-content">
        <Outlet/>
    </div>
    </div>
)
}
