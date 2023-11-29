let accordion = document.querySelectorAll(".accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", ()=> {
      let p = accordion[i].firstElementChild;
      if (p.style.display === "block") {
        p.style.display = "none";
      } else {  
        p.style.display = "block";
      }
    });
  }


