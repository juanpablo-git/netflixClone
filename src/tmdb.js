const API_BASE = "https://api.themoviedb.org/3";
const API_KEY = "adcb17af55858cdc6a2dff03d7f1e4e4";

const basicFetch = async (endpoint)=>{
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json
}


export default {
    getHomeList: async ()=>{
        return[
            {
            slug:'originals',
            title:"Originais do Netflix",
            itens:await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:"trending",
                title:'Recomendados para você',
                itens:await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            }
            ,{
                slug:'toprated',
                title:'em alta',
                itens:await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            }
            ,{
                slug:'action',
                title:'ação',
                itens:await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            }
            ,{
                slug:'comedi',
                title:'comedia',
                itens:await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            }
            ,{
                slug:'horror',
                title:'terror',
                itens:await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            }
            ,{
                slug:'romance',
                title:'romance',
                itens:await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            }
            ,{
                slug:'documentari',
                title:'documentarios',
                itens:await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            } ];
        },

        getMovieInfo: async (movieId,type)=>{
            let info ={}
            if(movieId){
                switch(type){
                   case "movie":
                       info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break; 
                    case "tv":
                        info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                        break;
                }
            }
            return info;
        }

}
