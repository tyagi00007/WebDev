let request=require('request');
let cheerio=require('cheerio');

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary",cb);
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
let elem=searchTool(".match-comment-wrapper .match-comment-long-text");
let module=searchTool(elem[0]).text();
console.log("moduleName",module);

}




console.log("after");