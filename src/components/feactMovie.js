import React from "react";
import "./feactMovie.css";
export default ({iten}) =>{
    console.log(iten);
    let firstDate = new Date(iten.first_air_date)
    let genres = []
    for(let i in iten.genres){
        genres.push(iten.genres[i].name);
    }
       return (
        <section className="feacture" style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${iten.backdrop_path})`
        
        }}>
            <div className="feactured--vertical">
            <div className="feactured--horizontal">
                <div className="feactured--name">{iten.original_name}</div>
                    <div className="feactured--info">
                        <div className="feactured--points">{iten.vote_average} pontos</div>
                        <div className="feactured--year">{firstDate.getFullYear()}</div>
                        <div className="feactured--seasons">{iten.number_of_seasons} temporada{iten.number_of_seasons !== 1 ?'s':'' }</div>
                    </div>
                    <div className="feactured--description">{iten.overview}</div>
                    <div className="feactured--buttons">
                        <a href="" className="feactured-watchButton"> Asistir</a>
                        <a href="" className="feactured-mylistButton">+ minha lista</a>
                    </div>
                    <div className="feactured--generes"><strong>Gêneros:</strong>{genres.join(', ')}</div>
            </div>
            </div>
        </section>
    );
}
