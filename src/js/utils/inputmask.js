import inputmask from "inputmask/dist/inputmask.es6.js";

inputmask({
    mask: "+(99) 99 9999 99",
    greedy: false,
    clearIncomplete: true,
    showMaskOnHover: true,
}).mask('input[name="phone"]'); 