function toggleMenu(icon) {
  const navbar = document.getElementById("navbar");

  // تأكد من العنصر موجود قبل التعديل
  if (navbar && icon) {
    navbar.classList.toggle("active");
    icon.classList.toggle("active");
  }
}
