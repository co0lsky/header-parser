var express = require("express")
var app = express()

app.get('/', (req, res) => {
    console.log(req.headers)
    
    var re = /\((.*?)\)/;
    var m;
     
    if ((m = re.exec(req.headers['user-agent'])) !== null) {
        if (m.index === re.lastIndex) {
            re.lastIndex++;
        }
    }
    
    res.send(JSON.stringify({
        'ipaddress': req.headers['x-forwarded-for'],
        'language': req.headers['accept-language'],
        'software': m[0]
    }))
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
})