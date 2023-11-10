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
        const eventContainer = document.getElementById("event");
        //3.1 forEach loop för speakersList
            const speakerCol = document.createElement('div');
            speakerCol.classList.add('speaker-col');

            const scheduleCol = document.createElement('div');

            scheduleCol.classList.add('schedule-col');



        speakers.forEach(function(speaker){
            //1. skapa våra html-element
           

            const eventBajsContainer = document.createElement('div');
            eventBajsContainer.classList.add('event-bajs-container');

            const speakersName = document.createElement('h3');
            const speakersCompany = document.createElement('h4')
            const speakersImage = document.createElement('img');

            speakersName.textContent = speaker.name;
            speakersCompany.textContent = speaker.company;
            speakersImage.src = speaker.image;


            //appenda allt!!!

            // eventContainer.appendChild(eventBajsContainer);
            
            
            
            const testDiv = document.createElement('div');
            testDiv.classList.add('test-div');
            testDiv.appendChild(speakersName);
            testDiv.appendChild(speakersCompany);
            testDiv.appendChild(speakersImage);
            speakerCol.appendChild(testDiv);
            eventContainer.appendChild(speakerCol);


        })
        //3.2 forEach loop för scheduleList
        schedules.forEach(function(schedule){
            const eventBajsContainer = document.createElement('div');
            eventBajsContainer.classList.add('event-bajs-container');
            // eventContainer.appendChild(eventBajsContainer);
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


            const testDiv = document.createElement('div');
            testDiv.classList.add('test-div');
            testDiv.appendChild(scheduleTopic);
            testDiv.appendChild(scheduleTime);
            testDiv.appendChild(scheduleStage);
            testDiv.appendChild(scheduleDuration);
            testDiv.appendChild(scheduleDuration);
            testDiv.appendChild(scheduleDescription);
            scheduleCol.appendChild(testDiv);
            eventContainer.appendChild(scheduleCol);
        });
    } else {
    console.log(`HTTP error message: ${responseSchedule.status} ${responseSpeakers.status}`)
    }

}

createEvent();

//3. forIn loop för allt
//4. data från json-filer ska in i våra element
//5. append child