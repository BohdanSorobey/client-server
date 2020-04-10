const selectBox = {
    meter: 1,
    verst: 1067,
    mile: 1609,
    foot: 0.3047851264858275,
    yard: 0.9144,
};

    let input = document.getElementById("inputConverter");
        input.oninput=()=>{validator()};
    let selectFrom = document.getElementById("selectElementFromConverter");
    let selectTo = document.getElementById("selectElementToConverter");
    let buttonConvert = document.getElementById("convertButton");
    buttonConvert.addEventListener("click", generate);

    function validator() {
        let mess = document.getElementById("messageLength");
        let temp = input.value;
        let length = temp.length;
        let num = isFinite(temp);
        if (!num) {
            if(selectElementLanguage.value==="ru")
                {mess.innerHTML = "Введите число"}
            else
                {mess.innerHTML="Input number!!!"}
            input.value = "";
        } else if (num < 0) {
            if(selectElementLanguage.value==="ru")
                {mess.innerHTML = "Введено отрицательное число"}
            else
                {mess.innerHTML="Need positive number"}
            input.value = "";
        } else if (length > 13) {
            if(selectElementLanguage.value==="ru")
                {mess.innerHTML = "Слишком большое число"}
            else
                {mess.innerHTML="Need short number"}
            input.value = temp.slice(0, -1);
        } else {
            mess.innerHTML = "";
        };
    }

    function generate() {
        let result = calculate();
        showResult(result);
    };

    function calculate() {
        let convertToMeter = () => input.value * selectBox[selectFrom.value];
        let convertFromMeter = (value) => value / selectBox[selectTo.value];
        return convertFromMeter(convertToMeter());
    };

    function showResult(result) {
        let output = document.getElementById("outputConverter");
        output.value = result;
    };



