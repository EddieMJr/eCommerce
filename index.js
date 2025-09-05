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

function validateForm() {
      const name = document.getElementById('name__input').value.trim();
      const email = document.getElementById('email__input').value.trim();
      const comments = document.getElementById('comment__input').value.trim();

      if (name === "") {
        alert("Please input your name.");
        return false;
      }

      if (email === "") {
        alert("Please input your email.");
        return false;
      }

      if (comments === "") {
        alert("Please give us your thoughts or requests.");
        return false;
      }

      return true;
    }
