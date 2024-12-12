//ПЕРВАЯ ЗАДАЧА
function checkTriangle() {
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const c = parseFloat(document.getElementById('sideC').value);
    
    if (a + b > c && a + c > b && b + c > a) {
        document.getElementById('triangleResult').innerText = "Треугольник с такими сторонами существует.";
    } else {
        document.getElementById('triangleResult').innerText = "Треугольник с такими сторонами не существует.";
    }
}

//ВТОРАЯ ЗАДАЧА

const baseObj = {
    base: 2,
    calculatePower(y) {
        if (y <= 2) {
            return 'Число Y должно быть больше 2, чтобы операция имела смысл';
        }
        const baseValue = y - 2;
        const result = Math.pow(baseValue, y);
        return result;
    }
};

function calculate() {
    const y = parseFloat(document.getElementById('inputY').value);
    
    if (isNaN(y)) {
        document.getElementById('powerResult').innerText = 'Введите корректное число Y';
        return;
    }

    const result = baseObj.calculatePower(y);
    document.getElementById('powerResult').innerText = `Результат: ${result}`;
}

//ТРЕТЬЯ ЗАДАЧА
let balance = 1000;  // Начальный баланс

function handleOperation() {
    const amount = parseFloat(document.getElementById('amount').value);
    const operation = document.getElementById('operation').value;

    if (operation === "deposit") {
        balance += amount;
        document.getElementById('balanceResult').innerText = `Сумма внесена. Новый баланс: ${balance}`;
    } else if (operation === "withdraw") {
        if (amount > balance) {
            document.getElementById('balanceResult').innerText = "Недостаточно средств на счету.";
        } else {
            balance -= amount;
            document.getElementById('balanceResult').innerText = `Сумма снята. Новый баланс: ${balance}`;
        }
    }
}