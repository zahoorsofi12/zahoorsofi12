let baseUrl = "https://elearning.logichubss.com/api/";

const ajax = async function (requestObject, isJson = true) {

          let object = {
                    method: requestObject.method,
                     
                    headers: {
                              accept: requestObject.accept || "application/json",
                              //"authorization":"bearer "+getToken()
                              // "content-type" : "application/json"
                              // should be adding conditinally
                    }
           
        }

          if (requestObject.method.toUpperCase() != "GET") {
                    object.body = requestObject.body;
                    if (!requestObject.ignoreContentType) {
                               
                              object.headers["Content-Type"] = requestObject.contentType || "application/json";
                    }
          }

          try {
                    let response = await fetch(baseUrl + requestObject.url, object);
                    let data;
                    if (response.ok) {
                              if (isJson) data = await response.json();
                              if (requestObject.success) {
                                        requestObject.success(data, response.headers, response.status, response.statusText)
                              }
                    }
                    else {
                              if (requestObject.error) {
                                        requestObject.error(data, response.error, response.status, response.statusText)
                              }
                    }
          } catch (ex) {
                    console.error(ex)
          }
}

const get = async function (requestObject) {
          requestObject.method = "GET";
          await ajax(requestObject);
}
const post = async function (requestObject) {
  requestObject.method = "POST";
  // requestObject.body = JSON.stringify(requestObject.body),
 
  requestObject.body = JSON.stringify(requestObject.body) || {},
            await ajax(requestObject);
}