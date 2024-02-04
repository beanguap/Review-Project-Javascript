// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'Web Developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "Ipsum officia ad in fugiat anim ipsum. Excepteur in dolore ipsum commodo aute qui in non cupidatat commodo exercitation sit enim consectetur. In Lorem culpa aute culpa consequat sit deserunt aliqua irure."
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'Web Designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    
    {
      id: 3,
      name: 'Bill Anderson',
      job: 'Intern',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

// select items
const img = document.getElementById('person_img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

// show person based on item

function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson();
});

// show prev person

prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length -1;
  }
  showPerson();
});
