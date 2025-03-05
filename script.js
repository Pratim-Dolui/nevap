function showForm(formId) {
    document.querySelectorAll(".form-container").forEach((form) => {
      form.style.display = "none";
    });
    document.getElementById(formId).style.display = "block";
  }
  
  function login() {
    alert("Login clicked. Implement authentication here.");
  }
  
  function registerTemp() {
    alert("Temporary registration submitted!");
  }
  
  function registerOrg() {
    alert("Organizational vehicle registered!");
  }
  
  function registerInd() {
    alert("Individual vehicle registered!");
  }
  