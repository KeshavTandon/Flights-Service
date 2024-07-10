const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    const { City, Airport } =require('./models');
    // const city=await City.findByPk(1);
    // console.log(city);
    // const kmpairport=await city.createAirport({name:'Kempegowda',code:'BLR'});
    // console.log(kmpairport);
    // await City.destroy({
    //     where:{
    //         id:9
    //     }
    // });
});
