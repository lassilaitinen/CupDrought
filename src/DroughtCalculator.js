import React, { useState, useEffect } from "react";

const DroughtCalculator = ({ team }) => {
    const [timeDifference, setTimeDifference] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    let date = team.last_title_day;
    let text = team.name + " last won championship in "+ date;
    if (date === "") {
        date = team.since_in_league;
        text = team.name + " has been without championships in the league since "+ date;
    }
    const parseDate = (date) => {
        const [day, month, year] = date.split('.').map(Number);
        return new Date(year, month - 1, day);
    };

    // Päivitä ajan erotus
    const count_time = () => {
        let champ_day = parseDate(date);
        console.log(date + "->" +  champ_day);
        const now = new Date();

        let years = now.getFullYear() - champ_day.getFullYear();
        let months = now.getMonth() - champ_day.getMonth();
        let days = now.getDate() - champ_day.getDate();
        let hours = now.getHours() - champ_day.getHours();
        let minutes = now.getMinutes() - champ_day.getMinutes();
        let seconds = now.getSeconds() - champ_day.getSeconds();

        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }
        if (days < 0) {
            const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += previousMonth.getDate();
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }
        setTimeDifference({ years, months, days, hours, minutes, seconds });
    };

    useEffect(() => {
        count_time();

        const interval = setInterval(count_time, 1000);
        return () => clearInterval(interval);
    },[date]);

    return (
            <p id="calculator">
                {text}, which is {timeDifference.years} years, {timeDifference.months} months,{" "}
                {timeDifference.days} days, {timeDifference.hours} hours,{" "}
                {timeDifference.minutes} minutes ja {timeDifference.seconds} seconds ago.
            </p>
    );
};

export default DroughtCalculator;
