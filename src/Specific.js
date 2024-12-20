import './Specific.css';
import DroughtCalculator from "./DroughtCalculator";


function Specific({ specific_team }) {
    let team = specific_team[0];
    return (
      <div className="team">
        <h2>{team.OfficialName}</h2>
        <DroughtCalculator team={team}/>
        
        {championship_info(team)}
        
      </div>
    );
  }
  
  function championship_info(team) {
    let info = '';
    if (team.titles.length === 0) {
      info = team.name + " has not won any championships.";
    }
    else {
      info = team.name + " has won " + team.titles.length + " championships in " + team.titles + "\n\r";
    }
    let silver = team.silver.length.toString();
    if (team.silver.length > 0) {
      silver += " (" + team.silver.toString() + ")";
    }
    let bronze = team.bronze.length.toString();
    if (team.bronze.length > 0) {
      bronze += " (" + team.bronze.toString() + ")";
    }
    return (
      <div id='team_info' >
        <h4>Medals in total:</h4><br/>
        {info}<br/>
        <p>Silver medals: {silver}</p>
        <p>Bronze medals: {bronze}</p>
        <br/>
        <h4>Team info</h4><br/>
        <p>Established: {team.established}</p>
        <p>In the league since: {team.since_in_league}</p>
        <p>Hometown: {team.homeTown}</p>
      </div>
    );
  }

  
  
export default Specific;