

export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=8mMhaXVgJoeF2N7HAb3g1jQU7G72mhhH&q=${ category }&limit=10`;
    //fecth api: forma nativa para traer o hacer peticiones php
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}