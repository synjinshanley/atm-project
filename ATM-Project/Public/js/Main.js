/**
 *  @author synjin, shanley (synjinshanley@gmail.com)
 *  @version 0.0.1
 *  @summary ATM Project || created: 2/2/20
 *  @todo
 */

import BalanceHandler from './BalanceHandler.js';

export default class Main {

    constructor() {
        new BalanceHandler();
    }

}

window.addEventListener('load', () => {
    new Main();
});

