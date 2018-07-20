// babel babel-es6.js --out-file babel-es5.js
'use strict';

import { firstName, lastName as surname, show } from "./export";
import * as EXPORT_TEST from "./export";
import User from "./export";
console.log(firstName, surname);
show(1)

EXPORT_TEST.show(2)

new User()


