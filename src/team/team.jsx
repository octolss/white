import './team.css';
import vovka from './vovka.png'

function Team() {
  return (
    <div className="teamReturner">
        <div className="gridContainer">
            <div className="firstRow">
                <div className="rectangle">
                    <a href="">
                        <img src = {vovka}/>
                        <p>Vovka Jeremejev</p>
                        <p>CO-CEO/Full-Stack</p>
                    </a>
                </div>
                <div className="rectangle">
                    <a href="">
                        <img src = {vovka}/>
                        <p>Goblin Goblin</p>
                        <p>Goblin Goblin</p>
                    </a>
                </div>
            </div>
            <div className="secondRow">
                <div className="rectangle">
                    <a href="">
                        <img src = {vovka}/>
                        <p>Artemka Belij</p>
                        <p>CO-CEO/Full-Stack</p>
                    </a>
                </div>
                <div className="rectangle">
                    <a href="">
                        <img src = {vovka}/>
                        <p>Incognito</p>
                        <p>Web-Design/UI-UX</p>
                    </a>
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