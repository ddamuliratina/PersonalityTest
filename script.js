document.addEventListener("DOMContentLoaded", function () {
    const resultText = document.getElementById("result-text");

    if (!resultText) {
        console.error("Element with id 'result-text' not found.");
        return;
    }

    let answers = JSON.parse(localStorage.getItem("quizAnswers"));

    if (answers) {
        let personalityType = determinePersonality(answers);
        resultText.textContent = `Your MBTI Personality Type is: ${personalityType}`;
    } else {
        resultText.textContent = "No answers found. Please take the test again.";
    }
});


// Function to determine MBTI personality type based on answers
function determinePersonality(answers) {
    let personality = "";

    if (answers.q1 === "E") personality += "E";
    else if (answers.q1 === "I") personality += "I";

    if (answers.q2 === "S") personality += "S";
    else if (answers.q2 === "N") personality += "N";

    if (answers.q3 === "T") personality += "T";
    else if (answers.q3 === "F") personality += "F";

    if (answers.q4 === "J") personality += "J";
    else if (answers.q4 === "P") personality += "P";

    if (answers.q5 === "E") personality += "E";
    else if (answers.q5 === "I") personality += "I";

    if (answers.q6 === "S") personality += "S";
    else if (answers.q6 === "N") personality += "N";

    if (answers.q7 === "T") personality += "T";
    else if (answers.q7 === "F") personality += "F";

    if (answers.q8 === "J") personality += "J";
    else if (answers.q8 === "P") personality += "P";

    return personality;
}

// Function to show the explanation based on the personality type
function showExplanation(personalityType) {
    // Hide all explanations
    const allExplanations = document.querySelectorAll(".explanation");
    allExplanations.forEach(function(explanation) {
        explanation.style.display = "none";
    });

    // Show the relevant explanation
    const explanationElement = document.getElementById(personalityType);
    if (explanationElement) {
        explanationElement.style.display = "block";
    }
}

// Function to restart the test
function restartTest() {
    localStorage.removeItem("quizAnswers");
    window.location.href = "test.html";
}

// Debugging: Check if localStorage contains correct answers
console.log("Stored Answers:", localStorage.getItem("quizAnswers"));
