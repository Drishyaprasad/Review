// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Tanjiro',
    job: 'He is a Demon Slayer',
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/09265431-0eec-4111-b119-1a6eb8a7b8bd/dfgw18j-cf328dd0-045b-4a23-8d0e-157fccee32d4.png/v1/fill/w_1280,h_1209/tanjiro_kamado_by_pearl_berry_dfgw18j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwOSIsInBhdGgiOiJcL2ZcLzA5MjY1NDMxLTBlZWMtNDExMS1iMTE5LTFhNmViOGE3YjhiZFwvZGZndzE4ai1jZjMyOGRkMC0wNDViLTRhMjMtOGQwZS0xNTdmY2NlZTMyZDQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.rAGZGqyYDikG7tGdBs-elnNyia2wiMqdavSOVZUohO0',
    text: 'Tanjiro is a Demon Slayer because he wants to turn his sister back into human because she got turn into a demon',
  },
  {
    id: 2,
    name: 'Zenitsu Agatsuma',
    job: 'Demon Slayer',
    img: 'https://cdn.shopify.com/s/files/1/0400/9767/7479/files/Zenitsu-Agatsuma-Thunder-Breathing-Techinque.png?v=1678807114',
    text: 'Zenitsu is terrified of encountering demons stronger than the one Form. Although he is terrified of most demons he is strong due to his lighting bolt power. ',
  },
  {
    id: 3,
    name: 'Nezuko',
    job: 'Demon',
    img:'https://staticg.sportskeeda.com/editor/2022/02/40498-16437334600644-1920.jpg?w=840',
    text: 'She is the sister of Tanjiro. She got turned into a demon',
  },
  {
    id: 4,
    name: 'Insokue',
    job: 'Demon Slayer',
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c618e52-a2bc-43c6-8cb9-4dbdd6532e9f/dfkipsq-c6db3ad4-8084-418f-9502-0cb3c94c02cd.png/v1/fill/w_1280,h_1811,q_80,strp/inosuke_hashibira__2022__by_baby8stef_dfkipsq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZjNjE4ZTUyLWEyYmMtNDNjNi04Y2I5LTRkYmRkNjUzMmU5ZlwvZGZraXBzcS1jNmRiM2FkNC04MDg0LTQxOGYtOTUwMi0wY2IzYzk0YzAyY2QucG5nIiwiaGVpZ2h0IjoiPD0xODExIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNmM2MThlNTItYTJiYy00M2M2LThjYjktNGRiZGQ2NTMyZTlmXC9iYWJ5OHN0ZWYtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.7mt9tpeHbOcbngNRv5MlpD0tWZBHeSv2s_6dRFY5Khc',
    text: 'He is very violent but caring at the same time',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem +=1;
  if (currentItem > 3){
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem-=3;
  if (currentItem < 0) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});