import { getTrainer } from "../assets/img/trainers/names.js";

async function fetchCourses() {
    try {
        const response = await fetch('http://localhost:8000/courses');
        const courses = await response.json();
        displayCourses(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
    }
}


function displayCourses(courses) {
    const coursesDiv = document.getElementById('courses-row');
    coursesDiv.innerHTML = ''; // Clear previous content

    let count = 1;

    courses.forEach(course => {


        /*
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');

        courseDiv.innerHTML = `
            <h2>${course.name}</h2>
            <p><strong>URL:</strong> <a href="${course.url}" target="_blank">${course.url}</a></p>
            <p><strong>Type:</strong> ${course.type}</p>
            <p><strong>Teacher:</strong> ${course.teacher}</p>
            <p><strong>Number of People:</strong> ${course.numberOfPeople}</p>
            <p><strong>Description:</strong> ${course.description}</p>
        `;*/

        const full_card = document.createElement('div');
        full_card.className = "col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0";
        full_card.setAttribute('data-aos', 'zoom-in');
        full_card.setAttribute('data-aos-delay', '300');
        full_card.innerHTML = `
            <div class="course-item">
              <img src="assets/img/course-3.jpg" class="img-fluid" alt="...">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <p class="category">${course.type}</p>
                  
                </div>

                <h3><a href="${course.url}">${course.name}</a></h3>
                <p class="description">${course.description}</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-${count%6}.jpg" class="img-fluid" alt="">
                    <a href="trainers.html" class="trainer-link">${course.teacher}</a>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bi bi-person user-icon"></i>&nbsp;${course.numberOfPeople}+
                    &nbsp;&nbsp;
                    
                  </div>
                </div>
              </div>
            </div>
        `;
            
        console.log(course.url)
        coursesDiv.appendChild(full_card);
        count = count +1;
    });
}


window.onload = async function() {
    await fetchCourses();
};