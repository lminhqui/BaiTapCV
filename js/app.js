$(document).ready(function(){

    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    })
    $('#tablink').ripples({
        resolution: 512,
        dropRadius: 10
    })
    

});
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

document.getElementById('submit').addEventListener('click', (e)=>{
    e.preventDefault();
    const contactForm = document.querySelector('#form');
    const name = document.querySelector('[name="name"]');
    const email = document.querySelector('[name="email"]');
    const subject = document.querySelector('[name="subject"]');
    const message = document.querySelector('[name="content"]');
    // validation before sending the data
    if(name.value.length===0){
      Toastify({
        text: "Please fill the inputs",
        duration: 1000,
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #ed0808, #b83922e0)",
          },
        }).showToast();
    }else{
      Toastify({
        text: "Thank you. your form was submited",
        duration: 1000,
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #21ed08, #3dc96ce0)",
          },
        }).showToast();
      document.getElementById('form').reset();
    }
  })
  