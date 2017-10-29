function alphabetPosition(text) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  return text.toLowerCase().split('').filter(x=>alphabet.indexOf(x) != -1).map(x=>alphabet.indexOf(x) + 1).join(" ")
}