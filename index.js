  //Movimento suave da logo com o mouse passando 

  const logo = document.getElementById("main-logo");
  document.addEventListener("mousemove", (e) => { const x = (e.clientX / window.innerWidth - 0.5) * 30;

  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  logo.style.transform = `translate(${x}px, ${y}px)`; });
  document.addEventListener("mouseleave", () => { logo.style.transform = "translate(0,0)"; });