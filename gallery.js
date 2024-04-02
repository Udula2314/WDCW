function myFunction(img, text) {
    var modal = document.getElementById("myModal");
    var expandedImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandedImg.src = img.src;
    imgText.textContent = text;
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }