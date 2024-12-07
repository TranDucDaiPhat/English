const $ = document.querySelector.bind(document);

const text = $('#word')
const btn1 = $('#btn1')
const btn2 = $('#btn2')
const btn3 = $('#btn3')
const btn4 = $('#btn4')
let listWord = []
let listMean = []
let recentlyList = []
let currentWord = ''

function getData(filePath) {
    return fetch(filePath)
      .then((res) => res.text())
      .then((text) => {
        return text.split('\n').map(s => s.trim());
      });
  }

function start() {
    let index 
    do {
        index = Math.floor(Math.random()*listWord.length)
    } while(recentlyList.includes(index))
    
    recentlyList.push(index)
    if (recentlyList.length >= 10 || recentlyList.length >= listWord.length) {
        recentlyList.shift()
    }

    currentWord = listMean[index]

    wordA = listMean[Math.floor(Math.random()*listMean.length)] 
    wordB = listMean[Math.floor(Math.random()*listMean.length)] 
    wordC = listMean[Math.floor(Math.random()*listMean.length)] 
    wordD = listMean[Math.floor(Math.random()*listMean.length)] 
    
    let correctAnswer = Math.floor(Math.random()*4)

    switch(correctAnswer) {
        case 0:
            wordA = listMean[index]
            break
        case 1:
            wordB = listMean[index]
            break
        case 2:
            wordC = listMean[index]
            break
        case 3:
            wordD = listMean[index]
            break
    }

    text.innerText = listWord[index]
    btn1.textContent = wordA
    btn2.textContent = wordB
    btn3.textContent = wordC
    btn4.textContent = wordD
}

function check(answer) {
    if (currentWord == answer) {
        start()
    }
}

getData("Word.txt")
  .then((data) => {
    listWord = data
    return getData("Mean.txt")
  })
  .then((data) => {
    listMean = data
    start()
  })
  .catch((e) => console.error(e));

btn1.addEventListener('click', () => check(btn1.textContent));
btn2.addEventListener('click', () => check(btn2.textContent));
btn3.addEventListener('click', () => check(btn3.textContent));
btn4.addEventListener('click', () => check(btn4.textContent));