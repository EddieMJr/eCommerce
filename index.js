const gridBoxes = document.querySelector('#bookGrid');
const frontGrid = document.querySelector('#frontBookGrid')

fetch('./items.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            gridBoxes.insertAdjacentHTML('beforeend', `<div id="gridBox_div">
            <img src="${post.img}" id="covers__img">
            <p><b>${post.title}</b></p>
            <p>${post.desc}</p>
            <p><b>$${post.price}</b></p>
        </div>`)
        });
    });

fetch('./items.json')
    .then(res => res.json())
    .then(data => {
        data.slice(7, 11).forEach(post => {
            frontGrid.insertAdjacentHTML('beforeend', `<div id="frontGridBox_div">
            <img src="${post.img}" id="covers__img">
            <p><b>${post.title}</b></p>
        </div>`)
        });
    });    

function validateForm() {
      const name = document.getElementById('name__input').value.trim();
      const nameError = document.getElementById('nameError__span')
      if (name === "") {
        nameError.textContent = "Please input your name.";
        return false;
      } else {
        nameError.textContent = ""
      }

      const email = document.getElementById('email__input').value.trim();
      const emailError = document.getElementById('emailError__span')
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test (email)) {
        emailError.textContent = "Please input your email in proper format.";
        return false;
      } else {
        emailError.textContent = ""
      }

      const comments = document.getElementById('comment__input').value.trim();
      const commentError = document.getElementById('commentError__span')
      if (comments === "") {
        commentError.textContent = "Please give us your thoughts or requests.";
        return false;
      } else {
        commentError.textContent = "";
      }

      return true;
    }
