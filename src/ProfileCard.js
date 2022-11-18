function ProfileCard(props) {
    const title = props.title  
    const handle = props.handle

    return (
        <div>
            {/* <div>Title is {props.title}</div>
            <div>Handle is {props.handle}</div> */} 
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

export default ProfileCard;

//step 3 in the props system is to have ProfileCard receive
// the arguments passed into App (title = "siri" handle= @siri etc)
//props will act like a place holder for the data coming from apps
//we use dot notation to access the data props.title, props.handle

//we can also save the data in variables and call them in our component
// function as show above.