const fs = require('fs');

async function getdata(req, res) {
    try {
        const io = req.app.get("socketio");
        console.log(io);

        io.emit("message", 'westly');
    }
    catch (err) {
        console.log(err);
    }

}
async function createuser(){
    try{
let user={"user":"ddavid","password":"123wes"}
const filePath = 'users.json'; // Specify the file path
fs.writeFile(filePath, JSON.stringify(user), (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Data has been written to', filePath);
  }
});


    }
    catch(err){
        console.log(err);
    }
}
module.exports = { getdata: getdata,createuser:createuser }