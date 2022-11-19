import ProfileCard from "./ProfileCard";
import SiriImage from "./images/siri.png";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import "bulma/css/bulma.css"

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                        <ProfileCard title="Siri" handle="@Siri6" image={SiriImage} />
                        </div>
                        <div className="column is-3">
                        <ProfileCard title="Alexa" handle="@Alexa23" image={AlexaImage} />
                        </div>
                        <div className="column is-3">
                        <ProfileCard title="Cortana" handle="@cortana8" image={CortanaImage} />
                        </div>
                    </div>
                </section>
            </div>         
        </div>
    );
}

export default App;

//to add images we provide they must be imported (see above imports)
//to pass them down as props we must decide on a prop name
// image is usually a good choice  :)
