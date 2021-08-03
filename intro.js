function processData(input) {
    //Enter your code here
let sp=1;
let n=input;
    let stars=n+1;
    for(let i=1;i<=n;i++)
    {
        
            for(let k=1;k<=Math.floor(stars/2);k++)
            {
                
                process.stdout.write("*")
            }
            
            for(let j=1;j<=sp;j++)
            {
                process.stdout.write(" ")
            }
            
            
                for(let l=Math.floor(stars/2)+1;l<=stars;l++)
            {
               process.stdout.write("*")
            }
        if(i<=Math.floor(n/2))
       { sp+=2;
            stars-=2;
        }
        
        else
        {
         sp-=2;
            stars+=2;
            
        }
        
        
        console.log();
    }



} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
_input += input;
});

process.stdin.on("end", function () {
processData(_input);
});
