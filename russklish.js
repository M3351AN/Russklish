var cyrillic = {
    "А": "a",
    "Б": "b",
    "В": "v",
    "Г": "g",
    "Д": "d",
    "Е": "ye",
    "Ё": "yo",
    "Ж": "zh",
    "З": "z",
    "И": "i",
    "Й": "y",
    "К": "k",
    "Л": "l",
    "М": "m",
    "Н": "n",
    "О": "o",
    "П": "p",
    "Р": "r",
    "С": "s",
    "Т": "t",
    "У": "u",
    "Ф": "f",
    "Х": "kh",
    "Ц": "ts",
    "Ч": "ch",
    "Ш": "sh",
    "Щ": "shch",
    "Ъ": "",
    "Ы": "y",
    "Ь": "",
    "Э": "e",
    "Ю": "yu",
    "Я": "ya",
    "а": "a",
    "б": "b",
    "в": "v",
    "г": "g",
    "д": "d",
    "е": "ye",
    "ё": "yo",
    "ж": "zh",
    "з": "z",
    "и": "i",
    "й": "y",
    "к": "k",
    "л": "l",
    "м": "m",
    "н": "n",
    "о": "o",
    "п": "p",
    "р": "r",
    "с": "s",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "kh",
    "ц": "ts",
    "ч": "ch",
    "ш": "sh",
    "щ": "shch",
    "ъ": "",
    "ы": "y",
    "ь": "",
    "э": "e",
    "ю": "yu",
    "я": "ya"
};

var english = {
    "a": "а",
    "b": "б",
    "c": "к",
    "d": "д",
    "e": "е",
    "f": "ф",
    "g": "г",
    "h": "х",
    "i": "и",
    "j": "дж",
    "k": "к",
    "l": "л",
    "m": "м",
    "n": "н",
    "o": "о",
    "p": "п",
    "q": "к",
    "r": "р",
    "s": "с",
    "t": "т",
    "u": "у",
    "v": "в",
    "w": "в",
    "x": "кс",
    "y": "й",
    "z": "з",
    "sh": "ш",
    "ch": "ч",
    "th": "т",
    "ng": "нг",
    "qu": "кв",
    "ph": "ф",
    "wh": "в",
    "ck": "к",
    "ee": "и",
    "oo": "у",
    "ai": "ай",
    "ei": "ей",
    "ie": "и",
    "oa": "о",
    "ou": "ау",
    "ow": "ау",
    "aw": "ау",
    "ay": "ай",
    "ey": "ей",
    "oy": "ой",
    "er": "ер",
    "ar": "ар",
    "or": "ор",
    "ir": "ир",
    "ur": "ур",
    "ll": "л",
    "ss": "с",
    "tt": "т",
    "dd": "д",
    "mm": "м",
    "nn": "н",
    "pp": "п",
    "rr": "р",
    "gg": "г",
    "bb": "б",
    "ff": "ф",
    "kk": "к",
    "zz": "з",
    "cc": "к",
    "kh": "х",
    "zh": "ж",
    "ts": "ц",
    "shch": "щ",
    "ye": "е",
    "yo": "ё",
    "yu": "ю",
    "ya": "я"
};

var input = document.getElementById("input");
var result = document.getElementById("result");

function translateToRussian() {
    var text = input.value;
    if (text == "") {
        result.innerHTML = "plz type in English";
        return;
    }
    text = text.toLowerCase();
    var translit = "";
    var i = 0;
    while (i < text.length) {
        var char = text[i];
        if (char == " ") {
            translit += " ";
            i++;
        }
        else if (".,".includes(char)) {
            translit += char;
            i++;
        }
        else if ("abcdefghijklmnopqrstuvwxyz".includes(char)) {
            if (i < text.length - 1) {
                var nextChar = text[i + 1];
                var pair = char + nextChar;
                if (pair in english) {
                    translit += english[pair];
                    i += 2;
                }
                else {
                    if (char in english) {
                        translit += english[char];
                        i++;
                    }
                    else {
                        result.innerHTML = "undefined";
                        return;
                    }
                }
            }
            else {
                if (char in english) {
                    translit += english[char];
                    i++;
                }
                else {
                    result.innerHTML = "undefined";
                    return;
                }
            }
        }
        else {
            result.innerHTML = "undefined";
            return;
        }
    }
    result.innerHTML = translit;
}

function translateToEnglish() {
    var text = input.value;
    if (text == "") {
        result.innerHTML = "plz type in Russo";
        return;
    }
    text = text.toUpperCase();
    var translit = "";
    var i = 0;
    while (i < text.length) {
        var char = text[i];
        if (char == " ") {
            translit += " ";
            i++;
        }
        else if (".,".includes(char)) {
            translit += char;
            i++;
        }
        else if ("АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".includes(char)) {
            if (i < text.length - 1) {
                var nextChar = text[i + 1];
                var pair = char + nextChar;
                if (pair in cyrillic) {
                    translit += cyrillic[pair];
                    i += 2;
                }
                else {
                    if (char in cyrillic) {
                        translit += cyrillic[char];
                        i++;
                    }
                    else {
                        result.innerHTML = "undefined";
                        return;
                    }
                }
            }
            else {
                if (char in cyrillic) {
                    translit += cyrillic[char];
                    i++;
                }
                else {
                    result.innerHTML = "undefined";
                    return;
                }
            }
        }
        else {
            result.innerHTML = "undefined";
            return;
        }
    }
    result.innerHTML = translit;
}