window.onscroll = () => {
  const header = document.querySelector("#navbar");
  if (this.scrollY <= 10) header.className = "";
  else header.className = "scroll";
};
