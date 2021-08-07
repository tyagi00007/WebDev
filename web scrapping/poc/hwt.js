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
let hwt=0;
let searchTool=cheerio.load(html);
let hwm;
let bowlers=searchTool(".table.bowler tbody tr");
//console.log(bowlers);
for(let i=0;i<bowlers.length;i++)
{
let cols=searchTool(bowlers[i]).find("td");
//console.log(cols);
let names=searchTool(cols[0]).text();
let wickets=searchTool(cols[4]).text();
if(hwt<=wickets)
{
    hwt=wickets;
    hwm=names
}




}
console.log(hwm+" "+hwt);


}




console.log("after");