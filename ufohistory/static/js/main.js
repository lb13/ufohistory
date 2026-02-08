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
  
    // Initial filter application (handles default state)
    applyFilters();
  });

function applyFilters() {
  const items = Array.from(document.getElementsByClassName('item'));
  const container = document.getElementById('events-container');
  if (!container || items.length === 0) return;

  const searchInput = document.getElementById('searchbox');
  const decadeFilter = document.getElementById('decadeFilter');
  const sortSelect = document.getElementById('sortSelect');

  const filterText = searchInput.value.toUpperCase().trim();
  const filterDecade = decadeFilter.value ? parseInt(decadeFilter.value) : '';
  const sortDir = sortSelect.value; // 'asc' or 'desc'

  // Collect event data for each item
  const events = items.map(item => {
    const dateText = item.querySelector('.subtitle').textContent.trim();
    const yearMatch = dateText.match(/\d{4}/);
    const year = yearMatch ? parseInt(yearMatch[0]) : 0;
    const decade = Math.floor(year / 10) * 10;
    const searchString = item.querySelector('.searchstring').innerHTML.toUpperCase();

    return { item, year, decade, searchString };
  });

  // Filter
  let filtered = events.filter(ev => {
    const matchesText = filterText === '' || ev.searchString.indexOf(filterText) > -1;
    const matchesDecade = filterDecade === '' || ev.decade === filterDecade;
    return matchesText && matchesDecade;
  });

  // Sort by year
  filtered.sort((a, b) => {
    return sortDir === 'desc' ? b.year - a.year : a.year - b.year;
  });

  // Clear container and re-append filtered/sorted items
  container.innerHTML = '';
  filtered.forEach(ev => container.appendChild(ev.item));
};