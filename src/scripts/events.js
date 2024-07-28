

async function fetchEvents() {
    try {
        const response = await fetch('http://localhost:8000/events');
        const events = await response.json();
        displayEvents(events);
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}


function displayEvents(events) {
    const eventsDiv = document.getElementById('events-row');
    eventsDiv.innerHTML = ''; // Clear previous content

    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.className = "col-md-6 d-flex align-items-stretch";


        eventDiv.innerHTML = `
            <div class="col-md-6 d-flex align-items-stretch">
                <div class="card">
                    <div class="card-img">
                        <img src="assets/img/events-item-1.jpg" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><a href="">${event.name}</a></h5>
                        <p class="fst-italic text-center">${event.day}</p>
                        <p class="fst-italic text-center">Platform: ${event.platform}</p>
                        <p class="card-text">${event.description}</p>
                    </div>
                </div>
            </div>
        `;

        eventsDiv.appendChild(eventDiv);
    });
}


window.onload = async function() {
    await fetchEvents();
};