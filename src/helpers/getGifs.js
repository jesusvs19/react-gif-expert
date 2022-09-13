export const getGifs = async (category) => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=6WHIGdMqsD3BbRxy9NNHtOc3n81CHGfF&q=${category}&limit=10`);
    const data = await resp.json();
    const gifs = data.data.map(gif => ({
            id:gif.id,
            title:gif.title,
            img:gif.images.downsized.url
        })
    )
    console.log(gifs);
    return gifs;
}