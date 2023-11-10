//todo


//2. ansluta json filer - fetch synch await --> alla arrays
async function createEvent(){
    const responseSpeakers = await fetch('./data/speakers.json')
    //console.log(responseSpeakers);
    const responseSchedule = await fetch('./data/schedule.json')
    //console.log(responseSchedule);

    if(responseSpeakers.ok && responseSchedule.ok){
        const speakers = await responseSpeakers.json();
        const schedules = await responseSchedule.json();
        // console.log(speakersList);
        // console.log(scheduleList);

        //3.1 forEach loop för speakersList
        speakers.forEach(function(speaker){
            //1. skapa våra html-element
            const main = document.querySelector('main');

            const eventContainer = document.createElement('div');
            eventContainer.classList.add('event-container');

            const eventInfoContainer = document.createElement('div');
            eventInfoContainer.classList.add('event-info-container');

            const eventBajsContainer = document.createElement('div');
            eventBajsContainer.classList.add('event-bajs-container');

            const speakerCol = document.createElement('div');
            speakerCol.classList.add('speaker-col');

            const speakersName = document.createElement('h3');
            const speakersCompany = document.createElement('h4')
            const speakersImage = document.createElement('img');

            speakersName.textContent = speaker.name;
            speakersCompany.textContent = speaker.company;
            speakersImage.src = speaker.image;


            //appenda allt!!!
            main.appendChild(eventContainer);
            eventContainer.appendChild(eventBajsContainer);
            eventBajsContainer.appendChild(speakerCol);
            eventBajsContainer.appendChild(scheduleCol);

            speakerCol.appendChild(speakersName);
            speakerCol.appendChild(speakersCompany);
            speakerCol.appendChild(speakersImage);
        })
        //3.2 forEach loop för scheduleList
        schedules.forEach(function(schedule){
            const scheduleTime = document.createElement('h4');
            const scheduleStage = document.createElement('h4');
            const scheduleDuration = document.createElement('h4');
            const scheduleTopic = document.createElement('h2');
            const scheduleDescription = document.createElement('p');

            scheduleTime.textContent = schedule.time;
            scheduleStage.textContent = schedule.stage;
            scheduleDuration.textContent = schedule.duration;
            scheduleTopic.textContent = schedule.topic;
            scheduleDescription.textContent = schedule.description;

            scheduleCol.appendChild(scheduleTopic);
            scheduleCol.appendChild(scheduleTime);
            scheduleCol.appendChild(scheduleStage);
            scheduleCol.appendChild(scheduleDuration);
            scheduleCol.appendChild(scheduleDuration);
            scheduleCol.appendChild(scheduleDescription);
        })
    } else {
    console.log(`HTTP error message: ${responseSchedule.status} ${responseSpeakers.status}`)
    }


}
            const scheduleCol = document.createElement('div');
            scheduleCol.classList.add('schedule-col');

            const scheduleHeading = document.createElement('h3');
createEvent();

//3. forIn loop för allt
//4. data från json-filer ska in i våra element
//5. append child