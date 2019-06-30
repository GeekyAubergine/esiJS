module.exports = dynamicItemInfo

let axios = require('axios')
let { link } = require('../../esi.json')

async function dynamicItemInfo(itemID, typeID) {
    let returningData;
    if (!itemID) {
        console.error(`The function 'dynamicItemInfo' needs a item ID as its first argument!`)
        return 'dynamicItemInfo needs item ID'
    }
    if (!typeID) {
        console.error(`The function 'dynamicItemInfo' needs a type ID as its first argument!`)
        return 'dynamicItemInfo needs type ID'
    }

    await axios.get(`${link}dogma/dynamic/items/${typeID}/${itemID}/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })
    return returningData;
}