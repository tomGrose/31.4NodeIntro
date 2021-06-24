
const fs = require('fs');
const argv = process.argv[2];
const axios = require('axios');

function cat(file){
    // fs.readFile(file, "utf8", function(err, data) {
    //     if (err) {
    //       console.log("error");
    //       Process.exit(1);
    //     }
    //     const fileData = await data;
        
    //   });
    try{
        const content = fs.readFileSync(file, 'utf8', )
        return content;
    } catch {
        console.log("Error reading file")
        process.exit(1);
    }
}


async function webcat(url){
    try{
      const webpage = await axios.get(url);
      return webpage.data
    } catch {
      console.log(`Error getting website ${url}`)
      process.exit(1);
    }
    
}

async function writeToFile(newFile, from){
    let data = null;
    if (from.includes(".com")){
        data = await webcat(from);
    } else {
        data = cat(from);
    }
    fs.writeFile(newFile, data, "utf8", function(err) {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        console.log(`No output, but ${newFile} contains the contents of ${from}`);
      });

}

async function checkType(argv){
    if (argv.includes(".com")){
        console.log(await webcat(argv));
    } else if(argv === "--out"){
        writeToFile(process.argv[3], process.argv[4]);
    } else {
        console.log(cat(argv));
    }
}

checkType(argv);