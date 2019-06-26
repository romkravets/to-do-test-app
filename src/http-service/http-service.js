export class HTTPService {
   get(url, successCallbak, errorCallback) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();
      xhr.onreadystatechange = function() {
         if (xhr.readyState === 4) {
            if(xhr.status === 200) {
               const parseData = JSON.parse(xhr.response);
               successCallbak(parseData);
            } else {
               errorCallback(xhr);
            }
         }
      }
   }
}