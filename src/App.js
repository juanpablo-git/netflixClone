import './App.css';
import tmdb from './tmdb';
import React,{useEffect, useState} from 'react';
import MovieRow from './components/movieRow';
import Feacture from './components/feactMovie'
import Header from './components/Header';
export default () =>{
  const[movieList,setMovieList]=useState([]);
  const[feactureData,setFeactureData]=useState(null)
  const[blackHeader,setBlackHeader] = useState(false)
  useEffect(
    ()=>{
      const loadAll =async ()=>{
        //Pegando a lista total
        let list = await  tmdb.getHomeList();
        setMovieList(list);
        console.log(list);

        //Pegando o filme em  destaque
        let originals =  list.filter(i=>i.slug === 'originals')
        let randomChose = Math.floor(Math.random()*(originals[0].itens.results.length -1)) 
        let chosen = originals[0].itens.results[randomChose]
        let chosenInfo= await tmdb.getMovieInfo(chosen.id,'tv');
        setFeactureData(chosenInfo)
      }
      loadAll()
    },[]);

    useEffect(()=>{
      const scrollListner = () =>{
        if(window.scrollY>10){
          setBlackHeader(true)
        }else{
          setBlackHeader(false)
        }
      }
      window.addEventListener('scroll',scrollListner)
      return () =>{
        window.removeEventListener('scroll',scrollListner)
      }
    },[])

    return (
      <div className="page">
        <Header black={blackHeader} />
        {
          feactureData && 
          <Feacture iten={feactureData} />
        }
        <section className="lists">
          {
            movieList.map((iten,key)=>(
            <MovieRow key={key} title={iten.title} itens={iten.itens} />
            ))
          }
        </section>
        <footer>
          Feito com <span role="img" aria-label="coração">❤</span> por Juan Pablo
          <br />
          Direitos reservados a Netflix <br />
          Dados pegos do Themoviedb.org
        </footer>
      </div>
    )

}
