const hiraganaMap = {
    'あ': 'a',
    'い': 'i',
    'う': 'u',
    'え': 'e',
    'お': 'o',
    'か': 'ka',
    'き': 'ki',
    'く': 'ku',
    'け': 'ke',
    'こ': 'ko',
    'さ': 'sa',
    'し': 'shi',
    'す': 'su',
    'せ': 'se',
    'そ': 'so',
    'た': 'ta',
    'ち': 'chi',
    'つ': 'tsu',
    'て': 'te',
    'と': 'to',
    'な': 'na',
    'に': 'ni',
    'ぬ': 'nu',
    'ね': 'ne',
    'の': 'no',
    'は': 'ha',
    'ひ': 'hi',
    'ふ': 'fu',
    'へ': 'he',
    'ほ': 'ｈo',
    'ま': 'ma',
    'み': 'mi',
    'む': 'mu',
    'め': 'me',
    'も': 'mo'
    // Thêm các ký tự Hiragana khác tại đây
};

const hiraganaChars = Object.keys(hiraganaMap);

function getRandomHiragana() {
    const randomIndex = Math.floor(Math.random() * hiraganaChars.length);
    return hiraganaChars[randomIndex];
}

const hiraganaCharElement = document.getElementById('hiraganaChar');
let currentHiragana = getRandomHiragana();
hiraganaCharElement.textContent = currentHiragana;

const hiraganaForm = document.getElementById('hiraganaForm');
const hiraganaInput = document.getElementById('hiraganaInput');
const resultDiv = document.getElementById('result');

hiraganaForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputText = hiraganaInput.value.trim();

    if (inputText === '') {
        resultDiv.textContent = 'Vui lòng nhập cách phát âm!';
        return;
    }

    if (hiraganaMap[currentHiragana] === inputText) {
        resultDiv.textContent = `Đúng rồi! ${currentHiragana} = ${inputText}`;
        hiraganaCharElement.classList.add('correct');
        setTimeout(() => {
            hiraganaCharElement.classList.remove('correct');
            nextHiraganaChar();
        }, 500);
    } else {
        resultDiv.textContent = `Sai rồi! ${currentHiragana} = ${hiraganaMap[currentHiragana]}`;
        hiraganaInput.classList.add('animate-incorrect');
        hiraganaCharElement.classList.add('incorrect');
        setTimeout(() => {
            hiraganaInput.classList.remove('animate-incorrect');
            hiraganaCharElement.classList.remove('incorrect');
            nextHiraganaChar();
        }, 500);
    }

    hiraganaInput.value = '';
});

function nextHiraganaChar() {
    currentHiragana = getRandomHiragana();
    hiraganaCharElement.style.opacity = 0;
    setTimeout(() => {
        hiraganaCharElement.textContent = currentHiragana;
        hiraganaCharElement.style.transform = 'translateX(-100%)';
        hiraganaCharElement.style.opacity = 1;
        setTimeout(() => {
            hiraganaCharElement.style.transform = 'translateX(0)';
        }, 20);
    }, 500);
}
