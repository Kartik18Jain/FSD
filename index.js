var a = 34;
console.log(a);
{
  console.log(a);
  var a = 45;
  console.log(a);
  var b = 56;
  console.log(b);
  a = 78;
  console.log(a);
 
}

console.log(a);
console.log(b);
// const is a type of variable that cannot be reassigned after its initial assignment. It is block-scoped, meaning it is only accessible within the block it is defined in.