import MyEvent from '../common/myEvent.js';

class PrimesGenerator extends MyEvent {
  prime1() {
    this.emit('prime1');
  }
  marsenne() {
    this.emit('marsenne');
  }
  prime4() {
    this.emit('prime4');
  }
}

export default PrimesGenerator;
