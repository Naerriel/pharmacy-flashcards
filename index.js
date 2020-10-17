const flashcards = [
    {
        question: 'Co to jest melo costam?',
        answer: 'Melo cośtam to jest melanz',
        img: 'https://img.hopaj.pl/images/0/d/0d78d5cdba406d08cdb0704edcfce717.jpg',
    },
    {
        question: 'Kto jest ukochanym koteczkiem?!',
        answer: 'Moja cudowniutka Olusia <3!!!',
        img: 'https://ca.slack-edge.com/T017AD2GP50-U017GJK4UPN-e5705864f239-512',
    }
];


const shownFlashcards = {};
let shownFlashcardsNum = 0;
let isFinish = false;

function drawFlashcard() {
    if (shownFlashcardsNum === flashcards.length) {
        console.log('showing finish');
        showFinish();
        isFinish = true;
        return;
    }

    let id = Math.floor(Math.random() * flashcards.length);
    while(shownFlashcards[id]) {
        id = Math.floor(Math.random() * flashcards.length);
    }

    shownFlashcards[id] = true;
    shownFlashcardsNum += 1;
    return flashcards[id];
}

function handleNextCardClick() {
    const btn = document.querySelector('.next-card-btn');
    btn.addEventListener('click', () => {
        const card = drawFlashcard();
        if (isFinish) {
            hideNextQuestionButton();
            return;
        }

        showFlashCard(card);
    });
}

function main() {
    generateMainHtml();
    handleNextCardClick();
    
    const flashcard = drawFlashcard();
    showFlashCard(flashcard);
}

main();