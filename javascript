const timelineData = [
  {year: 1347, event: 'Black Death.This plague significantly impacted the population of Europe during the Middle Ages. The resulting deaths and social changes had lasting effects on society'},
  {year: 1400, event:'The Renaissance started in 14th century till 17th century.it was a period of renewal in art, science, and culture. There was a renewed interest in classical works and ancient culture.It started in Italy and spreaded all over the world.Renewal of interest in the study of classical antiquity.'},
    { year: 1500, event: 'First printed book in English, Recuyell of the Historyes of Troye' },
    { year: 1564, event: 'William Shakespeare born' },
  {year: 1600, event:'English Reformation: King Henry VIII separation from the Catholic Church and the establishment of the Anglican Church led to religious and political changes in England'},
    { year: 1604, event: 'Publication of the King James Bible' },
    { year: 1623, event: 'First Folio of Shakespeare\'s plays published' },
  { year: 1642, event: 'The English Civil War impacts language use, with linguistic changes reflecting political and social upheavals'},
    { year: 1667, event: 'John Milton publishes Paradise Lost' },
  { year: 1662, event: 'The Royal Society is founded, emphasizing precision in language and encouraging scientific discourse. This contributes to the development of specialized scientific terminology in English'}
  
    // Add more events
];

// Function to generate timeline HTML
function generateTimeline() {
    const timelineContainer = document.getElementById('timeline-container');

    timelineData.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('timeline-event');
        eventElement.innerHTML = `<span class="year">${event.year}</span><p>${event.event}</p>`;
        timelineContainer.appendChild(eventElement);
    });
}
