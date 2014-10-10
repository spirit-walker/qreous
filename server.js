var express = require('express');
var app = express();
app.set('views', 'views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);


app.use('/public' , express.static(__dirname + '/public'));

app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});

app.get('/hello.txt', function(req, res){
    res.send('Hello World');
});

app.get('/', function(req, res){
    res.render('index', { title: 'images gallery'});
});