import 'babel-polyfill';

import header from '@script/blocks/header';
import form from '@script/blocks/form';
import cities from '@script/blocks/cities';
import social from '@script/blocks/social';
import toggle_answer from '@script/blocks/toggle_answer';

document.addEventListener('DOMContentLoaded', function(event) {
  header();
  form();
  cities();
  social();
  toggle_answer();
});
