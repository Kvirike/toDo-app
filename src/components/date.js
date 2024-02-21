import React from 'react';

function date() {
    const now = new Date();
    const dayIndex = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
   
    return (
        <div>
            {days.map((day, index) => {
                if (index === dayIndex) {
                    return <div key={index}>{day} {hours}:{minutes}</div>;
                } else {
                    return null;
                }
            })}
        </div>
    );
}

export default date