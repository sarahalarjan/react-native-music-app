

export default class Urls {
 
    happi_url="https://api.happi.dev/v1/music/"
    async getHapiHeaders() {
       
        return {           
          "x-happi-key": "091d03vwXfH9VYCYkdDyJynil9YIYY6QMA3ZqvZqU3gOfmn4fCaRk4YT"
        };
      
    }

  async Artists_URL() {
        return (this.happi_url + "artists")
      }
 async Search_URL() {
        return (this.happi_url )
      }

}