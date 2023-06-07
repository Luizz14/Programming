import { Component } from "./Component.js"

class Input extends Component{
    constructor( text, parent, options ) {
       super( 'label', parent, options)
    }
}

export { Input }