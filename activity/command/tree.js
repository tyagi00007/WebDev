let fs=require("fs");
let path=require("path");

function tree(src){
    if(src==undefined)
src=process.cwd();
let content=  fs.readdirSync(src);
//├───
//└───

let parentFolderName=path.basename(src);
let completePath="└───"+parentFolderName;

for(let i=0;i<content.length;i++)
{
completePath=completePath+"\n\t"+"├───"+content[i];
}
console.log(completePath);



}
module.exports ={
fxn:tree

}
