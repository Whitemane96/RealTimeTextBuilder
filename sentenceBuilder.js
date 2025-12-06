function buildSentence1() {
    const inputField = getInputs("text_input") || "#Text Input#";
    const inputNumber = getInputs("number_input") || "#Number Input#";
    const inputDate = getInputs("date_input") || "#Date Input#";
    const getDate = new Date(inputDate);
    const formattedDate = getDate.toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"}) || "#Formatted Date#";

    let sentenceOne = `This app allows you to show changes, in-real-time, in a text based on what you enter or choose. This is what you just entered: ${inputField}. And this is the number that you just chose: ${inputNumber}, right?<br/><br/>You can also choose a date, like this ${inputDate} and yep, the formatting can be changed as well as adding HTML elements within it, such as: <b>${formattedDate}</b>.`;

    return sentenceOne;
}

function buildSentence2() {
    const p = getPronouns();
    const v = getPronounVerb();
    const radioChoice = getCheckedRadio("radio_choice").replace("___", p.possAdj);

    let sentenceThree = `It cover multiple options, say, do you need to make sentences based on gender, for example? Try changing the dropdown selection:<br/><br/><em>Hello there! Please let your neighbor ${p.title} Debt that ${p.possAdj} credit card is overdue, ${p.subj} ${v.tobe} the responsibility to pay up at the store by ${p.reflexive}, ${p.subj} ${v.verb} being very unprofessional! I saw ${p.title} Debt ${radioChoice} today.</em>`;

    return sentenceThree;
}

function buildSentence3() {
    const selectedCheckboxes = getSelectedCheckboxes("checkbox_selection");
    const readable = selectedCheckboxes.join(", ");
    const formattedChoices = formatEnglishList(selectedCheckboxes);

    let sentenceFour = "";

    if (selectedCheckboxes.length === 0) {
        sentenceFour = "Here is where your checkboxes would show, try selecting some...";
    } else {
        sentenceFour = `You have selected: ${readable}.<br/><br/>We can make it better though! What about adding proper wording, adding "and" if it's the last element, for example, try changing your selection: ${formattedChoices}.`;
    }

    return sentenceFour;
}

function buildSentence4() {
    const customFields = getCustomFields();

    let sentenceFour = "";

    if (customFields.length > 0) {
        sentenceFour += customFields.join(" ") + " ";
    }

    return sentenceFour.trim();
}

function buildSentence5() {
    const paragraph = getInputs("paragraph") || "#Your paragraph...#";

    let sentenceFive = "";

    if (paragraph === null) {
        par4Sentences == null;
        return sentenceFive;
    } else {
        sentenceFive = `${paragraph}`;
        return sentenceFive;
    }
}