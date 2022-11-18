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
                 4 TOTAL STEPS
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
           
            

