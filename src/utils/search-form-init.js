import $ from 'jquery';

const searchFormToggle = () => {
  $('form#searchForm').toggleClass('open');
};

export {
  searchFormToggle
}