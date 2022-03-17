import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";

import SearchBar from './SearchBar.jsx';





export default function Home(){
    
    
    return(
        <div >
           
     
     
           
            <h2 className="letrasMenu">Home</h2>
         
          
            <h2 className="letrasMenu">shop</h2>
            <h2 className="letrasMenu">about</h2>
            <h2 className="letrasMenu">contact</h2>
            <h2 className="letrasMenu">login</h2>
            <h2 className="letrasMenu">cart</h2>

            <div >
<SearchBar />
        <label className='letraSelect'>Order by: <select onChange="{e => handleSortName(e)}">
            <option name="all" value='all' >All</option>
            <option name='asc' value='asc'>A-Z</option>
            <option name='desc' value='desc'>Z-A</option>
        </select></label>


        <label className='letraSelect'>Order by Rating: { <select onChange="{e => handleSortRating(e)}">
            
             <option name="all" value='all' >All</option>
            <option name='asc' value='asc'>1-9</option>
         
        </select> }</label>

        <label className='letraSelect'>Filter by Category: <select onChange="{e => handleFilterCat(e)}">
            <option value='all'> -- All --</option>
            <option value="Audio">Audio</option>
            <option value="Video">Video</option>
            <option value="Electronics">Electronics</option>
            <option value="Laptops">Laptops</option>
            
        </select></label>

        <label className='letraSelect'> Filter by Price
            <select onChange="{handleFilterPrice}" >
                <option value='All'> -- All --</option>
                <option value='Low price'> -- Low price --</option>
                <option value='High price'> -- Hight price--</option>
                {/* {activities.map(activity => (
                   
                    <option key={activity.id} value={activity}>{activity}</option>
                ))} */}

            </select>
        </label>   

         

        </div>
        <div >

            <Cards/>
            </div>
            </div>
    )
    
}