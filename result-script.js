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