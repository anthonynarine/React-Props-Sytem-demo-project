import ProfileCard from "./ProfileCard";
import SiriImage from "./images/siri.png";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard title="Siri" handle="@Siri6" image={SiriImage} />
            <ProfileCard title="Alexa" handle="@Alexa23" image={AlexaImage} />
            <ProfileCard title="Cortana" handle="@cortana8" image={CortanaImage} />
        </div>
    );
}

export default App;

//to add images we provide they must be imported (see above imports)
//to pass them down as props we must decide on a prop name
// image is usually a good choice  :)
