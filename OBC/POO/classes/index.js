class movie {
    constructor(name, duration, tags, directors) {
        this.name = name, 
        this.duration = duration, 
        this.tags = tags,
        this.directors = directors,
        this.released = false
    }

    release() {
        this.released = true
    }
}
const tags = ["Adventure", "Super-Hero", "Drama"]
const directors = ["Antony Russo", "Joe Russo"]

const avengersEndGame = new movie('Vingadores: ultimato', 190, tags, directors)
avengersEndGame.release()

const theFlash = new movie('The Flash', 120, tags, directors)


console.log(avengersEndGame)
console.log(theFlash)