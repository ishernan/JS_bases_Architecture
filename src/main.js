const appDock = document.querySelector('[appDock]');

const doTitle =  {
    _title: 'Hello JS',
    write: () => {
        appDock.querySelector('h1').innerText = doTitle._title;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    doTitle.write();
});