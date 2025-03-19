function localStorageHelper() {

    const clearStorage = () => {
        localStorage.removeItem('quizAnswers');
    }

    const saveValue = (key, value) => {
        const quizAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || {};
        quizAnswers[key] = value;
        localStorage.setItem('quizAnswers', JSON.stringify(quizAnswers));
    }

    const getQuizAnswers = () => {
        return JSON.parse(localStorage.getItem('quizAnswers') || {});
    }

    return {
        clearStorage,
        saveValue,
        getQuizAnswers
    };
}