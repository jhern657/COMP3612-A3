const paintings = require('./paintingsDataProvider.js');


const handleAllPaintings = app => {
    //return all the companies when a root request arrives
    app.get('/paintings', (req, resp) => { resp.json(paintings) });
};

const handleByPaintingsID = app => {
    app.get('/painting/:id', (req, resp) => {
        const idMatch = paintings.filter(p => p.paintingID == req.params.id);
        if (idMatch.length > 0) {
            resp.json(idMatch);
        }
        else {
            resp.json({ "message": "no paintings for provided id" });
        }

    });
};

const handleByPaintingMinMax = app => {
    app.get('/painting/year/:min/:max', (req, resp) => {
        const yearMatch = paintings.filter(p => p.yearOfWork > req.params.min && p.yearOfWork < req.params.max);
        if (yearMatch.length > 0) {

            resp.json(yearMatch);
        }
        else {
            resp.json({ "message": "no painting for provided these years" });
        }
    });
};

const handleByPaintingArtistID = app => {
    app.get('/painting/artist/:id', (req, resp) => {
        const artistIDMatch = paintings.filter(p => p.artist.artistID == req.params.id);
        if (artistIDMatch.length > 0) {
            resp.json(artistIDMatch);
        }
        else {
            resp.json({ "message": "no painting for provided artist ID" });
        }
    });
};

const handleByPaintingsGalleryID = app => {
    app.get('/painting/gallery/:id', (req, resp) => {
        const galleryIDMatch = paintings.filter(p => p.gallery.galleryID == req.params.id);
        if (galleryIDMatch.length > 0) {
            resp.json(galleryIDMatch);
        }
        else {
            resp.json({ "message": "no paintings for provided gallery ID" });
        }

    });
};

const handleByPaintingTitle = app => {
    app.get('/painting/title/:text', (req, resp) => {
        const titleMatch = paintings.find(p => p.title.toLowerCase().includes(req.params.text));
        if (titleMatch) {
            resp.json(titleMatch);
        }
        else {
            resp.json({ "message": "no painting for provided title" });
        }
    });
};

const handleByPaintingsColour = app => {
    app.get('/painting/color/:name', (req, resp) => {
        const colorMatch = paintings.filter( p => {  
            for (let c of p.details.annotation.dominantColors){
                const match = c.name.toLowerCase().includes(req.params.name);
                if(match > 0){
                    resp.json(colorMatch);
                }
                else {
                    resp.json({ "message": "no painting for provided color" });
                }
            }
        });
    });
};


module.exports =
{
    handleAllPaintings, handleByPaintingsID, handleByPaintingMinMax, handleByPaintingArtistID, handleByPaintingsGalleryID, handleByPaintingTitle, handleByPaintingsColour
};