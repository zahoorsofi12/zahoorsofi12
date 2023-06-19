let baseUrl='https://elearning.logichubss.com/api/';
async function getData(path,isjson=true)
{
    let url=baseUrl+path
    try{
        
          let response=await fetch(url);
          if(isjson)
          {
            return await response.json();
          }
          return await response.text();
    }
    catch(ex)
    {
        console.error(ex);
    }
    finally
    {
        console.log("hello");
    }    
}