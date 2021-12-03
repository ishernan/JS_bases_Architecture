export class Contact {

    constructor() {
        this.lastName = ''
        this.firstName = ''
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
        this.firstName = firstname
        return this.firstname
        
    }

    getFirstName() {
        return this.firstName
        
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

    deserialize(backendDatas) {
        Object.assign(this, backendDatas)

        return this 
    }

}