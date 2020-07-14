/**
 * KeeWeb plugin: font-change
 * @author bei2
 * @license MIT
 */

function changeFont(font) {
    document.querySelector('.app').style.fontFamily= font;
}

module.exports.getSettings = function () {
    return [
        {
            name: 'font',
            label: 'Font',
            type: 'text',
            maxlength: 200,
            placeholder: 'fonts',
            value: '"Noto Sans", "MotoyaLMaru W3 mono", "Noto Sans CJK"'
        }
    ];
};

module.exports.setSettings = function (changes) {
    if(!changes["font"]) {
        return;
    }

    changeFont(changes["font"]);
};

module.exports.uninstall = function() {
};
