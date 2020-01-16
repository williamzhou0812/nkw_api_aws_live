const  express = require('express');
const  path = require('path');
const  bodyParser  = require('body-parser');
const  app = express();
const  multer = require('multer');
const  http = require('http').Server(app);
const  io = require('socket.io')(http);
//const server = require('http').createServer(app);
//const io = require('socket.io')(server);
const connectDB = require('./config/db');
var cors = require('cors')
const enforce = require('express-sslify');

// var io = require('socket.io')(app);

// connect MongoDB
connectDB();

//Init Middleware
// app.use(enforce.HTTPS({ trustProtoHeader: true }))
app.use(cors());
// Serve CMS 
// app.use('/touchscreen/cms/admin', express.static(__dirname + '/client/build'))
// app.get('/touchscreen/cms/admin', (req, res) => {
//     res.sendFile(path.join(__dirname, '/client/build', 'index.html'))
// }), 

// ServerView 
app.use(express.static(__dirname + '/views/build'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/build', 'index.html'))
}), 
  
// // app.use(express.json({extended: false}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}))


// Test service worker
// app.get('/server-worker.js', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '/view/build','service-worker.js'));
// })

//end

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// app.use(multer().single('uploads'))

// // // set public folder to serveic image and videos
app.use(express.static(__dirname + '/public/media'));

app.use(express.static(path.join(__dirname, 'uploads')));


app.get('/', (req, res) => res.json({msg: 'Welcom to NKW CMS API ...'}));


// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/touchscreenuntil', require('./routes/touchscreenutil'));

app.use('/api/header', require('./routes/header'));
app.use('/api/showcase', require('./routes/showcase'));
app.use('/api/about', require('./routes/about'));
app.use('/api/ourteam', require('./routes/ourteam'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/library', require('./routes/imagelibrary'));
app.use('/api/ourteampage', require('./routes/ourteam_page'));
app.use('/api/videoedit',  require('./routes/video-edit'));


app.use('/api/exploreheader', require('./routes/explore/explore_header'));
app.use('/api/explorelanding', require('./routes/explore/explore_landing'))
app.use('/api/disvisions', require('./routes/explore/disvisions'));
app.use('/api/disvisionsheader', require('./routes/explore/disvisions_header'));
app.use('/api/contents', require('./routes/explore/contents'));


// improt each sub details router 
app.use('/api/nkwfreshdetails', require('./routes/explore/disvisionsDetails/nkw_fresh'));
app.use('/api/expacpng', require('./routes/explore/disvisionsDetails/expac_png'));
app.use('/api/qps', require('./routes/explore/disvisionsDetails/qps'));
app.use('/api/hiddenvalley', require('./routes/explore/disvisionsDetails/hidden_valley'));
app.use('/api/nkwcatering', require('./routes/explore/disvisionsDetails/nkw_catering'));
app.use('/api/mountaincoffee', require('./routes/explore/disvisionsDetails/mountain_coffee'));
app.use('/api/pngcommericalvehicles', require('./routes/explore/disvisionsDetails/png_commerical_vehicles'));
app.use('/api/aps', require('./routes/explore/disvisionsDetails/aps'));
app.use('/api/jet', require('./routes/explore/disvisionsDetails/jet'));
app.use('/api/mtotraining', require('./routes/explore/disvisionsDetails/mto_training'));
app.use('/api/pcs',require('./routes/explore/disvisionsDetails/pcs'));
app.use('/api/nkwbuilding', require('./routes/explore/disvisionsDetails/nkw_building'));
app.use('/api/hvc', require('./routes/explore/disvisionsDetails/hvc'));



// route for explore Detail
app.use('/api/nkwcateringexpdetail', require('./routes/explore/exploreDetails/nkw_catering'));
app.use('/api/logisticstranport', require('./routes/explore/exploreDetails/logistics_transport'));
app.use('/api/nkwfreshexpdetail', require('./routes/explore/exploreDetails/nkw_fresh'));
app.use('/api/mtotrainingexpdetail', require('./routes/explore/exploreDetails/mto_training'));
app.use('/api/nkwbc', require('./routes/explore/exploreDetails/nkw_building_and_construction'));
app.use('/api/procurementexpdetail', require('./routes/explore/exploreDetails/procurement'));
app.use('/api/campmanagement', require('./routes/explore/exploreDetails/camp_management'));

//Single routers 
app.use('/api/cards', require('./routes/explore/pcscards/pcscards'));

const PORT = process.env.PORT || 5000;


io.on('connection', () => {
    console.log('NKW TouchScreen is connected');
    // socket.on('change color', (color) => {
    //     console.log('Color Change to: ', color)
    //     io.sockets.emit('change color', color)
    // })
})
var server = http.listen(PORT, () => {
        console.log('server is running on port', server.address().port);
} )
//app.listen(PORT, () => console.log(`NKW_API Server run on Port ${PORT} `));