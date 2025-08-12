const gridBoxes = document.querySelector('#bookGrid');

fetch('./items.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            gridBoxes.insertAdjacentHTML('beforeend', `<div>
            <img src="${post.img}" id="covers__img">
            <p><b>${post.title}</b></p>
            <p>${post.desc}</p>
            <p><b>$${post.price}</b></p>
        </div>`)
        });
    });