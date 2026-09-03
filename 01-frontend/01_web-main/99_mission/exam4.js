const GAME_TIME = 20;
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const elements = {
    score: document.getElementById('score'),
    combo: document.getElementById('combo'),
    timer: document.getElementById('timer'),
    bestScore: document.getElementById('bestScore'),
    targetChar: document.getElementById('targetChar'),
    targetArea: document.getElementById('targetArea'),
    message: document.getElementById('message'),
    feedback: document.getElementById('feedback'),
    timeProgress: document.getElementById('timeProgress'),
    gameStatus: document.getElementById('gameStatus'),
    startButton: document.getElementById('startButton'),
    resetButton: document.getElementById('resetButton')
};

let score = 0;
let combo = 0;
let timeLeft = GAME_TIME;
let currentTarget = '';
let timerId = null;
let isPlaying = false;
let bestScore = Number(localStorage.getItem('typing-game-best') || 0);

function nextCharacter() {
    let next = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    while (next === currentTarget) next = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    currentTarget = next;
    elements.targetChar.textContent = currentTarget;
    elements.targetChar.animate([{ transform: 'scale(.86)' }, { transform: 'scale(1)' }], { duration: 180, easing: 'ease-out' });
}

function updateDisplay() {
    elements.score.textContent = score;
    elements.combo.textContent = combo;
    elements.timer.textContent = timeLeft;
    elements.timeProgress.style.width = `${(timeLeft / GAME_TIME) * 100}%`;
    elements.timeProgress.classList.toggle('warning', timeLeft <= 5);
}

function startGame() {
    if (isPlaying) return;
    score = 0;
    combo = 0;
    timeLeft = GAME_TIME;
    isPlaying = true;
    elements.targetArea.dataset.state = 'playing';
    elements.message.textContent = '이 문자를 입력하세요';
    elements.feedback.textContent = '정답 +10점 · 오답 -5점';
    elements.feedback.className = 'feedback';
    elements.startButton.textContent = '게임 진행 중';
    elements.startButton.disabled = true;
    nextCharacter();
    updateDisplay();
    elements.gameStatus.textContent = '게임이 시작되었습니다.';
    timerId = setInterval(() => {
        timeLeft -= 1;
        updateDisplay();
        if (timeLeft <= 0) endGame();
    }, 1000);
}

function endGame() {
    clearInterval(timerId);
    timerId = null;
    isPlaying = false;
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('typing-game-best', bestScore);
    }
    elements.bestScore.textContent = bestScore;
    elements.targetArea.dataset.state = 'finished';
    elements.targetChar.textContent = score;
    elements.message.textContent = '시간 종료!';
    elements.feedback.textContent = `최종 점수 ${score}점 · 다시 도전해보세요`;
    elements.startButton.textContent = '다시 시작';
    elements.startButton.disabled = false;
    elements.gameStatus.textContent = `게임 종료. 최종 점수는 ${score}점입니다.`;
}

function resetGame() {
    clearInterval(timerId);
    timerId = null;
    score = 0;
    combo = 0;
    timeLeft = GAME_TIME;
    currentTarget = '';
    isPlaying = false;
    elements.targetArea.dataset.state = 'ready';
    elements.targetChar.textContent = '?';
    elements.message.textContent = '준비되셨나요?';
    elements.feedback.textContent = '시작 버튼을 눌러 게임을 시작하세요';
    elements.feedback.className = 'feedback';
    elements.startButton.textContent = '게임 시작';
    elements.startButton.disabled = false;
    updateDisplay();
}

function checkInput(event) {
    if (!isPlaying || event.key.length !== 1 || !CHARACTERS.includes(event.key)) return;
    event.preventDefault();
    const isCorrect = event.key === currentTarget;
    if (isCorrect) {
        combo += 1;
        score += 10 + Math.floor(combo / 5) * 2;
        elements.feedback.textContent = combo % 5 === 0 ? `${combo} 콤보! 보너스 점수` : '정답!';
        elements.feedback.className = 'feedback correct';
    } else {
        combo = 0;
        score = Math.max(0, score - 5);
        elements.feedback.textContent = `아쉬워요. 정답은 ${currentTarget}였습니다`;
        elements.feedback.className = 'feedback wrong';
    }
    nextCharacter();
    updateDisplay();
}

elements.startButton.addEventListener('click', startGame);
elements.resetButton.addEventListener('click', resetGame);
document.addEventListener('keydown', checkInput);
elements.bestScore.textContent = bestScore;
updateDisplay();