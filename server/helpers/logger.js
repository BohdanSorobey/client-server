const fs = require('fs');

function writeLog(message){
    try{
        fs.appendFile('log.txt', new Date() + ": " + message + "\n", error => {
            if(error){
                console.log(error);
                return;
            }
        });
    }catch{
        return;
    }
}

module.exports = {
    writeLog
};