const artist = require('./artistsDataProvider.js');


const handleAllArtist = app =>
{
    //return all the companies when a root request arrives
    app.get('/artists', (req,resp) => {resp.json(artist)});
};

const handleByArtistCountry = app => 
{
    app.get('/artists/:country', (req, resp) => {
        const countryMatch  = artist.filter(a => a.Nationality.toLowerCase() == req.params.country);
        if (countryMatch.length > 0)
        {
            resp.json(countryMatch);
        }
        else 
        {
            resp.json({"message": "no artists for provided country"});
        }
    });
};


module.exports = 
{
    handleAllArtist, handleByArtistCountry
};