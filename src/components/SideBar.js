import React, {useState, useEffect} from 'react'
import axios from "axios";

import crosscircle from '../Assets/Icons/x-circle.svg'

function SideBar({showSidebar, sideBarToggleCopy}) {
  
  const toggleSidebarCopy = () => {
    sideBarToggleCopy(!showSidebar);
   
  }


  const [category, setCategory] = useState([]);

    const fetchCategory = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products/categories")
        .catch((err) => {
            console.log("Error from checkbox component", err)
        });
        setCategory(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        fetchCategory();
    }, [])


  return (
    <aside className={`${showSidebar ? ' sideBar sideBarToggle' : 'sideBar sideBar-active'}`} role='complementary'>
      
      <p className='firstHead'>Clothing / Women’s / Outerwear</p> 
      <div className='filterHead borderBottom'><p className='py sideHeading'>Filters</p><img src={crosscircle} onClick={toggleSidebarCopy} className='crossHide' alt='cross icon'/></div>
      <p className='sideHeading'>Attribute</p>
      {category.map(value => {
                return (
                    <div className='py05'>
                        <input type="checkbox" />
                        <label>&nbsp;{value}</label>
                    </div>
                )
            })}
      
    </aside>
  )
}

export default SideBar