var listAnswers = ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon', 'Cape Verde', 'Central African Republic', 'Chad', 'Comoros', 'Democratic Republic of the Congo', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Republic of the Congo', 'Rwanda', 'São Tomé and Príncipe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'The Gambia', 'Togo', 'Tunisia', 'Uganda', 'Western Sahara', 'Zambia', 'Zimbabwe'];
var listQuestions = ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Honolulu', 'Tallahassee', 'Atlanta', 'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston', 'Lansing', 'St. Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe', 'Raleigh', 'Bismarck', 'Albany', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin', 'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne'];
var activeQuestions = listQuestions;
var x;

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
  $("#question").css("color","#33A9FE")
  $("body").css("background-color","#121E2A")
  var questionText = document.getElementById("question");
  var answerText = document.getElementById("answer");
  if (activeQuestions.length == 0) {
    activeQuestions = listQuestions
  }
  else {
    activeQuestions.pop(x)
  }
  x = getRndInteger(0,activeQuestions.length - 1);
  questionText.innerHTML = activeQuestions[x];
  answerText.value = "";
}

function enterAnswer(event) {
  var y = $("#answer").val();
  if (event.key == "Enter") {
    if (listAnswers.indexOf(toTitleCase(y)) == x) {
      correct();
    }
    else {
      incorrect();
    }
  }
}

function correct() {
  $("#question").css("color","#EEEEEE")
  $("#answer").val(listAnswers[x])
  $("body").css("background-color","#35DF91")
  setTimeout(nextQuestion,800)
}

function incorrect() {
  $("#question").css("color","#EEEEEE")
  $("#answer").val(listAnswers[x])
  $("body").css("background-color","#F47960")
  setTimeout(nextQuestion,800)
}