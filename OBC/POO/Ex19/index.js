class Author{
    constructor(name, username) {
        this.name = name
        this.username = username
        this.post = []
    }

    addPost(text, likes) {
        this.post.unshift(new Post(this, text, likes))
        return this.post
    }
}

class Post{
    constructor(user, text, likes) {
        this.user = user
        this.text = text
        this.likes = likes
        this.comments = []
    }

    addComments(text) {
        this.comments.unshift(new Comments(text))
        return this.comments
    }
}

class Comments{
    constructor(text) {
        this.text = text
    }
}

const Jose = new Author('jose', '@joselindao')
Jose.addPost('Eu sou lindo', 0)
Jose.addPost('Eu sou gostoso', 0)
Jose.post[0].addComments('Po')
// console.log(Jose.post[0].comments)
// console.log(Jose.post[0].user)