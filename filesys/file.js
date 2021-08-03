let fs=require("fs");
let path=require ("path");

let inputArr=process.argv.splice(2);

let dirpath=process.cwd();
console.log(dirpath);
/*
let a1=inputArr[0];


let dirpath=process.cwd();
let cPath=path.join(dirpath,a1);
let arr=inputArr.splice(1,4);
let isModulePresent=fs.existsSync(cPath);

if(isModulePresent)
{
    console.log("Directory already been created");
}
else{

fs.mkdirSync(cPath);
for(let i=0;i<arr.length;i++)
{

let mPath=path.join(cPath,arr[i]);


fs.mkdirSync(mPath);

//let ePath=path.join(mPath,"module");
//console.log(ePath);
for(let j=1;j<=5;j++)
{
    //let pPath=process.cwd();
    let ePath=path.join(mPath,"Module"+j);
    fs.mkdirSync(ePath);
let fPath=path.join(ePath,"content.md");
//console.log(fPath);   
fs.writeFileSync(fPath,"hello chutad"+j+arr[i]);
}

}

}
*/

//console.log(cPath);



