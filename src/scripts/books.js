const Books_array = []

async function fetchEducationBooks(num_Books){
    try {
        let startIndex = 0;
        while( Books_array.length < num_Books){
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=learning&key=AIzaSyBiHYwRtUSvayV0LCUiraGgIg78QgH0e-8&startIndex=${startIndex}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            //console.log(response);
            // Parse the JSON data
            const data = await response.json();
            const result_array = data.items;
            //console.log(result_array[8].saleInfo.listPrice.amount)


            //console.log(data.items);
            for(let i = 0; i<result_array.length; i++){
                if(result_array[i].saleInfo.listPrice == undefined){
                    //console.log(i)
                    Books_array.push(result_array[i]);
                }
            }

            //result_array.forEach(element => {
            //    Books_array.push(element);
            //    console.log('Title: ', element.volumeInfo);
             //   console.log('Author: ', element.volumeInfo.author)
            //});

            startIndex = Books_array.length;
        }
    } catch (error) {
        console.log('Error fetching data: ', error)
    }
}

async function getEducationBooks(){
    const book_row = document.getElementById('row-book')
    book_row.innerHTML = ` `;

    console.log(Books_array[0])
    Books_array.forEach(data =>{
        //console.log('1')
        const real_data = data.volumeInfo;
        //console.log(real_data);
        //title, author, year, link

        console.log(real_data.authors)
        const author = real_data.authors;

        const card_div = document.createElement('div');
        card_div.className = "col-lg-6";
        
        if ( author == undefined){
            
            card_div.innerHTML = `
                <div class="ebook-item">
                <h3>${real_data.title}</h3>
                <p><strong>Author:</strong> William Da Vinci</p>
                <p><strong>Year:</strong> ${real_data.publishedDate}</p>
                <a href="${real_data.previewLink}" class="btn btn-download rounded-rectangle" download="Linear_Algebra.pdf">Download PDF</a>
                </div>
            `;
        }else{
            card_div.innerHTML = `
                <div class="ebook-item">
                <h3>${real_data.title}</h3>
                <p><strong>Author:</strong> ${real_data.authors[0]}</p>
                <p><strong>Year:</strong> ${real_data.publishedDate}</p>
                <a href="assets/linear-guest.pdf" class="btn btn-download rounded-rectangle" download="Linear_Algebra.pdf">Download PDF</a>
                </div>
            `;
        }
        
        book_row.appendChild(card_div);
        //console.log(real_data.published_date)
    })

    /*
    <div class="col-lg-6">
            <div class="ebook-item">
              <h3>Linear Algebra</h3>
              <p><strong>Author:</strong> Jim Hefferon</p>
              <p><strong>Year:</strong> 2017</p>
              <a href="assets/linear-guest.pdf" class="btn btn-download rounded-rectangle" download="Linear_Algebra.pdf">Download PDF</a>
            </div>
          </div>
          */
}


// Call the function to fetch education-related books
window.onload = async function(){
    await fetchEducationBooks(50);
    getEducationBooks();
};

