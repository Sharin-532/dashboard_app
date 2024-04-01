import React, { useState } from "react";

const Weather = () => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState(null);
    
    
    const search = async () => {
        const url = `https://api.weatherapi.com/v1/current.json?q=${location}&lang=EN&key=edd6cc4733e6448dbf7202341242603`;
        if (location.length < 1 ) {
            return alert("Enter the details");
        } else {
            await fetch(url)
                .then((response) =>  {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    debugger
                    if(data==null)return;
                   setWeather(data);
                })
                .catch((err) => console.log("error ", err));
        }
    };

    
    const Clear = async()=> {
       setWeather(null);
       setLocation("")
       
    }

    return (
        <div id="container" className="w-full">
            <div className="searchicon">
                <input className=" bg-slate-100 rounded-md p-4 m-4 w-9/12"
                    type="text" name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter Location/Place/Area"
                />
                <button onClick={search}
                    className=" bg-green-500 text-white p-3 m-3 rounded-md font-bold hover:bg-green-600">Show</button>
                <button onClick={Clear}
                    className=" bg-blue-500 text-white p-3 m-3 rounded-md font-bold hover:bg-blue-600">Clear</button>

                {weather && (
                 <div className="w-auto mt-10 flex justify-center">
                    <div className="w-1/2 rounded overflow-hidden shadow-lg bg-white h-80">

                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            {/* Weather image */}
                            <img src={weather.current.condition.icon} alt="Weather Icon" style={{ width: '100%', height: 'auto' }} />

                            {/* Text overlay */}
                            <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, -50%)', color: 'grey', fontSize: '14px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', textAlign: 'center' }}>
                                {weather.current.condition.text}
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{weather.location.name}</div>
                            <p className="text-gray-700 text-base">
                                {weather.location.region},{weather.location.country}<br />
                                {weather.location.tz_id}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Temperature:{weather.current.temp_c}°C</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Humidity: {weather.current.humidity}%</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Wind: {weather.current.wind_kph}km/h</span>
                        </div>
                    </div>
                </div>
                    )
                }
            </div>
        </div>
        
    );
};

export default Weather;











 