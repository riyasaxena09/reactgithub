import React from 'react'
import { useState,useEffect } from 'react';
function Api(){
    const [endpoint,setendpoint]=useState("");
    const [data,setdata]=useState([]);
    const [finaldata,setfinaldata]=useState("");
    useEffect(()=>{
        fetchdata();
    },[finaldata]);
    function fetchdata(){
   fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endpoint}`,{
	"method": 'GET',
	"headers": {
		'X-RapidAPI-Key': '35b3a0f992msh6c53f06b58217ddp1d19e9jsn02320aa08f85',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
}).then((res)=>{
	return res.json();
}).then((data)=>
{console.log(data.d)
    setdata(data.d)
}).
catch ((error)=> {
	console.error(error);
})
    }
function change(e){
setendpoint(e.target.value)

}

function submithandler(e){

e.preventDefault();
setfinaldata(endpoint)
}
  return (
    <div>
        <form onSubmit={submithandler}>
            <input type='search' placeholder='search...' value={endpoint} onChange={change}></input>
            <button>Submit</button>
        </form>
        {
            data.map((item)=>{
            if(item.i){
        
             return(       <div>
                    <p>{item.l}</p>
                  
                    {item.i && item.i.imageUrl && <img style={{width:"4vh"}} src={item.i.imageUrl} alt="Item Image" />}
                
                  </div>
             )
             }  
            })
        }
    </div>

  )
}

export default Api;