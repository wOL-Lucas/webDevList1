import readline from 'readline';

class Calculator{
  private rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  operations: {[key: string]: (a: number, b: number) => number};

  constructor(){
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.substract = this.substract.bind(this);
    this.sum = this.sum.bind(this);
    this.evaluate = this.evaluate.bind(this);

    this.operations = {
      "x": this.multiply,
      "/": this.divide,
      "-": this.substract,
      "+": this.sum
    }
  }

  public multiply(a: number, b: number): number{
    return a * b;
  }

  public divide(a: number, b: number): number{
    return a / b;
  }

  public substract(a: number, b: number): number{
    return a - b;
  }

  public sum(a: number, b: number): number{
    return a + b;
  }

  evaluate(operation:string, a: number, b: number): number{
    return this.operations[operation](a, b);
  }

  public serve(){
    let exit:boolean = false;
    while(!exit){
    }
  }
}

let calculator = new Calculator();
let operation1 = calculator.evaluate("x", 2, 3);
console.log(operation1);

