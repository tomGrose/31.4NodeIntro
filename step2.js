const fs = require('fs');
const argv = process.argv[2];
const axios = require('axios');

function cat(file){
    fs.readFile(file, "utf8", function(err, data) {
        if (err) {
          console.log("error");
          Process.exit(1);
        }
        console.log(data);
      });
}


async function webcat(url){
    try{
      const webpage = await axios.get(url);
      console.log(webpage.data)
    } catch {
      console.log(`Error getting website ${url}`)
      process.exit(1);
    }
    
}


if (argv.includes(".com")){

    webcat(argv);
} else {
    cat(argv);
}