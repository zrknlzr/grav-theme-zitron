import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

// get elements
const wrapper = document.querySelector('.wrapper');
const footer = document.getElementsByTagName('footer')[0];
const menubutton = document.querySelector('.mobile--menu');
const gallery = document.querySelector('.gallery');
const sidebar = document.querySelector('.sidebar');
const navitems = Array.from(sidebar.getElementsByTagName('li'));
const filters = document.querySelector('.filter');

// show mobile navigation
menubutton.addEventListener( 'click', function( event ) {
  sidebar.classList.toggle('shownav');
});

// check for page width and move footer
if(!window.matchMedia('(min-width: 780px)').matches) {
  wrapper.appendChild(footer);
}

// navigation active dots
// to-do: display dot on "Everything" when at Home?
const isLocationMatch = element => {
  console.log(element.children[0].href == location.href);
  element.classList.remove('active');
  if(element.children[0].href == location.href){
    element.classList.toggle('active');
  }
}
navitems.forEach(isLocationMatch);

// check page and load gallery functions
if (gallery) {

  //console.log('found isotope gallery');
  let isIsotopeInit = false; 

  // init isotope gallery
  const iso = new Isotope(gallery);

  // get url hash
  const getHashFilter = () => {
    var matches = location.hash.match( /filter=([^&]+)/i );
    var hashFilter = matches && matches[1];
    //console.log('getHashFilter(): ' + hashFilter);
    return hashFilter && decodeURIComponent( hashFilter );
  }

  // main gallery reload script
  const onHashChange = () => {
    //console.log('Hashchange event:');
    sidebar.classList.remove('shownav');
    navitems.forEach(isLocationMatch);
    var hashFilter = getHashFilter();
    if ( !hashFilter && isIsotopeInit ) {
      return;
    }
    isIsotopeInit = true;
    imagesLoaded( gallery ).on( 'always', function() {
      iso.arrange({
        itemSelector: '.gallery-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.gallery-sizer'
        },
        filter: hashFilter
      });
    });
  }

  // button events to change filter hash
  filters.addEventListener( 'click', function( event ) {
    event.preventDefault()
    //console.log('Filter click event:');
    var filterValue = event.target.getAttribute('data-filter');
    //console.log('setHashFilter ' + filterValue);
    location.hash = 'filter=' + filterValue;
  });

  // listen for hash change
  window.addEventListener('hashchange', onHashChange );

  // trigger event handler to init Isotope
  onHashChange();

} else {
  //console.log('no isotope gallery found');
}