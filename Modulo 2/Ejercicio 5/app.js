class SlothMachine {

   coinCounter = 0;

   constructor() {
      this.coinCounter = 0;
   }

   play() {
      this.coinCounter++;
      const bool1 = Boolean(Math.round(Math.random()));
      const bool2 = Boolean(Math.round(Math.random()));
      const bool3 = Boolean(Math.round(Math.random()));

      if(bool1 && bool2 && bool3) {
         console.log('Congratulations!!!. You won ' + this.coinCounter + ' coins!!');
         this.coinCounter = 0;
      } else {
         console.log('Good luck next time!!');
      }
   }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play(); 