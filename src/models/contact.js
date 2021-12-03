export class Contact {

    constructor() {
        this.lastName = ''
        this.firstname = ''
        this.occupation = ''
        this.company = ''

    }

    setLastName(name) {
        this.lastName = name
        return this.name
        
    }

    getLastName() {
        return this.lastName
        
    }

    setFirstName(firstname) {
        this.firstname = firstname
        return this.firstname
        
    }

    getFirstName() {
        return this.firstname
        
    }
    setOccupation(occupation) {
        this.occupation = occupation
        return this.occupation
        
    }

    getOccupation() {
        return this.occupation
        
    }


    setCompany(company) {
        this.company = company
        return this.company
        
    }

    getCompany() {
        return this.company
        
    }

}