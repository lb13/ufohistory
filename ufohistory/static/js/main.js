document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

  // Normal search function for desktop interface
function search() {
  var list = document.getElementsByClassName('searchstring');
  var item = document.getElementsByClassName('item');
  var input = document.getElementById('searchbox');
  var filter = input.value.toUpperCase();    
  var string;

for (i = 0; i < item.length; i++) {

    string = list[i].innerHTML;

    if  (
        string.toUpperCase().indexOf(filter) > -1
        )
    {
      item[i].style.display = "block";
    } else {
      item[i].style.display = "none";
    }
    }
};
// End of normal search function for desktop interface