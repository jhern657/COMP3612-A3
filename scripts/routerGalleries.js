const galleries = require('./galleriesDataProvider.js');


const handleAllGalleries = app =>
{
    //return all the companies when a root request arrives
    app.get('/galleries', (req,resp) => {resp.json(galleries)});
};

const handleByGalleriesCountry = app => 
{
    app.get('/galleries/:country', (req, resp) =>{
        const countryMatch  = galleries.filter( g => g.GalleryCountry.toLowerCase() == req.params.country.toLowerCase());
        if (countryMatch.length > 0)
        {
            resp.json(countryMatch);
        }
        else 
        {
            resp.json({"message": "no galleries for provided country"});
        }
    });
};


module.exports = 
{
    handleAllGalleries, handleByGalleriesCountry
}