class Component {
    #element = null

    constructor( tag, options, parent ) {
        this.tag = tag
        this.options = options
        this.parent = parent
        this.createComponent()
    }

    createComponent() {     
        this.#element = document.createElement(this.tag) 
        Object.assign(this.#element, this.options)

        return this
    }

    renderComponent() {
        if ( this.parent instanceof Component ) {
            this.parent.getElement().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
    }

    getElement() {
        return this.#element
    }

    removeElement() {
        this.#element.remove()
    }
}

export { Component }