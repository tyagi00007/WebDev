let request=require('request');
let cheerio=require('cheerio');

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard",cb);
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
        dataExtractor(html);    
    }
    
}

function dataExtractor(html)
{

let searchTool=cheerio.load(html);

let bowlers=searchTool(".table.bowler tbody tr");
//console.log(bowlers);
for(let i=0;i<bowlers.length;i++)
{
let cols=searchTool(bowlers[i]).find("td");
//console.log(cols);
let eElem=searchTool(cols[0]).find('a');
let link=eElem.attr("href");
//console.log(link);
let fullLink="https://www.espncricinfo.com"+link;
request(fullLink,cb2);



}



}

function cb2(error,response,html)
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
       
       birthday(html);    
       console.log("`````````````````````````");
    }
}

function birthday(html)
{

let searchTool =cheerio.load(html);

let birthdayArr=searchTool(".player-card-description");

let player=searchTool(birthdayArr[0]).text();
let age=searchTool(birthdayArr[2]).text();


console.log(player+" "+age);
}
console.log("after");