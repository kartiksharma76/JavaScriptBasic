class Student{
    constructor(name){
        this.name=name;
        this.scores=[];
    }

    addScore(score){
        this.scores.push(score);

    }

    getAverage(){
        let sum=0;
        for(let score of this.scores){
            sum +=score;
        }
       return this.scores.length > 0 ? sum / this.scores.length : 0;
    }
    printScores() {
       console.log(`${this.name}'s Scores: ${this.scores.join(", ")}`);

}
}
let s1= new Student( "Amit");
s1.addScore(85);
s1.addScore(90);
s1.addScore(78);

s1.printScores();
console.log("Average",s1.getAverage());