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

9. We will use the Props System which will communicate
   down from the PARENT (App) to the Child (ProfileCard)
        ~ this is a one way flow of data. The child can't 
          push date back up. 