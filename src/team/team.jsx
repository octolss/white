import './team.css';
import vovka from './vovka.png'

function Team() {
  return (
    <div className="teamReturner">
        <div className="gridContainer">
            <div className="firstRow">
                <div className="rectangle">
                    <img src = {vovka}/>
                </div>
                <div className="rectangle">
                <img src = {vovka}/>
                </div>
            </div>
            <div className="secondRow">
                <div className="rectangle">
                <img src = {vovka}/>
                </div>
                <div className="rectangle">
                <img src = {vovka}/>
                </div>
            </div>
                
        </div>
        <div className="aboutTeam">
            <h1>Our Team:</h1>

            <button className='showAbout'>Show more...</button>
            
        </div>
   </div>
  );
}

export default Team;