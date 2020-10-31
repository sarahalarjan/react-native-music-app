import axios from "axios";
export default class Requests {
    async getHapiHeaders() {
       
          return {           
            "x-happi-key": "091d03vwXfH9VYCYkdDyJynil9YIYY6QMA3ZqvZqU3gOfmn4fCaRk4YT"
          };
        
      }
  
    async get(url) {
      try {
        var config = {};
        config.headers = await this.getHapiHeaders();
        var response = await axios.get(url, config);
       
        return response;
      } catch (ex) {
        throw ex.toString();
      }
    }
   
  }