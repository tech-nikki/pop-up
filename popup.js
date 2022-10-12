// Your CSS as text
var styles = `
    .modal { 
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: #7FCBFA; /* Fallback color */
      
    }
.form-popup {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.header-popup{
  text-align: center;
  padding: 14px 80px;
  color: black;
  font-size: 25px;
  margin: unset;
}
.slideOne{
  text-align: center;
  padding: 10px 10px;
  margin:unset;
  color: black;
  font-size: 17px;
}
.slideCon{
  text-align: center;
  margin:unset;
  padding: 10px 10px;
  color: black;
  font-size: 21px;

}
.bttn-ls{
  margin: 24px;
    width: 1282px;
    height: 50px;
    font-size: 20px;
    text-align: left;
    padding-left: 22px;
}
.header-popupDebts{
  text-align: center;
    padding: 14px 80px;
    color: black;
    font-size: 25px;
    margin: unset 
}
.slide-select{
  text-align: center;
  padding: 10px 10px;
  margin:unset;
  color: black;
  font-size: 17px;
}
.header-popupSol{
  text-align: center;
    padding: 14px 80px;
    color: black;
    font-size: 25px;
    margin: unset 
}
.slide-selectPpl{
  text-align: center;
  padding: 10px 10px;
  margin:unset;
  color: black;
  font-size: 17px;
}
.slide-policy{
  text-align: center;
  padding: 10px 10px;
  margin:unset;
  color: black;
  font-size: 17px;
}
.bttn-subt{
  border: none;

  
  background-color: #0c4da2;
  color: #fff;
  border-radius: 9px;
   margin: 24px;
    width: 1306px;
    height: 50px;
    font-size: 20px;
    text-align: left;
    padding-left: 22px;
    font-weight: 700;
    text-align: center
}
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

function openForm() {
  const h1 = document.createElement("span");
  h1.innerHTML = `
  <div class="slideshow-container modal">
  
        <div class="form-popup" id="myForm">
        <span class="close">&times;</span>
      <div class="mySlides fade">
      <h1 class="header-popup">TO GET STARTED ANSWER TWO QUESTIONS</h1>
      <p class="slideOne">(How much debt are you in? ⬇)</p>

      <p class="slideCon" >Subject to terms & conditions</p>
      <div >
      <input  class="bttn-ls" type="button" name="debtAmount" value="Less than 5,000"  onclick="plusSlides(1)"></input>
      </div>
      <div>
      <input type="button" name="debtAmount" value="£5,001 to £20,000" class="bttn-ls" onclick="plusSlides(1)"></input>
      </div>
      <div>
      <input type="button" name="debtAmount" value="More than £20,000" class="bttn-ls" onclick="plusSlides(1)"></input>
      </div>
      <div>
      </div>
      </div>

      <div class="mySlides fade">

<h2 class="header-popupDebts">HOW MANY DEBTS DO YOU HAVE?</h2>
<p class="slide-select">(Please select an option below)</p>
<div>
<input type="button" name="debts" id="debts1" value="Just 1" class="bttn-ls" onclick="plusSlides(1)"></input>
</div>
<div>
<input type="button" name="debts" id="debts2" value="2 or 3" class="bttn-ls" onclick="plusSlides(1)"></input>
</div>
<div>
<input type="button" name="debts" id="debts3" value="4 or more" class="bttn-ls" onclick="plusSlides(1)"></input>
</div>
<div>
</div>
</div>

<div class="mySlides fade">

<h2 class="header-popupSol">GREAT! NOW LET'S FIND YOU A SOLUTION</h2>
<p class="slide-selectPpl">We've helped 100,000+ people. Let us help you</p>
<div>
<input type="text" name="firstName" id="firstName" placeholder="First Name" class="bttn-ls" required id="First Name" ></input>
</div>
<div>
<input type="text" name="LastName" id="LastName" placeholder="Last Name" class="bttn-ls" ></input>
</div>
<div>
<input type="text" name="phNum" id="phNum" placeholder="Phone Number" class="bttn-ls" ></input>
</div>
<div>
<input type="text" name="emailId" id="emailId" placeholder="E-Mail"  class="bttn-ls"></input>
</div>
<div>
<button type="submit" class="bttn-subt" >Find Out More</button>
<p class="slide-policy">By submitting this form, you agree to be contacted by phone, email, WhatsApp© or SMS and consent to our Privacy Policy</p>
</div>
</div>
  </div>
    </div>
  </div>`

  const body = document.getElementById("body");
  body.appendChild(h1);
  let modal = document.getElementsByClassName("modal");
  modal[0].style.display = "block";
  showSlides(1);
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal[0].style.display = "none";
  }
  // When the user clicks on <span> (x), close the modal
}

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
//   window.location.reload();
// }

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}










function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
 

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  console.log(slides)
  if(slides[slideIndex - 1])
  slides[slideIndex - 1].style.display = "block";
}