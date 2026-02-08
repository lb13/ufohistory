document.addEventListener('DOMContentLoaded', () => {

    // Navbar burger toggle (unchanged)
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    // ── Prepare events data once ─────────────────────────────────────────────
    const container = document.getElementById('events-container');
    if (!container) return;

    const items = Array.from(document.getElementsByClassName('item'));

    const eventsData = items.map(item => {
        const subtitle = item.querySelector('.subtitle');
        const dateText = subtitle ? subtitle.textContent.trim() : '';
        const yearMatch = dateText.match(/\d{4}/);
        const year = yearMatch ? parseInt(yearMatch[0], 10) : 0;
        const decade = year ? Math.floor(year / 10) * 10 : 0;

        const searchStringElem = item.querySelector('.searchstring');
        const searchString = searchStringElem ? searchStringElem.innerHTML.toUpperCase() : '';

        return {
            element: item,
            year,
            decade,
            searchString
        };
    });

    // Initial render (shows everything, oldest first)
    applyFilters(eventsData, container);

    // Attach listeners
    const searchInput  = document.getElementById('searchbox');
    const decadeFilter = document.getElementById('decadeFilter');
    const sortSelect   = document.getElementById('sortSelect');

    if (searchInput)  searchInput.addEventListener('input',  () => applyFilters(eventsData, container));
    if (decadeFilter) decadeFilter.addEventListener('change', () => applyFilters(eventsData, container));
    if (sortSelect)   sortSelect.addEventListener('change',   () => applyFilters(eventsData, container));
});


function applyFilters(eventsData, container) {
    const searchInput  = document.getElementById('searchbox');
    const decadeFilter = document.getElementById('decadeFilter');
    const sortSelect   = document.getElementById('sortSelect');

    const filterText   = searchInput?.value.toUpperCase().trim()   || '';
    const filterDecade = decadeFilter?.value ? parseInt(decadeFilter.value, 10) : '';
    const sortDir      = sortSelect?.value || 'asc';  // 'asc' or 'desc'

    // Filter
    let filtered = eventsData.filter(ev => {
        const matchesText   = filterText === '' || ev.searchString.includes(filterText);
        const matchesDecade = filterDecade === '' || ev.decade === filterDecade;
        return matchesText && matchesDecade;
    });

    // Sort (by year)
    filtered.sort((a, b) => {
        if (sortDir === 'desc') {
            return b.year - a.year;
        }
        return a.year - b.year;
    });

    // Hide everything first
    eventsData.forEach(ev => {
        ev.element.style.display = 'none';
    });

    // Show and reorder only the filtered ones
    const fragment = document.createDocumentFragment();
    filtered.forEach(ev => {
        ev.element.style.display = '';  // or 'block'
        fragment.appendChild(ev.element);
    });

    container.appendChild(fragment);

    // Optional: show count (append once if missing)
    let countEl = document.getElementById('event-count');
    if (!countEl) {
        countEl = document.createElement('p');
        countEl.id = 'event-count';
        countEl.className = 'has-text-grey mt-4';
        document.querySelector('.section .container').prepend(countEl); // or append to controls
    }
    countEl.textContent = `${filtered.length} event${filtered.length !== 1 ? 's' : ''} shown`;
}