const timelineData = [{
        year: 1347,
        event: 'Black Death.This plague significantly impacted the population of Europe during the Middle Ages. The resulting deaths and social changes had lasting effects on society'
    },
    {
        year: 1400,
        event: 'The Renaissance started in 14th century till 17th century.it was a period of renewal in art, science, and culture. There was a renewed interest in classical works and ancient culture.It started in Italy and spreaded all over the world.Renewal of interest in the study of classical antiquity.'
    },
    {
        year: 1500,
        event: 'First printed book in English, Recuyell of the Historyes of Troye'
    },
    {
        year: 1564,
        event: 'William Shakespeare born'
    },
    {
        year: 1600,
        event: 'English Reformation: King Henry VIII separation from the Catholic Church and the establishment of the Anglican Church led to religious and political changes in England'
    },
    {
        year: 1604,
        event: 'Publication of the King James Bible'
    },
    {
        year: 1623,
        event: 'First Folio of Shakespeare\'s plays published'
    },
    {
        year: 1642,
        event: 'The English Civil War impacts language use, with linguistic changes reflecting political and social upheavals'
    },
    {
        year: 1667,
        event: 'John Milton publishes Paradise Lost'
    },
    {
        year: 1662,
        event: 'The Royal Society is founded, emphasizing precision in language and encouraging scientific discourse. This contributes to the development of specialized scientific terminology in English'
    }

    // Add more events
];

// Function to generate timeline HTML
function generateTimeline() {
  const timelineContainer = document.getElementById('timeline-container');

  // Check if the timelineContainer exists before proceeding
  if (timelineContainer) {
      timelineData.forEach(event => {
          const eventElement = document.createElement('div');
          eventElement.classList.add('timeline-event');
          eventElement.innerHTML = `<span class="year">${event.year}</span><p>${event.event}</p>`;
          timelineContainer.appendChild(eventElement);
      });
  }
}

// Call the function to generate the timeline
generateTimeline();

document.addEventListener('DOMContentLoaded', function () {
  const writerProfiles = document.querySelectorAll('.writer-profile');
  let currentIndex = 0;

  function showWriterDetails(index) {
      writerProfiles.forEach((profile, i) => {
          const info = profile.querySelector('.info');
          const toggleButton = profile.querySelector('.toggle-button');
          const isCurrentWriter = i === index;

          if (info && toggleButton) {
              info.classList.toggle('show-details', isCurrentWriter);
              toggleButton.textContent = isCurrentWriter ? 'Hide Details' : 'Show Details';
          }
      });
  }

  function navigateNext() {
      currentIndex = (currentIndex + 1) % writerProfiles.length;
      showWriterDetails(currentIndex);
  }

  function navigatePrevious() {
      currentIndex = (currentIndex - 1 + writerProfiles.length) % writerProfiles.length;
      showWriterDetails(currentIndex);
  }

  writerProfiles.forEach((profile, i) => {
      const toggleButton = document.createElement('button');
      toggleButton.textContent = 'Show Details';
      toggleButton.classList.add('toggle-button');

      toggleButton.addEventListener('click', function () {
          const info = profile.querySelector('.info');
          if (info) {
              info.classList.toggle('show-details');

              const buttonText = toggleButton.textContent === 'Show Details' ? 'Hide Details' : 'Show Details';
              toggleButton.textContent = buttonText;
          }
      });

      profile.appendChild(toggleButton);
  });

  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next Writer';
  nextButton.classList.add('navigation-button');
  nextButton.addEventListener('click', navigateNext);

  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous Writer';
  prevButton.classList.add('navigation-button');
  prevButton.addEventListener('click', navigatePrevious);

  document.body.appendChild(prevButton);
  document.body.appendChild(nextButton);

  showWriterDetails(currentIndex);
});


// Function to simulate translation
function translateText() {
  const inputElement = document.getElementById('input-text') as HTMLInputElement | null;
  const translatedTextElement = document.getElementById('translated-text');

  // Check if both elements exist before accessing their properties
  if (inputElement && translatedTextElement) {
      const inputText = inputElement.value;

      // Simulate translation (replace with actual translation logic)
      const translatedText = simulateTranslation(inputText);

      translatedTextElement.textContent = `Translated Text: ${translatedText}`;
  }
}

// Function to simulate translation
function simulateTranslation(text: string): string {
  // Simulate a simple reversal of the text
  return text.split('').reverse().join('');
}

// ... Your existing JavaScript ...

// Dummy data for quiz questions (replace with your actual questions)
const quizQuestions = [
  {
      question: 'Who is often referred to as the greatest writer in the English language?',
      options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen'],
      correctAnswer: 0
  },
  {
      question: 'Which play is known as "The Scottish Play"?',
      options: ['Hamlet', 'Othello', 'Macbeth'],
      correctAnswer: 2
  },
  // Add more questions
];

// Function to start the quiz
// ... Your existing JavaScript ...

// Function to start the quiz
function startQuiz() {
  const quizContainer: HTMLElement | null = document.getElementById('quiz-container');

  // Check if the container exists before proceeding
  if (quizContainer) {
      quizContainer.innerHTML = ''; // Clear previous content

      quizQuestions.forEach((question, index) => {
          const questionElement = document.createElement('div');
          questionElement.classList.add('quiz-question');
          questionElement.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

          question.options.forEach((option, optionIndex) => {
              const optionElement = document.createElement('input');
              optionElement.type = 'radio';
              optionElement.name = `quiz-${index}`;
              optionElement.value = optionIndex.toString(); // Convert to string
              optionElement.id = `quiz-${index}-${optionIndex}`;
              const labelElement = document.createElement('label');
              labelElement.htmlFor = `quiz-${index}-${optionIndex}`;
              labelElement.textContent = option;

              questionElement.appendChild(optionElement);
              questionElement.appendChild(labelElement);
          });

          quizContainer.appendChild(questionElement);
      });

      // Add a button to check the answers
      const submitButton = document.createElement('button');
      submitButton.textContent = 'Submit Answers';
      submitButton.onclick = checkAnswers;
      quizContainer.appendChild(submitButton);
  }
}


// Function to check the quiz answers
// ... Your existing JavaScript ...

// Function to check the quiz answers
function checkAnswers() {
  let correctCount = 0;

  quizQuestions.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="quiz-${index}"]:checked`) as HTMLInputElement | null;

      // Check if the element exists before accessing its properties
      if (selectedOption && Number(selectedOption.value) === question.correctAnswer) {
          correctCount++;
      }
  });

  alert(`You got ${correctCount} out of ${quizQuestions.length} questions correct!`);
}




