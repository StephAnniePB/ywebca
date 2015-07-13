// Student Workspace
Fizz.buzz = function () {
for (var zzif=1; zzif<101; ++zzif) {
  if (zzif%3==0 && zzif%5!=0) {
    console.log("Fizz");
  }else if (zzif%5==0 && zzif%3!=0) {
    console.log("Buzz");
  }else if (zzif%3==0 && zzif%5==0) {
    console.log("FizzBuzz");
  }else {
    console.log(zzif);
  }
}
};