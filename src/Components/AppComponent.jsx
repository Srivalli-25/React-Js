// import React from 'react';
import Child from "./Child";
export default function AppComponent() {
        let name ="Sri Valli" ;
        let city = "Visakhapatnam";
        let age =20;
        let email ="sri@gmail.com";
        let phoneno =9852364170;
        let name2 ="Valli" ;
        let city2 = "Benguluru";
        let age2 =25;
        let email2 ="valli@gmail.com";
        let phoneno2 =9170564382;
        let name3 ="Sathvik" ;
        let city3 = "Ooty";
        let age3 =22;
        let email3 ="sathvik@gmail.com";
        let phoneno3 =9820165374;
        let name4 ="Yamini" ;
        let city4 = "Thrivandrum";
        let age4 =24;
        let email4 ="yamini@gmail.com";
        let phoneno4 =7098523641;
        let name5 ="Jannin" ;
        let city5 = "Hyderbad";
        let age5 =21;
        let email5 ="jannin@gmail.com";
        let phoneno5 =8523641709;
return (
    <div className="user-container" >
    <Child name={name} city={city} age={age} email={email} phoneno={phoneno}/>
    <Child name={name2} city={city2} age={age2} email={email2} phoneno={phoneno2}/>
    <Child name={name3} city={city3} age={age3} email={email3} phoneno={phoneno3}/>
    <Child name={name4} city={city4} age={age4} email={email4} phoneno={phoneno4}/>
    <Child name={name5} city={city5} age={age5} email={email5} phoneno={phoneno5}/>
    </div>
);
}
