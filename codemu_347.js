347.1, 347.2, 347.3, 347.4
let arr = ['alpha', 'bravo', 'charly', 'delta'];

let list = document.createElement('ul');
document.body.appendChild(list);
//создание списка из массива
for (let elem of arr) { 
    let item = document.createElement('li');
    item.textContent = elem;
    list.appendChild(item)}
//добавление новых пунктов
let add_item = document.createElement('input');
document.body.appendChild(add_item);

add_item.addEventListener('blur', function() {
    let item = document.createElement('li');
    
    let new_tag = document.createElement('span');
    new_tag.textContent = item.textContent;
    item.textContent = '';
    item.appendChild(new_tag);
    
    new_tag.textContent = this.value;
    new_tag.addEventListener('click', edit_item)
    list.appendChild(item);

    let link = document.createElement('a');
    link.href = '';
    link.textContent = ' delete';
    item.append(link);

    new_tag.addEventListener('click', edit_item);

    link.addEventListener('click', function(e) {
        item.remove();
        e.preventDefault();
    })
    let decor = document.createElement('a');
    decor.href = '';
    decor.textContent = 'cross';
    item.appendChild(decor);

    decor.addEventListener('click', function(e) {
        new_tag.classList.add('cross');
        e.preventDefault();
    })
})
//создание ссылок на удаление и зачеркивание
let items = document.querySelectorAll('li');

for (let item of items) {
    let new_tag = document.createElement('span');
    new_tag.textContent = item.textContent;
    item.textContent = '';
    item.appendChild(new_tag);

    let link = document.createElement('a');
    link.href = '';
    link.textContent = ' delete';
    item.append(link);

    new_tag.addEventListener('click', edit_item)
    link.addEventListener('click', function(e) {
        item.remove();
        e.preventDefault();
    })

    let decor = document.createElement('a');
    decor.href = '';
    decor.textContent = 'cross';
    item.appendChild(decor);

    decor.addEventListener('click', function(e) {
        new_tag.classList.add('cross');
        e.preventDefault();
    })
}

function edit_item(event) {
    let input = document.createElement('input');
    input.value = event.target.textContent;
    event.target.appendChild(input);
    event.preventDefault();
    event.target.removeEventListener('click', edit_item);
    input.addEventListener('blur', function() {
        event.target.textContent = this.value;
    })
}