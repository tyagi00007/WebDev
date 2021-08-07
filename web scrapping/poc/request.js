let request=require('request');

request("https://www.google.com/",cb);
console.log("before");
function cb(error,response,html)
{

    if(error)
    {
        console.log(error);
    }
    else if(response.statusCode==404)
    {
        console.log("page not found");
    }
    else{
        console.log(html);
        console.log("html :",)
    }
}
console.log("after");