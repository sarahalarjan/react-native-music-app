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
  async getAlbumTracks(id_artist,id_album) {
    try {
      var url=await new Urls().Artists_URL()+"/"+id_artist+"/albums"+"/"+id_album+"/tracks?"
      var response=await new Requests().get(url)
     
      return response.data.result;

     
    } catch (error) {
      throw error;
    }
  }
  async getTrackLyrics(id_artist,id_album,id_track) {
    try {
      var url=await new Urls().Artists_URL()+"/"+id_artist+"/albums"+"/"+id_album+"/tracks"+"/"+id_track+"/lyrics"
      var response=await new Requests().get(url)
     console.log(response)
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
