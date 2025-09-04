import { useEffect, useState } from "react";
import ResturentCard from "./ResturantCard"
import ResturantCard from "./ResturantCard";


const ResturentsList = ()=>{
    const[resList, setResList]= useState([]);

    const fetchData = async ()=>{
        try{
            const res = await fetch("http://localhost:3001/restaurants");
            const data = await res.json();
            setResList(data)
        }catch(e){
            console.log(e,"error")
        }
        
    }
    
    useEffect(()=>{
        fetchData();
    },[])

    // console.log(resList[0].name,"resturant list")

    return(
        <div>
            <h2>Resturent List</h2>
            <div className="body">
            {resList.map((item,i)=>(
                <ResturantCard key={item.id} item={item}/>
            ))}
            </div>
        </div>
    )
}

export default ResturentsList;