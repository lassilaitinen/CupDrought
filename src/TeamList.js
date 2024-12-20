import data from './data.json';
import Specific from './Specific';
import './TeamList.css';
import React, { useState } from "react";

function TeamList() {
    const datafin = data.finland;
    const [specific_team, set_specific_team] = useState(0);
    return (
    <div className='content'>
      <div className="teamlist">
        {datafin.map((team) => (
              <div className='team' key={team.id} onClick={() => set_specific_team(team.id)}>
                <h3 className='team_item' onClick={() => set_specific_team(team.id)}>{team.name} {count_drought(team)}</h3>
              </div>
            ))}
      </div>
    <Specific specific_team={[datafin[specific_team]]} />
    </div>
    ); 
  }

  console.log(data);
  
  function count_drought(team) {
    let drought = 0
    let date = new Date().getFullYear();
    let since;
    let from = "";
    if (team.titles.length === 0) {
      let ar = team.since_in_league.split(".");
      since = parseInt(ar[2]);
      from = "in the league with 0 championships.";
    }
    else {
      since = parseInt(team.titles[team.titles.length-1]);
      from = "since the last championship.";
    }
    drought = date - since;
    team.drought = drought;
    return (
      <div id='team' >
        {drought} years {from}
        </div>
    );
  }

  
  export default TeamList;