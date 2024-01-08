import { useState } from 'react'
import './App.css'

import History from './Components/History';
import Filter from './Components/Filter';
import StarRating from './components/StarRating';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const catNames = [
    "Whiskers", "Mittens", "Fluffy", "Simba", "Luna", "Tiger", "Bella", "Oliver",
    "Cleo", "Leo", "Shadow", "Smokey", "Molly", "Felix", "Nala", "Oreo", "Lucy",
    "Chloe", "Max", "Lily", "Charlie", "Salem", "Ziggy", "Lola", "Garfield", "Milo",
    "Sophie", "Cupcake", "Helix"
  ];

  const [name, setName] = useState(""); // choose from catNames
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState(new Map());

  const makeQuery = () => {
    let limit = 1;
    let has_breeds = 1;
    let query = `https://api.thecatapi.com/v1/images/search?limit=${limit}&has_breeds=${has_breeds}&api_key=${ACCESS_KEY}`;
    callAPI(query).catch(console.error);

    setName(catNames[Math.floor(Math.random() * catNames.length)]);
  }

  const callAPI = async (query) => {
    let count = 0;
    while (true) {
      const response = await fetch(query);
      const json = await response.json();
      count++;
      // console.log(json[0]);

      if (json === null || !json[0].hasOwnProperty('breeds')) {
        alert("Oops! Something went wrong. Check api key!")
        return;
      }

      if (checkIfItemIsEligible(json)) {
        console.log(json);
        setItems((items) => [...items, json[0]]);
        // console.log(items[0].breeds[0].name);
        // console.log(items)
        break;
      }
    }
    console.log(`called API ${count} times.`);
  }

  const checkIfItemIsEligible = (item) => {
    for (let [key, value] of filters) {
      // console.log("key: ",key," value: ",value)
      if (value === 'name' && item[0].breeds[0].name === key) {
        return false;
      } else if (value === 'weight' && item[0].breeds[0].weight.imperial === key) {
        return false;
      } else if (value === 'origin' && item[0].breeds[0].origin === key) {
        return false;
      } else if (value === 'life_span' && item[0].breeds[0].life_span === key) {
        return false;
      }
    }
    return true;
  }

  const handleAddFilter = (e) => {
    // console.log("key: ", e.target.textContent.trim(), " value: ", e.target.name)
    addFilters(e.target.textContent.trim(), e.target.name);
  }

  const addFilters = (key, value) => {
    setFilters(prevMap => {
      const newMap = new Map(prevMap);
      newMap.set(key, value);
      return newMap;
    });
  }

  const handleRemoveFilter = (e) => {
    removeFilters(e.target.textContent.trim());
  }

  const removeFilters = (key) => {
    setFilters(prevMap => {
      const newMap = new Map(prevMap);
      newMap.delete(key);
      return newMap;
    });
  }

  return (
    <div>
      <div className="whole-page">
        <h1>Trippin&#39; on Cats</h1>
        <h3>Discover cats from your wildest dreams!</h3>😺😸😹😻😼😽🙀😿😾
        <br />
        <br />
        <div className="discover-container">
          {items && items.length > 0 && (
            <div className="listing-container">
              <h2>{name}</h2>
              <div className="buttons">
                <button onClick={handleAddFilter} name="name" type="attribute" className="attribute-buttons">{items[items.length - 1].breeds[0].name}</button>
                <button onClick={handleAddFilter} name="weight" type="attribute" className="attribute-buttons">{items[items.length - 1].breeds[0].weight.imperial} lbs</button>
                <button onClick={handleAddFilter} name="origin" type="attribute" className="attribute-buttons">{items[items.length - 1].breeds[0].origin}</button>
                <button onClick={handleAddFilter} name="life_span" type="attribute" className="attribute-buttons">{items[items.length - 1].breeds[0].life_span} years</button>
                <br />
                <br />
              </div>
              <img className="cat-pic" src={items[items.length - 1].url} alt="random image from Cat API"
                width="250px" height="250px" />
              <StarRating items={items}/>
            </div>
          )
          }

          <br />
          <button type="discover" className="discover-btn" onClick={makeQuery}>🔀 Discover!</button>
        </div>
      </div>

      <div className="sideNav">
        <h2>Ban List</h2>
        <h4>Select an attribute in your listing to ban it</h4>
        {/* {console.log(filters)} */}
        <Filter filters={filters} handleRemoveFilter={handleRemoveFilter} />
      </div>

      <div className="history-sidebar">
        <h2>Who have we seen so far?</h2>
        <History items={items} />
      </div>

    </div>

  )
}

export default App
