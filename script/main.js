//todo
//1. skapa våra html-element
const aboutContainer = document.createElement('div');
aboutContainer.classList.add('about-container');

const eventContainer = document.createElement('div');
eventContainer.classList.add('event-container');

const eventInfoContainer = document.createElement('div');
eventInfoContainer.classList.add('event-info-container');

const eventBajsContainer = document.createElement('div');
eventBajsContainer.classList.add('event-bajs-container');

const speakerCol = document.createElement('div');
speakerCol.classList.add('speaker-col');

const speakersHeading = document.createElement('h3');

const scheduleCol = document.createElement('div');
scheduleCol.classList.add('schedule-col');

const scheduleHeading = document.createElement('h3');
//2. ansluta json filer - fetch synch await --> alla arrays


//3. forIn loop för allt
//4. data från json-filer ska in i våra element
//5. append child