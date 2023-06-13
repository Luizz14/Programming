class Reservation {
    constructor( guest, days, room ) {
        this.guest = guest
        this.room = room
        this.days = days
        this.total = this.days * Reservation.basicFee
    }

    static basicFee = 150

    static showBasicFee() {
        return console.log(Reservation.basicFee)
    }

    static get basicPremium() {
        return Reservation.basicFee * 1.5
    }
}