// saveNote.js
document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteInput').value;
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push({ title, content });
    localStorage.setItem('notes', JSON.stringify(notes));
    window.location.href = 'öö.html';
});

// Beim Laden der Seite den gespeicherten Modus anwenden
window.addEventListener('load', function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.body.classList.add(`${theme}-mode`);
    }
});

function zurueck(){
    window.location.href = 'öö.html'
}