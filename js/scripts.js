var findAndReplace = function(sentence, word, replacementWord) {
  var clean = sentence.replace(/[|&;$%@"<>()+,]/g, "");

  var result = clean.replace(word, replacementWord);
  return result
}
