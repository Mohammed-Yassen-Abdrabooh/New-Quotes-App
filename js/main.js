
var quotes = [
  {
    quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "-- Albert Einstein",
    source: "images/albert-einstein-quotes.jpg"
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "-- Mae West",
    source: "images/images.jpeg"
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "-- Mahatma Gandhi",
    source: "images/gandhi.jpeg"
  },
  {
    quote: `“Don't walk in front of me… 
            I may not follow Don't walk behind me…
            I may not lead Walk beside me…
            just be my friend”`,
    author: "-- Albert Camus",
    source: "images/albert-camus.jpeg"
  },
  {
    quote: "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "-- Andre Gide, Autumn Leaves",
    source: "images/andre.jpg"
  },
  {
    quote: "“لا تجزع من جرحك، وإلا فكيف للنور أن يتسلل إلى باطنك؟”",
    author: "-- جلال الدين الرومي",
    source: "images/galal.jpg"
  },
  {
    quote: "“Listen up - there's no war that will end all wars.”",
    author: "-- Haruki Murakami, Kafka on the Shore",
    source: "images/murakami.jpg"
  },
  {
    quote: `“History does not always repeat itself. Sometimes it just yells, 'Can't you remember anything I told you?' and lets fly with a club.”`,
    author: "-- John W. Campbell Jr.",
    source: "images/John.jpg"
  },
  {
    quote: "“The only person you are destined to become is the person you decide to be.”",
    author: "-- Ralph Waldo Emerson",
    source: "images/ralph.jpeg"
  },
  {
    quote: "“If A is a success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut”",
    author: "-- Albert Einstein",
    source: "images/einstein.jpeg"
  }
];
var num = [];
function newQuote() {
  var rand = Math.floor(Math.random() * quotes.length);
  num.push(rand);
  console.log(num);
  var img = document.getElementById("image");

  if (num[(num.length - 1)] == num[(num.length - 2)]) {
    num.pop(rand);
    rand++;
    num.push(rand);
        document.getElementById("nQuote").innerHTML = `${quotes[rand].quote}`;
        document.getElementById("author").innerHTML = `${quotes[rand].author}`;
        img.src= `${quotes[rand].source}`;
    }else{
        document.getElementById("nQuote").innerHTML = `${quotes[rand].quote}`;
        document.getElementById("author").innerHTML = `${quotes[rand].author}`;
        img.src= `${quotes[rand].source}`;
  }
  console.log(num);

}





