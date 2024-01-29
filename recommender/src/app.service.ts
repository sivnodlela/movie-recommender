import { Injectable } from '@nestjs/common';
import RecommendationsResponse from './app.model';
import axios from 'axios';

@Injectable()
export class AppService {
  
  async getRecommendations(title: string): Promise<RecommendationsResponse> {

    try{
      const recommendationsResponse = await axios.get(`http://127.0.0.1:8000/movies/${title}`)

      return {
        data: recommendationsResponse.data.data,
        message: recommendationsResponse.statusText,
        status: recommendationsResponse.status
      }

    }catch(e: any){
      return {
        data: null,
        message: e.message,
        status: 500
      }
    }
  }
}
