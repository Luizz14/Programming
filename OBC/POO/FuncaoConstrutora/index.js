function Movie(name, duration, tags, directors) {
    this.name = name, 
    this.duration = duration, 
    this.tags = tags,
    this.directors = directors,
    this.released = false
}

const tags = ["Adventure", "Super-Hero", "Comedy"]
const directors = ["Antony Russo", "Joe Russo"]

const antMan = new Movie("Ant-Man: Quantum Mania", 120, tags, directors)

console.log(antMan)