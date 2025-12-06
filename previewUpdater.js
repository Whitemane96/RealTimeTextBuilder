function updatePreview() {
    const sentenceOnce = buildSentence1();
    const sentenceTwo = buildSentence2();
    const sentenceThree = buildSentence3();
    const sentenceFour = buildSentence4();
    const sentenceFive = buildSentence5();

    const fullText = [sentenceOnce, sentenceTwo, sentenceThree, sentenceFour, sentenceFive]
        .filter(Boolean)
        .join("\n\n");

    document.getElementById("previewBox").innerHTML = fullText;
}