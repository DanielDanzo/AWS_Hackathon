async function getAndDisplayBursaries(){
    try {
        const response = await fetch("http://localhost:8000/bursaries");
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        const bursariesList = document.getElementById("bursary-row");
        bursariesList.innerHTML = ""; // Clear the list before appending new items
    
        data.forEach(bursary => {
            const card_div = document.createElement('div');
            card_div.className = "col-lg-6";

            card_div.innerHTML = `
                <div class="bursary-item">
                    <h3>${bursary.name}</h3>
                    <p>${bursary.description}</p>
                    <p><strong>Application Deadline:</strong> ${new Date(bursary.deadline).toLocaleDateString()}</p>
                    <a href="${bursary.url}" class="btn btn-success rounded-rectangle" target="_blank">View Details</a>
                </div>
            `;

            console.log(bursary.url);
            
            bursariesList.appendChild(card_div);
        });
    } catch (error) {
        console.error("Failed to fetch bursaries:", error);
    }
}



window.onload = function(){
    getAndDisplayBursaries();
};
