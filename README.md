# Building-with-Reusable-Components
React project that uses reusable component

Project walkthrough 
1. npx create-react-app pdas
2. cd into pdas directory
3. npm start (starts project)
4. Delets all files in src directory
5. Create:
    index.js
    App.js
    ProfileCard.js
6. In ProfileCard.js
        Create component 
        Export component
7. In App.js
        1. import the ProfiledCard component
        2. Create App component
                A) Show the 3 cards in the created component.
8. In index.js 
        1. import React, ReacDom, and App
        2. Create route and rendering components into the route

9. We will use the Props System which will directly communicate
   down from the PARENT (App) to the Child (ProfileCard)
        ~ this is a one way flow of data. The child can't 
          push date back up. 

 
 
      ~  BEHIND THE SCENE OF THE PROP SYSTEM  ~
                 4 TOTAL STEPS ( see 2PropsSystem image)
        1. Inside the parent component we create a child 
           component
            
            function App() {
                return <Child color="red" />
            }

            find where the child component was created and add attribures. (in this eg we add color="red" this is the data i want to communicate down to the child component)

        2. React will collect all the attributes we've added
           to this element and put then in an object as a key
           value pair
                        Props Object
                        {color: "red"}
        3. The prop object will show up as our first argument
           into our child component function

           function Child(props) {
                return <div>{props.color}</div>
           }
        
        4. we use the data we recieved as we wish.


 ~ ADDING IMAGES.
        1. Create image folder in the src folder.
        2. After adding images they must be imported.
        3. import statment - import Siri from "./images/siri.png"
                import statement for images are only used when we
                are including the images for our project. 

        4. using an image hosted somewhere else online
           treat it like a normal image and put add the URL

          eg <image src ="https://picsun.photos/200/300 />

        5. Add the variable in
                <ProfileCard title="Siri" handle="@Siri6" image={SiriImage} />

        6. Update file that has (for this example)ProfileCard component function

  ~ variable name "image"       function ProfileCard({title, handle, image}) {  
    added                           return (
                                        <div>
                                        <img src={image} alt="pda logo"/>  
                                        <div>Title is {title}</div>
                                        <div>Handle is {handle}</div>
                                        </div>
                                );}
 ~ if an image alt tag is not provided React gets annyoned and throws a warning 
                

                ~ Styling React Projects ~ 
        1. install the CSS library using npm, import the CSS file
                ~ npm install bulma
        
        2. in App.js import bulma
                bulma is located in node_modules. 
                We only need one file bulma/css/bulma.css
        3. import above file
                ~ import bulma/css/bulma.css;
                
                ~ .css is need for the import b/c we are
                  importing a no js file.  

        NOTE the import case here
                when we import Folders or Files  out of the node modules
                directory, we do not have to use a relative path, so 
                we no dot slash. 
        
        ~ Modifying The Cards contents ~

        1. Add the div tags to the cards
           a) they must match exactly as the css
           b) We will use className not class b/c we are using jsx 