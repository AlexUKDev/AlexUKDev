
class Massenger {
    
    constructor(value, delay) {
        this.value = value;
        this.delay = delay;
    }

    showMassage() {
        setTimeout(() => {
            document.getElementById('result').innerHTML = this.value;
        }, this.delay);
    }
}
    var massanger = new Massenger('How may I halp you?', 2000);
    massanger.showMassage();