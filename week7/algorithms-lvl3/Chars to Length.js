function length(str) {
  s = str.toLowerCase(str)
  char = s.split("")
  charSet = new Set(char)
  counter = 0

  charSet = Array.from(charSet)

  for (j = 0; j < charSet.length; j++) {
    for (i = 0; i < char.length; i++) {
      if (charSet[j] == char[i]) {
        counter++
      }
    }
    console.log(charSet[j] + counter + " ")
    counter = 0
  }
}

length("hheewowhh ofbalknvajsnhdih")
