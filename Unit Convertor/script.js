
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter'){
        calculate()
    }
})

function calculate(){
    
    var input = document.getElementById('input')
    var result = document.getElementById('result')


    var inputType = document.getElementById('inputType')
    var resultType = document.getElementById('resultType')

    var inputValue = input.value
    var resultValue = result.value
    var inputTypeValue = inputType.value
    var resultTypeValue = resultType.value

    var input_in_cm = inputValue

    if(inputTypeValue == 'mm'){
        input_in_cm = inputValue*0.1
    }else if(inputTypeValue == 'm'){
        input_in_cm = inputValue*100
    }else if(inputTypeValue == 'km'){
        input_in_cm = inputValue*100000
    }

    switch(resultTypeValue){
        case 'mm':
            resultValue = input_in_cm*10
            break
        case 'm':
            resultValue = input_in_cm*0.01
            break
        case 'km':
            resultValue = input_in_cm*0.00001
            break
        default:
            resultValue = input_in_cm
            break
    }

    document.getElementById('result').value = resultValue
    resultValue = 0
}