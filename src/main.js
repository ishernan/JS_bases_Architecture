import { Contact } from "./models/contact";
import { ContactService } from "./services/contact-service";
import { RowHelper } from "./_helpers/row-helper";

document.addEventListener('DOMContentLoaded', (e) => {
    const service = new ContactService()

    const contacts = service.findAll()
    for (let contact of contacts) {
        const row = new RowHelper()
        row.addColumn('&nbsp;')
        row.addColumn(contact.getLastName())
        row.addColumn(contact.getFirstName())
        row.addColumn(contact.getOccupation())
        row.addColumn(contact.getCompany())
        row.addColumn('&nbsp;')

        document.querySelector('tbody').appendChild(row.buildRow())


    }

    // const contact = new Contact()
    // contact.setLastName('Aubert')
    // contact.setFirstName('Jean-Luc')
    // contact.setOccupation('Teacher')
    // contact.setCompany('Aélion')

   



    // // 1. create a new tr element 
    // const row = document.createElement('tr')

    // // 2. create every td for every columns we need and place contents
    // const td1 = document.createElement('td')
    // td1.innerHTML = '&nbsp;'

    // const td2 = document.createElement('td')
    // td2.innerHTML = contact.getLastName()

    // const td3 = document.createElement('td')
    // td3.innerHTML = contact.getFirstName()

    // const td4 = document.createElement('td')
    // td4.innerHTML = contact.getOccupation()

    // const td5 = document.createElement('td')
    // td5.innerHTML = contact.getCompany()

    // const td6 = document.createElement('td')
    // td6.innerHTML = '&nbsp;'

    // // 3. add every td as child of the previus tr element
    // row.appendChild(td1)
    // row.appendChild(td2)
    // row.appendChild(td3)
    // row.appendChild(td4)
    // row.appendChild(td5)
    // row.appendChild(td6)

    //4. add the whole tr to tbody of our table
   // document.querySelector('tbody').appendChild(row)
    
    // get rows number
    const nbRows = document.querySelectorAll('tbody tr').length
    document.getElementById('items-number').innerText = nbRows

        
    setTimeout(()=>{
        document.querySelector('div.outer-splash').classList.add('hidden')
    }, 2000)
});



