const fs = require('fs');
const argv = process.argv[2];
console.log(argv)

function cat(file){
    fs.readFile(file, "utf8", function(err, data) {
        if (err) {
          console.log("error");
          process.exit(1);
        }
        console.log(data);
      });
}

cat(argv);