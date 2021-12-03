let nameMY = "isaac"; 

document.addEventListener('DOMContentLoaded', (event) => {
    //document <=> Document Object Model (DOM)
    const appDock = document.querySelector('[appDock]');//il trouve le premier element nommé appDock. 
    //Entrecrochet fait reference d'un element o à un attribut créé dans une balise.
    // On pourra selectionner aussi avec un . qui fait reference à un attribut class (# pour selectionner id)
    //appDock= "toto"; on peut pas redefiir une constante, lance erreur
    const dock = document.querySelector('div'); //selectionne la premiere div trouvé dans le DOM

    let myVar = 'Je suis trop cool'
    let myName = "Isaac";
    
    
    const names = [// les tableux font partie de la class Array
        'Jean-Luc',
        'Isaac',
        'Rémy',
        'Julien',
        'Abdel'
    ] 
    names.push('Nesibe')


    //boucle 1
    myName = "<ul>"
    for (let i = 0; i < names.length; i++){
        // myName = myName + '<li>' + names[i] + '</li>'
        myName += '<li>' + names[i] + '</li>'; 
    }
    myName += '</ul>'

    dock.innerHTML = myName; 


    //boucle2
    myName ='<ul>'
    for (let name of names) { //avec cette boucle on peut pas modiier la facon dont ont parcour la liste, mais pas risque de boucle infinie
        myName += '<li>' + name + '</li>'; 
    }
    //dock.innerHTML = myName; 

    //boucle3
    names.forEach((nameInList)=>{ //il est utilisé surtout quans on vut appliquer une foction pour chaque element du tableau
        myName += '<li>' + nameInList + '<li>'
    })
    myName += '</ul>'

    //dock.innerHTML = myName; 

    //boucle 4
    myName = '<ol>'
    let index = 0
    while(index < names.length){ //elle demande una condition de sortie, donc il faut une variable de depart pour initialiser
        myName += '<li>' + names[index] + '</li>'
        index++

    } 
    myName += '</ol>'
    //dock.innerHTML = myName; 

    //boucle 5
    index = 6
    do{
        myName += '<li>' + names[index] + '</li>'
        index++
    } while (index < names.length)
    myName += '</ol>'
    //dock.innerHTML = myName; 

    const liNames = document.querySelectorAll('li'); 
    for (let liName of liNames){
        const name = liName.innerText //inner texte accede à l'interieur de li
        if (name === 'Rémy'){
            liName.classList.add('is-red'); 
        }
        console.log(name);
    }
    dock.innerHTML += '<p>' + liNames.length + ' items</p>'


    //Get red and green button


    const redOne = document.getElementById('red-one'); 
    const greenOne = document.getElementById('green-one'); 

    const colorize = (name, color)=> {
        const rows = [... document.querySelectorAll('li')]
        const row = rows.find((item)=> item.innerText === name) //pas besoins des acolades
        row.classList.add(color)   
        
    }
   
    redOne.addEventListener('click', (event)=>{
        console.log('click');
        const name = redOne.getAttribute('attr-name')        
        colorize(name, 'is-red')
        //color.style.color = "white"; 
        
    })

    greenOne.addEventListener('click', (event)=>{
        console.log('click2');

        const name =greenOne.getAttribute('attr-name')
       
        colorize(name, 'is-green')
        //color.style.color = "white"; 

    })

}
);


