
const urlMetadata = require('url-metadata')
urlMetadata('https://www.tiktok.com/@linhdan_9669/video/7077605707788356890?is_from_webapp=1&sender_device=pc&web_id=7075835694674052610').then(
  function (metadata){
     console.log(metadata)
     },
     function (error) {
       console.log(error)
     })
