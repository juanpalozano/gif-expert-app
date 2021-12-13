export const getGifs = async(category) => {
    const url       = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Hxs4RLxDMJ4cggkufUuiQvQH43vTRKBD`
    const response  = await fetch(url);
    let { data }    = await response.json();
    
    data = data.map( item => {
        return {
            id: item.id,
            title: item.title,
            url: item.images.downsized_medium.url,
        }
    });

    return data;
}