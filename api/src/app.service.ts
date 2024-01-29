import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import MovieResponse from './app.model';

@Injectable()
export class AppService {

  async movie(title: string): Promise<MovieResponse> {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer <MOVIEDB TOKEN>`
        ,
      },
    };

    try{

      const movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${title}`, config)
      if(movieResponse.data.results.length == 0){
        throw new Error('Movie not found')
      }
      const movie = movieResponse.data.results[0]
      const recommendations = await this.getRecommendations(title)
      return {
        date: movie.release_date,
        overview: movie.overview,
        title,
        recommendations: recommendations.data.data
      };
      

    }catch(e: any){
      throw new Error(e.message)
    }
    
  }

  async getRecommendations(title: string): Promise<any>{
    return await axios.get(`http://localhost:4200/${title}`)
  }
}
