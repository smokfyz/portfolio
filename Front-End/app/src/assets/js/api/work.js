export default (database) => {
    function addItem(item) {
        let itemId = database.ref().child('items').push().key
        database.ref('items/' + itemId).set(item)
    }

    function updateItem(item) {
        let itemId = database.ref().child('items').push().key
        database.ref('items/' + itemId).update(item)
    }

    function removeItem(itemId) {
        database.ref('items/' + itemId).remove()
    }

    return {
        add: addItem,
        update: updateItem,
        remove: removeItem
    }
}