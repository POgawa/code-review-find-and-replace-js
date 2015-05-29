var findAndReplace = function(sentence, word, replacementWord) {
  var clean = sentence.replace(/[|&;$%@"<>()+,]/g, "");

  var result = clean.replace(word, replacementWord);

  return result
}

$(document).ready(function(){

  $("#name-changer").submit(function(event){

    var sentence = ($("input#input-sentence").val());

    var word = ($("input#input-word").val());

    var replacementWord = ($("input#input-replacementWord").val());

    var result = findAndReplace(sentence, word, replacementWord);

    $(".output").text(result);

    $("#result").show();

    event.preventDefault();

  });

});
