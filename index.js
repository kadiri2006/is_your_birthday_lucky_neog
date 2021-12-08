let dob = document.querySelector("#dateOfBirth");
let btn = document.querySelector("#btn_checkNumber");

btn.addEventListener("click", function () {
  sumOfDate();
});

function sumOfDate() {
  console.log(dob.value);
  dob = dob.value.replaceAll("-", "");
  let sumOfDob = 0;
  for (let index = 0; index < dob.length; index++) {
    sumOfDob = sumOfDob + Number(dob[index]);
  }
  console.log(sumOfDob);
}
