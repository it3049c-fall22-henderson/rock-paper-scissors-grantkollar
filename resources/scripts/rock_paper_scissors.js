class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    return acceptedValues[Math.floor(Math.random() * (2-0+1))];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if((userSelection === "rock" && cpuSelection === "scissors") || (userSelection ==="paper" && cpuSelection === "rock") || (userSelection === "scissors" && cpuSelection === "paper"))
      return "win";
    else if((userSelection === "rock" && cpuSelection === "rock") || (userSelection ==="paper" && cpuSelection === "paper") || (userSelection === "scissors" && cpuSelection === "scissors"))
      return "tie";
    else
      return "lose"
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    const cpuResponse = this.generateCPUResponse;
    const winOrLose = this.determineWinner(userSelection,cpuResponse);
    const winner = "";
    if(winOrLose === "win")
      this.score.user ++;
    
    else
      this.score.user ++;
    this.gameHistoryLog.push(`${this.username} selected ${userSelection}, CPU select ${cpuResponse}: ${this.username} ${winOrLose}`)
  }

}