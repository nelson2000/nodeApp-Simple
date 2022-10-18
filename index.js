const express = require ('express');
const path = require ('path');
const fs = require ('fs');
const os = require ('os')
const app = express ();
 var hostname = os.hostname();
 var cpu = os.cpus();
var pid = process.pid;
const appVersion = '3.0';

app.get('/',(req, res) => {

    var msg = ` <h1>Hello Nelson Nwajie!</h1>
    <h2>
    Process ID: ${pid}<br>
    Running on: ${hostname}<br>
    App Version: ${appVersion}
    </h2>`
    res.send(msg)
   


});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));