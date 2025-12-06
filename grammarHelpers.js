function formatEnglishList(arr) {
    if (!arr || !arr.length) return "";

    const clean = arr.map(x => x.trim()).filter(x => x !== "");
    const n = clean.length;

    if (n === 0) return "";
    if (n === 1) return clean[0];
    if (n === 2) return `${clean[0]} and ${clean[1]}`;

    const allButLast = clean.slice(0, -1).join(", ");
    const last = clean[n - 1];

    return `${allButLast} and ${last}`;
}

function getPronouns() {
    const gender = getInputs("dropdown_selection");

    if (gender === "male") {
        return {
            subj: "he",
            obj: "him",
            possAdj: "his",
            possPro: "his",
            reflexive: "himself",
            title: "Mr."
        };
    }

    if (gender === "female") {
        return {
            subj: "she",
            obj: "her",
            possAdj: "her",
            possPro: "hers",
            reflexive: "herself",
            title: "Ms."
        };
    }

    if (gender === "non_binary") {
        return {
            subj: "they",
            obj: "their",
            possAdj: "their",
            possPro: "theirs",
            reflexive: "themself",
            title: "Mx."
        };
    }

    return { title: "#Title#", possAdj: "#Possessive#", subj: "#Subject#", reflexive: "#Reflexive#" };
}

function getPronounVerb() {
    const gender = getInputs("dropdown_selection");

    if (gender === "male" || gender === "female") {
        return {
            verb: "is",
            tobe: "has"
        };
    }

    if (gender === "non_binary") {
        return {
            verb: "are",
            tobe: "have"
        };
    }

    return { tobe: "is/are", verb: "is/are" };
}