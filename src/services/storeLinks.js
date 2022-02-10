// Buscar Links salvos

export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || []

    return linksSaves

}



// Savar um link no storage

export async function saveLink(key, newLink) {

    let linksStored = await getLinksSave(key)

    // Verificação para saber se um link já existe

    const hasLink = linksStored.some(link => link.id === newLink.id)

    if (hasLink) {
        console.log('esse link já existe na sua lita')
        return;
    }


    // Adicionar esse novo link na lista

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('salvo com sucesso')


}


// Deletar um link já salvo


export function deleteLink(links, id) {
    let myLinks = links.filter(item => {
        return (item.id !== id)
    })


    localStorage.setItem('254', JSON.stringify(myLinks))
    console.log('link deletado com sucesso')

    return myLinks
}