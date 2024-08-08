// script.js
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
    
     function opentab(tabname) {
         for (tablink of tablinks) {
             tablink.classList.remove("active-link");
         }
         for (tabcontent of tabcontents) {
             tabcontent.classList.remove("active-tab");
         }
         event.currentTarget.classList.add("active-link");
         document.getElementById(tabname).classList.add("active-tab");
     }

     document.addEventListener("DOMContentLoaded", function() {
        const textElement = document.querySelector(".hero-content");
        const originalText = textElement.textContent;
        let index = originalText.length;
        let deleting = true;
    
        function deleteText() {
            if (index >= 0) {
                textElement.textContent = originalText.slice(0, index);
                index--;
                setTimeout(deleteText, 30); // Adjust the speed of deletion here (100ms per character)
            } else {
                deleting = false;
                setTimeout(addText, 500); // Pause before starting to add text
            }
        }
    
        function addText() {
            if (index < originalText.length) {
                textElement.textContent = originalText.slice(0, index + 1);
                index++;
                setTimeout(addText,30); // Adjust the speed of adding text here (100ms per character)
            } else {
                deleting = true;
                setTimeout(deleteText, 500); // Pause before starting to delete text again
            }
        }
    
        deleteText();
    });
    