function score(str) {
    words = str.split(' ')
    alphabetMap = {}
    for (i='a'.charCodeAt(), j = 1; i <= 'z'.charCodeAt(); i++, j++) {
      alphabetMap[i] = j
    }
    highestScoringWord = { word: '', score: 0 }
    words.forEach(w => {
      chars = w.split('')
      sumOfChars = chars.reduce((count, char) => count + alphabetMap[char.charCodeAt()], 0)
      if (sumOfChars > highestScoringWord.score) {
        highestScoringWord = { word: w, score: sumOfChars }
      }
    })

    return highestScoringWord.word+" score is = "+highestScoringWord.score
  }
  
  console.log(score('We are the Bootcamp staff members, Lotem your lead instructor here at elevation and the Bootcamp TA’s(Teacher Assistance) Ameer & Mohammed.'))
  
  