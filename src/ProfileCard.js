function ProfileCard({title, handle, image}) {
    // const title = props.title  
    // const handle = props.handle
    // const {title, handle} = props; //destructuring
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                <img src={image} alt="pda logo"/> 
                </figure>
            </div>
            <div className="card-content">
            <div className="media-content">
            <p className="title is-4"> {title}</p>
            <p className="subtitle is-6"> {handle}</p>
            </div>
            </div>        
        </div>
    );
}

export default ProfileCard;

//step 3 in the props system is to have ProfileCard receive
// the arguments passed into App (title = "siri" handle= @siri etc)
//props will act like a place holder for the data coming from apps
//we use dot notation to access the data props.title, props.handle

//we can also save the data in variables and call them in our component
// function as show above. the trade off is that we create two extra 
//line of code.  we can use the js feature Destructure which will allow
//us to pull off a property from a object and create a variable with
// a same name 
 
// in essence:

// <div>Title is {props.title}</div>
// <div>Handle is {props.handle}</div> 

    // const title = props.title  
    // const handle = props.handle
    // <div>Title is {title}</div>
    // <div>Handle is {handle}</div>

// const {title, handle} = props; //destructuring

//would all work the same. The last method is just less code//  

// we use the js destructure feature because the are many scenarios
// where we don't use make use of the entire props ojbect but we 
// are stil receiving the whole Object. 
