var listAnswers = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Hawaii', 'Florida', 'Georgia', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'North Carolina', 'North Dakota', 'New York', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var listQuestions = ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Honolulu', 'Tallahassee', 'Atlanta', 'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston', 'Lansing', 'St. Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe', 'Raleigh', 'Bismarck', 'Albany', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin', 'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne'];
var activeQuestions = listQuestions;
var activeAnswers = listAnswers;
var x, a;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function nextQuestion() {
  $("#question").css("color","linear-gradient(147.14deg, #5B8DEF 6.95%, #0063F7 93.05%)")
  $("body").css("background-color","#28293d")
  var questionText = document.getElementById("question");
  var answerText = document.getElementById("answer");
  if (activeQuestions.length == 0 || x == null) {
    activeQuestions = listQuestions;
    activeAnswers = listAnswers;
  }
  else {
    activeQuestions.splice(x,1);
    activeAnswers.splice(x,1);
  }
  console.log(activeAnswers);
  x = getRndInteger(0,activeQuestions.length - 1);
  a = listQuestions.indexOf(activeQuestions[x]);
  questionText.innerHTML = activeQuestions[x];
  answerText.value = "";
}

function enterAnswer(event) {
  var y = $("#answer").val();
  if (event.key == "Enter") {
    if (toTitleCase(y) == activeAnswers[x]) {
      correct();
    }
    else {
      incorrect();
    }
  }
}

function correct() {
  $("#question").css("color","#F2F2F5");
  $("#answer").val(listAnswers[x]);
  $("body").css("background-color","#06C270");
  setTimeout(nextQuestion,800);
}

function incorrect() {
  $("#question").css("color","#F2F2F5");
  $("#answer").val(listAnswers[x]);
  $("body").css("background-color","#FF3B3B");
  setTimeout(nextQuestion,800);
}