/**
 *  @author synjin, shanley (synjinshanley@gmail.com)
 *  @version 0.0.1
 *  @summary ATM Project || created: 2/2/20
 *  @todo
 */

export default class BalanceHandler {
    #balance;
}

    constructor(){
    let balance = 100;
    this.handleBalance();
}

    handleBalance() {
    let removeMe;
    document.getElementById('balance').addEventListener('change', removeMe = () => {
        this.setBalance(document.getElementById('balance').value);
        this.displayBalance();
    }

    setBalance(balance) {
        this.#balance = balance;
    }

    displayBalance() {
        document.getElementById('balance').innerHTML = `${this.#balance}`;
    }

}