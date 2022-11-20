import $ from 'jquery';

// window.addEventListener('scroll', e => {
//   if (window.scrollY > 10) {
//     $('.header-home').css('box-shadow', '0 0 20px var(--color-1)');
//     $('.logo-img').css('width', '50px');
//   } else {
//     $('.header-home').css('box-shadow', 'none');
//     $('.logo-img').css('width', '100px');
//   }
// });

const storeTheme = theme => {
  localStorage.setItem("web-theme", theme);
}

const setTheme = () => {
  const activeTheme = localStorage.getItem("web-theme");
  $('[name="theme"]').each(function(index) {
    if ($(this).attr('id') === activeTheme) {
      $(this).prop('checked', true);
    }
  });
  $(document.documentElement).addClass(activeTheme);
}

const radioThemeClicked = () => {
  const value = document.querySelector('input[name="theme"]:checked').id;
  storeTheme(value);
};

const navSubItemClicked = () => {
  $('nav#mobile').removeClass('open');
  $('#dropdown-item-container').removeClass('open');
  $('#desktop .nav-sub-item').attr('tabIndex', '-1');
};

const mobileNavToggle = () => {
  $('nav#mobile').toggleClass('open');
};

const dropdownToggle = () => {
  $('#dropdown-item-container').toggleClass('open');

  if ($('#dropdown-item-container').hasClass('open')) {
    $('#desktop .nav-sub-item').attr('tabIndex', '0');
  } else {
    $('#desktop .nav-sub-item').attr('tabIndex', '-1');
  }
};

export {
  setTheme, 
  radioThemeClicked, 
  navSubItemClicked, 
  mobileNavToggle, 
  dropdownToggle
};
