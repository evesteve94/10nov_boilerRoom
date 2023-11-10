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
async function createEvent(){
    const responseSpeakers = await fetch('./data/speakers.json')
    //console.log(responseSpeakers);
    const responseSchedule = await fetch('./data/schedule.json')
    //console.log(responseSchedule);

    if(responseSpeakers.ok && responseSchedule.ok){
        const speakersList = await responseSpeakers.json();
        const scheduleList = await responseSchedule.json();
        console.log(speakersList);
        console.log(scheduleList);
    } else {
    console.log(`HTTP error message: ${responseSchedule.status} ${responseSpeakers.status}`)
    }
}

createEvent();

//3. forIn loop för allt
//4. data från json-filer ska in i våra element
//5. append child