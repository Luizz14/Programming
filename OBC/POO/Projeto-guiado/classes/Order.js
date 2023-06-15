module.exports = class Order {
    #total
    #items
    #user
    
    constructor( items, user ) {
        items.forEach(({ product, quantity }) => {
            if( quantity > product.inStock ) {
                throw new Error('PRODUTO INSUFICIENTE !')
            }
        })
        
        this.#items = items
        this.#user = user
        this.#total = items.reduce(( sum, { product, quantity } ) => sum + ( product.price * quantity ), 0)
    }
}