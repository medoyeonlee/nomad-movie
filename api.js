import axios from 'axios';

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key:"8bcbb936b0e25c7f6484ef80248f2be5",
        language:"en-US"
    }
})


export const movies = {
    getNowPlaying:()=>api.get('movie/now_playing'),
    getUpcoming:()=>api.get('movie/upcoming'),
    getPopular:()=>api.get('movie/popular'),
    getMovieDetail:(id)=>api.get(`movie/${id}`,{
        params:{
            append_to_response:'videos'
        }
    
    }),
    search:(term)=>api.get(`search/movie`,{
        params:{
            query:encodedURIComponent(term)
        }
    })
}

export const tv = {
    getTopRated:()=>api.get('tv/top_rated'),
    getPopular:()=>api.get('tv/popular'),
    getAiringToday:()=>api.get('tv/airing_today'),
    getShow:(id)=>api.get(`tv/${id}`,{
        params:{
            append_to_response:'videos'
        }
    }),
    search:(term)=>api.get(`search/tv`,{
        params:{
            query:encodedURIComponent(term)
        }
    })
}
