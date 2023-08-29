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
module.exports = { getdata: getdata }