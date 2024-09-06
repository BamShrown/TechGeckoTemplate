// Navbar Sticky


let lastScrollTop = 0; // Variable to store the last scroll position
const scrollThreshold = 200; // Set a threshold for scrolling down to hide the header

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position

  if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
    // Scrolling down and past the threshold
    document.querySelector('.header').style.top = '-310px'; // Hide the header
  } else if (currentScroll < lastScrollTop || currentScroll <= scrollThreshold) {
    // Scrolling up or within the threshold of the top
    document.querySelector('.header').style.top = '0'; // Show the header
  }

  // Update lastScrollTop to the current scroll position, never going below 0
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
}, false);





// For menu scrolling

document.addEventListener('DOMContentLoaded', function() {
  // Select all anchor links that include an ID reference (starts with '#')
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Get the destination ID from the href attribute
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              // Calculate position needed to center the element
              const elementRect = targetElement.getBoundingClientRect();
              const absoluteElementTop = elementRect.top + window.pageYOffset;
              const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);

              // Scroll to the element
              window.scrollTo({
                  top: middle,
                  behavior: 'smooth'
              });
          }
      });
  });
});



// Dropdown 

document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item-has-children');

  menuItems.forEach(menuItem => {
      menuItem.addEventListener('click', (event) => {
          event.stopPropagation();

          const subMenu = menuItem.querySelector('.sub-menu');
          if (subMenu) {
              subMenu.classList.toggle('active');
          }

          menuItems.forEach(item => {
              if (item !== menuItem) {
                  const otherSubMenu = item.querySelector('.sub-menu');
                  if (otherSubMenu) {
                      otherSubMenu.classList.remove('active');
                  }
              }
          });
      });
  });

  document.addEventListener('click', (event) => {
      menuItems.forEach(menuItem => {
          const subMenu = menuItem.querySelector('.sub-menu');
          if (subMenu) {
              subMenu.classList.remove('active');
          }
      });
  });

  document.querySelectorAll('.sub-menu').forEach(subMenu => {
      subMenu.addEventListener('click', (event) => {
          event.stopPropagation();
      });
  });
});


// Fade Up

document.addEventListener('DOMContentLoaded', function () {
    const fadeUpElements = document.querySelectorAll('.fadeup');
  
    function handleScroll() {
      fadeUpElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 90 && rect.bottom > 90) {
          element.classList.add('visible');
        }
      });
    }
  
    // Run on scroll
    window.addEventListener('scroll', handleScroll);
  
    // Run on initial load
    handleScroll();
  });
  

