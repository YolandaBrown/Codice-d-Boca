const menuElement = document.getElementById('menu');

fetch('https://codice-boca.web.app/menu')
     .then(response => response.json())
     .then(menuList=> {
          console.log(menuList);
          //array method
         const menuCards =  menuList.map(entree => {
              return `<div class="menu-item">
              <h3 class="menu-item-title">${entree.title}</h3>
              <div class="menu-item-description">
                   <p>${entree.description}</p>
              </div> </div>`
         })
         menuElement.innerHTML = menuCards.join('');
     })
     .catch(error => {
          menuElement.innerHTML = error;
     } )

