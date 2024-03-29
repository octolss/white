import './about.css';
import photo from './main.png'


function About() {
  return (
    <div>
        <div className="aboutText">
            <div className="container-beauty"></div>
            <div className="aboutUs">
                <h1>About us</h1>
            </div>
            <div className="container2">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, accusamus iste. Quibusdam quas nihil sapiente reprehenderit iste accusantium expedita aliquam? Dicta in cum maiores iste perferendis fugiat impedit eos ab dignissimos libero. Cumque aliquid fuga hic ut voluptate voluptatem itaque.</h3>
            </div>
            <div className="main-photo">
              <img src = {photo}/>
        </div>
        </div>

        
      </div>

  );
}

export default About;