// For index.html (Input Page)
if (window.location.pathname.includes("index.html")) {
    document.getElementById("userForm").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission
  
      // Get input values
      const name = document.getElementById("name").value;
      const profession = document.getElementById("profession").value;
  
      // Store data in localStorage
      localStorage.setItem("name", name);
      localStorage.setItem("profession", profession);
  
      // Redirect to display.html
      window.location.href = "display.html";
    });
  }
  
  // For display.html (Display Page)
  if (window.location.pathname.includes("display.html")) {
    // Retrieve data from localStorage
    const name = localStorage.getItem("name");
    const profession = localStorage.getItem("profession");
  
    // Display data on the page
    document.getElementById("nameDisplay").textContent = 'Name: ${name}';
    document.getElementById("professionDisplay").textContent = 'Profession: ${profession}';
  }