let request=require('request');
let cheerio=require('cheerio');

request("https://www.npmjs.com/package/cheerio",cb);
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
        //console.log(html);
        console.log("html :",)
    }
    dataExtractor(html);
}

function dataExtractor(html)
{

let searchTool=cheerio.load(html);
let elem=searchTool("#readme>h1");
let module=elem.text().trim();
console.log("moduleName",module);

}




console.log("after");