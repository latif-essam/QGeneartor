// Quotes
const qMusicStart = [
  "I can chase you,  ",
  "Music gives a soul to the universe, ",
  "If I were not a physicist, ",
  "One good thing about music,  ",
  "Music, once admitted to the soul,  ",
];
const qMusicMiddle = [
  "and I can catch you,",
  " wings to the mind's,",
  " I would probably be a musician,",
  "when it hits you,",
  "becomes a sort of spirit,",
];
const qMusicEnd = [
  "but there is nothing I can do to make you mine.",
  "flight to the imagination and life to everything.",
  "I often think in music.",
  "you feel no pain.",
  "and never dies.",
];
const qHistoryStart = [
  "What is history?",
  "A myth is far truer than a history,",
  "What is History?",
  "Without words,",
  "Few will have the greatness to bend history itself,",
];
const qHistoryMiddle = [
  "An echo of the past in the future,",
  "for a history only gives a story of the shadows,",
  "History reports that the men who can manage men manage the men who can manage only things,",
  "without writing and without books there would be no history,",
  " but each of us can work to change a small portion of events,",
];
const qHistoryEnd = [
  "a reflex from the future on the past.",
  "whereas a myth gives a story of the substances that cast the shadows.",
  "and the men who can manage money manage all.",
  "there could be no concept of humanity.",
  "and in the total of all those acts will be written the history of this generation.",
];
// get Quotes from diferen parts  == done
// delet the all types option == done
// set vairble to the type
// creat object for type one and the same for type
let newQuote;
const getQuotes = (qtype) => {
  let quote;
  // getting random values for history and music arrays
  // music
  let rQMusicSart = Math.floor(Math.random() * qMusicStart.length);
  let rQMusicMiddle = Math.floor(Math.random() * qMusicMiddle.length);
  let rQMusicEnd = Math.floor(Math.random() * qMusicEnd.length);

  // history
  let rQHistorySart = Math.floor(Math.random() * qHistoryStart.length);
  let rQHistoryMiddle = Math.floor(Math.random() * qHistoryMiddle.length);
  let rQHistoryEnd = Math.floor(Math.random() * qHistoryEnd.length);
  // checking the type of Quote/s
  if (qtype === "music") {
    quote = `
      “${qMusicStart[rQMusicSart]} ${qMusicMiddle[rQMusicMiddle]} ${qMusicEnd[rQMusicEnd]}”`;
  } else {
    quote = `${qHistoryStart[rQHistorySart]} ${qHistoryMiddle[rQHistoryMiddle]} ${qHistoryEnd[rQHistoryEnd]}`;
  }
  newQuote = quote;
  console.log(newQuote);
  return newQuote;
};

const qGenrator = document.getElementById("qGenrator");
const tbody = document.getElementById("tbody");

const tableBuilder = (qNumber, quote) => {
  const tr = document.createElement("tr");

  const th = document.createElement("th");
  th.setAttribute("scope", "row");
  th.textContent = qNumber;

  const td = document.createElement("td");
  td.innerHTML = quote;
  tr.appendChild(th);

  tr.appendChild(td);
  tbody.appendChild(tr);
};

const rangeValue = document.getElementById("range");
let qNumber = 1;
//get the types of Quotes
let quoteTypes = document.getElementsByName("qType");
let quoteType;

function Intitiate() {
  getQuotes(quoteType);
  tableBuilder(qNumber++, newQuote);
  console.log(newQuote);
  console.log(quoteType);
}
qGenrator.addEventListener("click", function () {
  //   set the selected type to quoteTupe variable
  quoteTypes.forEach((q) => {
    // @ts-ignore
    if (q.checked) {
      quoteType = q.value;
    }
  });

  for (let i = 0; i < rangeValue.value; i++) {
    Intitiate();
  }
});

// for mutilple Quotes we can add for loop that run the Initiate function multiple times. == Done 😚
// for the type of Quotes we can use two object and depending on the value of Quote type we can change our arrays so we can use each type indvidually

// `
//             <tr>
//                 <th scope="row">1</th>
//                 <td></td>
//               </tr>
// `
// Attacjing the dom
