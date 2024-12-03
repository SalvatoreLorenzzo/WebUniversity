// всі прості числа від 0 до 100
function task1() {
    let result = '';
    let number = 2;
    while (number <= 100) {
        let isPrime = true;
        let i = 2;
        while (i <= Math.sqrt(number)) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
            i++;
        }
        if (isPrime) {
            result += number + ' ';
        }
        number++;
    }
    document.getElementById('result1').textContent = result;
}

// виведення чисел від 0 до 10 з відповідним тексом
function task2() {
    let result = '';
    let i = 0;
    do {
        if (i === 0) {
            result += i + ' – це нуль\n';
        } else if (i % 2 === 0) {
            result += i + ' – парне число\n';
        } else {
            result += i + ' – непарне число\n';
        }
        i++;
    } while (i <= 10);
    document.getElementById('result2').textContent = result;
}

// ділити число 10000 на 2, поки результат не стане менше 50
function task3() {
    let numb = 10000;
    let result = numb;
    let counter = 0;

    while (result >= 50) {
        result = result / 2;
        counter++;
    }

    let output = 'Результат: ' + result + '\nКількість ітерацій: ' + counter;
    document.getElementById('result3').textContent = output;
}

// визначити пору року та назву місяця за номером місяця
function task4() {
    let month = parseInt(prompt('Введіть номер місяця (від 1 до 12):'));
    let season;
    let monthName;

    if (month >= 1 && month <= 12) {

        switch (month) {
            case 12:
            case 1:
            case 2:
                season = 'Зима';
                break;
            case 3:
            case 4:
            case 5:
                season = 'Весна';
                break;
            case 6:
            case 7:
            case 8:
                season = 'Літо';
                break;
            case 9:
            case 10:
            case 11:
                season = 'Осінь';
                break;
        }

        switch (month) {
            case 1:
                monthName = 'Січень';
                break;
            case 2:
                monthName = 'Лютий';
                break;
            case 3:
                monthName = 'Березень';
                break;
            case 4:
                monthName = 'Квітень';
                break;
            case 5:
                monthName = 'Травень';
                break;
            case 6:
                monthName = 'Червень';
                break;
            case 7:
                monthName = 'Липень';
                break;
            case 8:
                monthName = 'Серпень';
                break;
            case 9:
                monthName = 'Вересень';
                break;
            case 10:
                monthName = 'Жовтень';
                break;
            case 11:
                monthName = 'Листопад';
                break;
            case 12:
                monthName = 'Грудень';
                break;
        }

        alert('Місяць: ' + monthName + '\nПора року: ' + season);
    } else {
        alert('Неправильний номер місяця!');
    }
}

// конвертація температури з Цельсія в Фаренгейт
function task5() {
    let Tc = parseFloat(prompt('Введіть температуру в градусах Цельсія:'));
    if (!isNaN(Tc)) {
        let Tf = (9 / 5) * Tc + 32;
        alert('Температура в градусах Фаренгейта: ' + Tf.toFixed(2));
    } else {
        alert('Введено некоректне значення!');
    }
}

// день тижня за числом від 1 до 7
function task6() {
    let dayNumber = parseInt(prompt('Введіть число від 1 до 7:'));
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = 'Понеділок';
            break;
        case 2:
            dayName = 'Вівторок';
            break;
        case 3:
            dayName = 'Середа';
            break;
        case 4:
            dayName = 'Четвер';
            break;
        case 5:
            dayName = "П'ятниця";
            break;
        case 6:
            dayName = 'Субота';
            break;
        case 7:
            dayName = 'Неділя';
            break;
        default:
            alert('Неправильне число! Введіть число від 1 до 7.');
            return;
    }

    document.getElementById('result6').textContent = 'День тижня: ' + dayName;
}