require.context('../images', true, /\.(gif|jpg|png|svg|ico)$/i)
require.context('../fonts', true, /\.(ttf|woff|woff2|svg)$/i)

import "@stylesheets/styles.scss";
import "babel-polyfill";

import index from '@script/index';
