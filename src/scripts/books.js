// Define the search query and endpoint
const query = 'Learning';
const limit = 50;
const endpoint = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=${limit}`;

// Function to fetch education-related books
const fetchEducationBooks = async () => {
    try {
        // Fetch data from the Open Library API
        const response = await fetch(endpoint);
        
        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response);
        // Parse the JSON data
        const data = await response.json();
        console.log(data);
        /*
        // Extract book information from the data
        const books = data.docs.map(book => ({
            title: book.title,
            author: book.author_name ? book.author_name.join(', ') : 'Unknown Author',
            first_publish_year: book.first_publish_year,
            key: book.key // You can use this key to get more details about the book
        }));*/

        console.log(books);
        
        // Output the book information
        console.log(books);
        
        //return books;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call the function to fetch education-related books
window.onload = function(){
    fetchEducationBooks();
};

