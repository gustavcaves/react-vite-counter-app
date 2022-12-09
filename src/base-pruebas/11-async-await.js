
export const getImagen = async() => {

    try {

        const apiKey = 'ED3y6c1IJ2NzgAmjgJXPazUFp8hZjrPI';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontro la imagen'
    }
    
    
    
}


// nano ~/.profile
// sudo nano /etc/environment

