let fs=require('fs');
let path=require('path');

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

let dPath;
function organizeFn(src) {
    console.log("organize  command executed with path: " + src);
    // code 

    if(src===undefined)
    {
        console.log("enter correct path");
        return;

    }
    else{
        let doesExist=fs.existsSync(src);
        if(doesExist)
        {
       dPath= path.join(src,"organized_files");

       if(fs.existsSync(dPath)==false)
         fs.mkdirSync(dPath)
        

        }
        else{
            console.log("enter correct path");
        return;
        }
        organizeHelper(src,dPath);
    }
}
function organizeHelper(src,dPath){
    let cName=fs.readdirSync(src);
    for(let i=0;i<cName.length;i++)
    {
        let cAddress=path.join(src,cName[i]);

        let cFile=fs.lstatSync(cAddress).isFile();
    if(cFile)
    {
//console.log(cName[i]);
let category=getCategory(cName[i]);
console.log(cName[i],"-->>>", category);
/////////////////////copy////////////////
sendfiles(cAddress,dPath,category);
    }
    }
}
function getCategory(eName)
{
    let ext=path.extname(eName);
    ext=ext.slice(1);
    for(let type in types)
    {
        let tempArr=types[type];
        for(let i=0;i<tempArr.length;i++)
    {
       if(tempArr[i]==ext)
       {
           return type;
       }
    }
    
    }
    return "others";
}
function sendfiles(sFile,dPath,category)
{

let categoryPath=path.join(dPath,category);
if(fs.existsSync( categoryPath)==false)
{
    fs.mkdirSync(categoryPath);

}
let fPath=path.basename(sFile);
let dfath=path.join(categoryPath,fPath);
fs.copyFileSync(sFile,dfath);
console.log(fPath,"copied to",dfath);
}
module.exports = {
    organizefxn: organizeFn
}