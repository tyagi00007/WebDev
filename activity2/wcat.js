let fs=require("fs");
let path=require("path");

let inputArr=process.argv.slice(2);

let optionArr=[];
let filesArr=[];


for(let i=0;i<inputArr.length;i++)
{
    if(inputArr[i].charAt(0)=="-")
    {
      optionArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }
}

let content="";
for(let i=0;i<filesArr.length;i++)
{

   let ans= fs.existsSync(filesArr[i]);
   if(ans==false)
   {
       console.log("wrong path");
   }
   else{
    let data=fs.readFileSync(filesArr[i]);
   content+=data+"\r\n"; 
    
}

}


let contentArr=content.split("\r\n");
//console.log(contentArr);
let sPresent=optionArr.includes("-s")
if(sPresent){
for(let i=1;i<contentArr.length;i++)
{
    if(contentArr[i]=="" && contentArr[i-1]=="")
    {
       contentArr[i]=null;
    }
    else if(contentArr[i]=="" && contentArr[i-1]==null)
    {
        contentArr[i]=null;
      }
}

let temp=[];

for(let i=0;i<contentArr.length;i++)
{
    if(contentArr[i]!==null)
    {
        temp.push(contentArr[i]);
    }
}
contentArr=temp;
console.log(contentArr.join("\n"));

}


