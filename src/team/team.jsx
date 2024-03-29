import './team.css';
import vovka from './vovka.png'

function Team() {
  return (
    <div className="teamReturner">
        <div className="gridContainer">
            <div className="firstRow">
                <div className="rectangle">
                    <img src = {vovka}/>
                    <p>Vovka Jeremmev</p>
                    <p>CO-CEO/Full-Stack</p>
                </div>
                <div className="rectangle">
                <img src = {vovka}/>
                <p>Goblin Goblin</p>
                    <p>Goblin Goblin</p>
                </div>
            </div>
            <div className="secondRow">
                <div className="rectangle">
                <img src = {vovka}/>
                    <p>Artemka Belij</p>
                    <p>CO-CEO/Full-Stack</p>
                </div>
                <div className="rectangle">
                <img src = {vovka}/>
                <p>Incognito</p>
                    <p>Web-Design/UI-UX</p>
                </div>
            </div>
                
        </div>
        <div className="aboutTeam">
            <h1>Our Team:</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores cupiditate consequuntur ipsa iure aspernatur cumque numquam veniam molestias quaerat.</p>
            <button className='showAbout'>Show more...</button>
            
        </div>
   </div>
  );
}

export default Team;