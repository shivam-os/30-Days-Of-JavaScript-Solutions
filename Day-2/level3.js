//1. Count the number of word love in this sentence.
let loveSentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let loveCount = loveSentence.match(/love/gi);
console.log(`Number of word "love": ${loveCount.length}`);


//2. Use match() to count the number of all because in the following sentence.
let becauseSentence = "You cannot end a sentence with because because because is a conjunction";
let becauseCount = becauseSentence.match(/because/gi);
console.log(`Number of word "because": ${becauseCount.length}`);


//3. Clean the following text and find the most frequent 
const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let pattern = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
let cleanSentence = (sentence.replace(pattern, ""));
console.log(cleanSentence);


//4. Calculate the total annual income of the person by extracting the numbers from the following text
let aboutPerson = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month";
let incomes = aboutPerson.match(/\d+/g);
let totalIncome = 0;
for (let i=0; i<incomes.length; i++){
  totalIncome += Number(incomes[i]);
}
console.log(`Total income of person: ${totalIncome}`);