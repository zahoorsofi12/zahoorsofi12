let baseUrl='https://elearning.logichubss.com/api/';
async function getData(path,isjson=true)
{
    
    try{
        let url=baseUrl+path
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
async function deleteData(path,id)
{
    let url=baseUrl+path+id
    console.log(url)
    try{
       let response=await fetch(url,{method:"DELETE"
    
    })
    }
    catch(ex){
        console.log(ex);
    }
}
async function PostData()