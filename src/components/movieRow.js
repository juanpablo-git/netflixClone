import React from "react";
import "./movieRow.css";
export default ({title,itens}) =>{
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                {itens.results.length> 0 && itens.results.map((iten,key)=>(
                      <div key={key} className="movieRow--iten"> 
                         <img src={`https://image.tmdb.org/t/p/w300${iten.poster_path}`}/>
                      </div>
                ))}
                </div>
                
            </div>
        </div>
    )
}