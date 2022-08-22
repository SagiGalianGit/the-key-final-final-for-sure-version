class QuestionsMathM {
    constructor(){
        this.questionArray = [
            {
                id: 0,
                question: " .כמה אחוזים הם 30 מ-200?",
                answer: "15%",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 1,
                question:"כמה אחוזים הם 15 מ-30?",
                answer: "50%",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
           
            {
                id: 2,
                question:"כמה אחוזים הם 10 מ-25",
                answer: "40%",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 3,
                question:"כמה אחוזים הם 30 מ-50",
                answer: "60%",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 4,
                question:"כמה אחוזים הם 6 מ-20",
                answer: ".30%",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 5,
                question:"כמה אחוזים הם 12 מ-48",
                answer: "25%",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 6,
                question:"כמה אחוזים הם 7 מ-70",
                answer: "10%",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 7,
                question:"כמה אחוזים הם 27 מ-90",
                answer: "30%",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 8,
                question:"כמה אחוזים הם 14 מ-40",
                answer: "35%",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 9,
                question:"כמה אחוזים הם 1 מ -20",
                answer: "5%",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 10,
                question:"יוסי נוסע 4 קמש כמה קמ יעבורכ ב-3 שעות?",
                answer: "12קמ",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 11,
                question:"אבי נוסע במהירות 10 קמש כמה קמ יעבור ב-6 שעות",
                answer: "60קמ",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 12,
                question:"אוסנת הולכת במהירות 6 קמש כמה קמ תעבור בשעתיים",
                answer: "12קמ",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 13,
                question:"אורי נוסעת במהירות 5 קמש כמה קמ תעבור ב-4 שעות",
                answer: "20קמ",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 14,
                question:"איילת נוסעת במהירות 12 קמש כמה קמ תעבור ב-8 שעות",
                answer: "96קמ",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 15,
                question:"איתי רץ במהירות 3 קמש כמה קמ יעבור ב-3 שעות",
                answer: "9קמ",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 16,
                question:"ארז נוסע במהירות 20 קמש כמה קמ יעבור ב-4 שעות",
                answer: "80קמ",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 17,
                question:"גלי נוסעת במהירות 13 קמש כמה קמ תעבור ב-3 שעות",
                answer: "39קמ",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 18,
                question:"דניאל נוסע במהירות 7 קמש כמה קמ יעבור ב-5 שעות ",
                answer: "35קמ",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
            {
                id: 19,
                question:"הדס נוסעת במהירות של 8 קמש כמה קמ תעבור ב-7 שעות",
                answer: "59קמ",
                explanation: "",
                wrongAnswers: [
                    "wrongM",
                    "wrongM",
                    "wrongM",
                ]
            },
    
        ];
    }
    checkQuestionValidation(questionId, questionsFound){
        for (let i = 0; i < questionsFound.length; i++){
            if (questionsFound[i].id == questionId){
                return false;
            }
        }
        return true;
    }
    getQuestionsNoDuplicates(num){
        var questionsFound = [];
        while (questionsFound.length < num){
            var rndIndex = Math.floor(Math.random() * (this.questionArray.length - 1));
            
            if (this.checkQuestionValidation(this.questionArray[rndIndex].id, questionsFound)){
                questionsFound.push(this.questionArray[rndIndex]);
                console.log(this.questionArray[rndIndex].id.toString() + "  ----------------------" + questionsFound.length);
            }
        }
        return questionsFound;
    } 
}

export default QuestionsMathM;

