# Veni Vici Cat

Have you ever wanted to discover more about cat? The web app allows you to discover new cats by clicking through random new stuff. It will display one cat at a time with information through API calls in a random fashion. The user can influence what they want to see next via a ban list!

**Video Walkthrough**  
<img src='venivici.gif' title='video walkthrough' width='' alt='video walkthrough venivici' />  

**Features completed:**  
- [X] Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data
- [X] Only one item/API call is viewable at a time
- [X] API calls appear random to the user
- [X] At least one image is displayed per API call
- [X] Clicking on a displayed value for one attribute adds it to a displayed ban list
- [X] Attributes on the ban list prevent further images/API results with that attribute from being displayed
- [X] Multiple types of attributes can be added to the ban list
- [X] Users can see a stored history of their previously viewed items from their session
- [X] Display additional API results as star ratings.  

**Usage**
- Install Node.js and clone the repository
- Go to https://thecatapi.com/ and get your API key.
- Create a new file called .env in your project folder and add the following line:
`VITE_APP_ACCESS_KEY='your_api_key_here'`
Replace your_api_key_here with your actual API key.
- Navigate to the project directory and install dependencies: `npm install`  
- Start the development server: `npm run dev` 





