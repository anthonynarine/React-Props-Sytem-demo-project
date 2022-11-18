import ProfileCard from "./ProfileCard";

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>
//when making custom components we get to choose the names eg title & handle
            <ProfileCard title="Siri" handle="@Siri6" />
            <ProfileCard title="Alexa" handle="@Alexa23" />
            <ProfileCard title="Cortana" handle="@cortana8" />
        </div>
    );
}

export default App;