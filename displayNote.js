function anzeigen() {
    const rezepteContainer = document.getElementById('rezepteContainer');
    const rezepte = JSON.parse(localStorage.getItem('rezepte')) || [];

    rezepteContainer.innerHTML = '';
    rezepte.forEach((rezept, index) => {
        const rezeptDiv = document.createElement('div');
        rezeptDiv.className = 'rezept-container';
        rezeptDiv.innerHTML = `
            <h2 class="header3">${rezept.titel} <span class="toggle-button" onclick="toggleDetails(${index})">⬇️</span></h2>
            <div id="details-${index}" class="rezept-details">
                <p><strong>Zutaten:</strong> ${rezept.zutaten}</p>
                <p><strong>Küchengeräte:</strong> ${rezept.kuechengeraete}</p>
                <p><strong>Beschreibung:</strong> ${rezept.beschreibung}</p>
                <button onclick="bearbeiten(${index})">Bearbeiten</button><br><br>
                <button onclick="loeschen(${index})">Löschen</button>
            </div>
        `;
        rezepteContainer.appendChild(rezeptDiv);
    });
}

function toggleDetails(index) {
    const details = document.getElementById(`details-${index}`);
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

function zurueck() {
    window.location.href = 'index.html';
}

function anleitung() {
    window.location.href = 'anleitung.html';
}

function mathe() {
    window.location.href = 'taschenrechner.html';
}
function bearbeiten(index) {
    const rezepte = JSON.parse(localStorage.getItem('rezepte'));
    const rezept = rezepte[index];
    localStorage.setItem('bearbeitungsRezept', JSON.stringify({ ...rezept, index }));
    window.location.href = 'index.html';
}

function ne() {
    window.location.href = 'notiz.html';
}

function loeschen(index) {
    const rezepte = JSON.parse(localStorage.getItem('rezepte'));
    rezepte.splice(index, 1);
    localStorage.setItem('rezepte', JSON.stringify(rezepte));
    anzeigen();
}

anzeigen();

document.getElementById('light-mode').addEventListener('click', function() {
document.body.classList.remove('dark-mode', 'green-mode', 'blue-mode');
localStorage.setItem('theme', 'light');
});

document.getElementById('dark-mode').addEventListener('click', function() {
document.body.classList.remove('green-mode', 'blue-mode');
document.body.classList.add('dark-mode');
localStorage.setItem('theme', 'dark');
});

document.getElementById('green-mode').addEventListener('click', function() {
document.body.classList.remove('dark-mode', 'blue-mode');
document.body.classList.add('green-mode');
localStorage.setItem('theme', 'green');
});

document.getElementById('blue-mode').addEventListener('click', function() {
document.body.classList.remove('dark-mode', 'green-mode');
document.body.classList.add('blue-mode');
localStorage.setItem('theme', 'blue');
});

// Beim Laden der Seite den gespeicherten Modus anwenden
window.addEventListener('load', function() {
const theme = localStorage.getItem('theme');
if (theme) {
document.body.classList.add(`${theme}-mode`);
}
});

// displayNote.js
document.addEventListener('DOMContentLoaded', function() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const notesContainer = document.getElementById('notes');

    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');

        const titleElement = document.createElement('div');
        titleElement.classList.add('note-title');
        titleElement.innerText = note.title;

        const toggleArrow = document.createElement('span');
        toggleArrow.classList.add('toggle-arrow');
        toggleArrow.innerText = '⬇️';
        toggleArrow.addEventListener('click', function() {
            const isContentVisible = contentElement.style.display === 'block';
            contentElement.style.display = isContentVisible ? 'none' : 'block';
            deleteButton.style.display = isContentVisible ? 'none' : 'block';
            toggleArrow.innerText = isContentVisible ? '⬇️' : '⬆️';
        });

        const contentElement = document.createElement('div');
        contentElement.classList.add('note-content');
        contentElement.innerText = note.content;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerText = 'Löschen';
        deleteButton.addEventListener('click', function() {
            notes.splice(index, 1);
            localStorage.setItem('notes', JSON.stringify(notes));
            notesContainer.removeChild(noteElement);
        });

        noteElement.appendChild(titleElement);
        noteElement.appendChild(toggleArrow);
        noteElement.appendChild(contentElement);
        noteElement.appendChild(deleteButton);
        notesContainer.appendChild(noteElement);
    });
});
