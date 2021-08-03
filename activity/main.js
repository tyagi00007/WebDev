let helpObj=require('./command/help');
let treeObj=require('./command/tree');
let organizeObj=require('./command/organize');

let inputArr=process.argv.slice(2);
let dirName=inputArr[0];
let inputPath=inputArr[1];
//console.log(inputPath);

if(dirName==="tree")
{
treeObj.fxn(inputPath);
}
if(dirName==="organize")
{
organizeObj.organizefxn(inputPath);
}
if(dirName==="help")
{
helpObj.fxn();
}


