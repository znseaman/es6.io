import { uniq } from 'lodash';
import jquery from 'jquery';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, myAge, myDog } from './src/config';

import User, {createURL, gravatar} from './src/user';

const zach = new User('Zach Seaman', 'znseaman@gmail.com', 'google.com');
const profile = createURL(zach.name);
const image = gravatar(zach.email);
console.log(image);
