import React from 'react';
import MoviesPresenter from './MoviesPresenter';
import {movies} from '../../api';

export default class MoviesContainer extends React.Component{
    state = {
        loading:true,
        upcoming:null,
        popular:null,
        nowPlaying:null,
        error:null
    }

    async componentDidMount(){
        let upcoming,popular,nowPlaying,error;

        try{
            ({data:{results:upcoming}} = await movies.getUpcoming());
            ({data:{results:popular}} = await movies.getPopular());
            ({data:{results:nowPlaying}} = await movies.getNowPlaying());
            this.setState({
                upcoming,
                popular,
                nowPlaying
            })
        }catch(error){
            error='Cant get movies';
        }finally{
            this.setState({loading:false,popular,upcoming,nowPlaying,error})
        }
    }
    render(){
        const {loading} = this.state;
      
        return <MoviesPresenter loading={loading}/>
    }
}