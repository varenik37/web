const node_for_click_all = document.getElementById("for_click_all");

// Сохранение исходных значений
const originalTexts = {
    p0: 'УФМС ПО ГОР. МОСКВЕ',
    p3: 'Потемкин',
    p4: 'Алексей',
    p5: 'Иванович',
    p8: 'Москва'
};

// Редактированные значения
const editedTexts = {
    p0: 'FMS IN THE C. OF MOSCOW',
    p3: 'Potyomkin',
    p4: 'Alexei',
    p5: 'Ivanovich',
    p8: 'Moscow'
};

let isEdited = false; // Флаг для переключения состояния

function find_edit_all() {
    const paragraphs = document.getElementsByTagName('p');
    
    if (!isEdited) {
        // Применяем редактированные значения
        paragraphs[0].innerText = editedTexts.p0;
        paragraphs[3].innerText = editedTexts.p3;
        paragraphs[4].innerText = editedTexts.p4;
        paragraphs[5].innerText = editedTexts.p5;
        paragraphs[8].innerText = editedTexts.p8;
    } else {
        // Возвращаем исходные значения
        paragraphs[0].innerText = originalTexts.p0;
        paragraphs[3].innerText = originalTexts.p3;
        paragraphs[4].innerText = originalTexts.p4;
        paragraphs[5].innerText = originalTexts.p5;
        paragraphs[8].innerText = originalTexts.p8;
    }
    
    // Переключаем флаг
    isEdited = !isEdited;
}

node_for_click_all.addEventListener("click", find_edit_all);