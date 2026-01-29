const getIconUrl = (name) =>{
    return new URL(`../assets/icons/${name}`,  import.meta.url).href
}
export { getIconUrl };

