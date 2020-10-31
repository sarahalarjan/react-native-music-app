import Urls from "./Urls";
import Requests from './Request'
export default class ArtistsProvider {

  async getAll(pageNum) {
    try {
      var url=await new Urls().Artists_URL()+"?page="+pageNum
      var response=await new Requests().get(url)
     
      return response.data.result;
    } catch (error) {
      throw error;
    }
  }
  async getArtistAlbums(id_artist) {
    try {
      var url=await new Urls().Artists_URL()+"/"+id_artist+"/albums"
      var response=await new Requests().get(url)
     
      return response.data.result;

     
    } catch (error) {
      throw error;
    }
  }

  async search(q) {
    try {
      var url=await new Urls().Search_URL()+"?q="+q+"&limit="+50
      var response=await new Requests().get(url)
     
    
      return response.data.result;
      
    } catch (error) {
      throw error;
    }
  }

  
}
