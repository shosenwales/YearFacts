let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let yearInput = document.querySelector('#yearInput');
yearInput.addEventListener('input', getFactFetch);

function getFactFetch(){
    let year = yearInput.value;

    fetch('https://numbersapi.com/'+year+'/year')
        .then(response => response.text())
        .then(data => {
           if(year != ''){
               fact.style.display = 'block';
               factText.innerText = data;
           }
        })
        .catch(err => console.log(err));
}