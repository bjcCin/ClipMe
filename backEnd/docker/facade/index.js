const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const port = process.env.PORT || 8081
const app = express();
const name = "FACADE"

app.use(bodyParser.json());

const services = {
    users: "clipme",
    clipping: "clipme"
}

var router = express.Router(); 

router.use(function(req, res, next) {
    console.log(`REQUEST ${name}`);
    next();
});

router.get('/', function(req, res) {
    res.json({hello: 'world'});   
});

//LOGIN
router.route('/login')
    .post(function(req, res){
        console.log('post');
        controller(services.users, req, res)
    });

//USERS
router.route('/users')
    .get(function(req, res) {
        controller(services.users, req, res)
    })
    .post(function(req, res){
        controller(services.users, req, res)
    });

router.route('/users/:id')
    .get(function(req, res) {
        controller(services.users, req, res)
    })
    .delete(function(req, res) {
        controller(services.users, req, res)
    })
    .put(function(req, res) {
        controller(services.users, req, res)
    });

//TEMPLATES
router.route('/templates')
    .get(function(req, res) {
        controller(services.clipping, req, res)
    })
    .post(function(req, res){
        controller(services.clipping, req, res)
    });

router.route('/templates/:id')
    .get(function(req, res) {
        controller(services.clipping, req, res)
    })
    .delete(function(req, res) {
        controller(services.clipping, req, res)
    })
    .put(function(req, res) {
        controller(services.clipping, req, res)
    });

//CLIPPING
router.route('/clipping')
    .get(function(req, res) {
        controller(services.clipping, req, res)
    })
    .post(function(req, res){
        controller(services.clipping, req, res)
    });

router.route('/clipping/:id')
    .get(function(req, res) {
        controller(services.clipping, req, res)
    })
    .delete(function(req, res) {
        controller(services.clipping, req, res)
    })
    .put(function(req, res) {
        controller(services.clipping, req, res)
    });

app.use(router);

function controller(service, req, res){
    let method = req.method
    let url = req.url
    let accept = req.headers.accept
    let json = req.body
    // console.log(method, id, body, url, accept)

    var options = {
        url: `http://${service}:8080${url}`,
        method,
        headers: {
            Accept: accept
        }
    }

    switch(method){
        case 'GET':
            break;
        case 'DELETE':
            break;
        case 'PUT':
            options['json'] = json
            break;
        case 'POST':
            options['json'] = json
            break;
        default:
            break;
    }

    request(options, function (error, data, body){
        // console.log(body)
        switch(method){
            case 'GET':
                res.json(JSON.parse(body));
                break;
            case 'DELETE':
                res.status(data.statusCode).send()
                break;
            case 'PUT':
                res.json(body);
                break;
            case 'POST':
                res.json(body);
                break;
            default:
                break;
        }
    });
}

app.use(function(req, res){
    res.status(400).json({
        error: true
    })
});

app.listen(port, function (){
    console.log(`app listening on port ${port}!`)
});