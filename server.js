const express = require('express');
const app = express();
const path = require('path');

const artistRouter = require('./scripts/routerArtists.js');
artistRouter.handleAllArtist(app);
artistRouter.handleByArtistCountry(app);

const galleriesRouter = require('./scripts/routerGalleries.js');
galleriesRouter.handleAllGalleries(app);
galleriesRouter.handleByGalleriesCountry(app);

const paintingsRouter = require('./scripts/routerPaintings.js');
paintingsRouter.handleAllPaintings(app);
paintingsRouter.handleByPaintingsID(app);
paintingsRouter.handleByPaintingMinMax(app);
paintingsRouter.handleByPaintingArtistID(app);
paintingsRouter.handleByPaintingsGalleryID(app);
paintingsRouter.handleByPaintingTitle(app);
paintingsRouter.handleByPaintingsColour(app);

const port = process.env.PORT || 8080;
app.listen(port, () =>{
    console.log("server running on port: " + port);
})


