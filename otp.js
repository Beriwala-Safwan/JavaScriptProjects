// function generateOtp(length){
// const digits="0123456789";
// console.log(digits.length)
// let otp="";
// for (let i = 0; i<length; i++) {
// const randomIndex = Math.floor(Math.random()*digits.length);
// otp=otp+digits[randomIndex] ;
// }
// return otp;
// }

function generateOtp(length) {
  const digits = "0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    otp += digits[randomIndex];
  }
  return otp;
}

document.getElementById('generateBtn').addEventListener('click', function () {
  const otpLength = document.getElementById('otpLength').value;
  
  if (otpLength && otpLength >=4 && otpLength <=6) {
    const otp = generateOtp(otpLength);
    document.getElementById('otpDisplay').innerText = otp;
  } else {
    alert("Please enter a valid OTP length.");
  }
});
