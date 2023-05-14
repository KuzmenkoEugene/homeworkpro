function Ladder() {
    this.step = 0;

    this.up = () => {
        this.step++;
        return this
    }
    this.down = () => {
        this.step--;
        return this
    }
    this.showStep = () => {
        alert(this.step);
        return this
    }
}

const ladder = new Ladder()

ladder.up().up().down().showStep();