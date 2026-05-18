window.onload = () => {

  const info = document.getElementById("info");

  const planetas = document.querySelectorAll(".planeta");

  planetas.forEach(planeta => {

    planeta.addEventListener("click", () => {

      let texto = "";

      switch(planeta.id) {

        case "Sol":
          texto = "Sol.";
          break;

        case "mercurio":
          texto = "Mercúrio: planeta mais próximo do Sol.";
          break;

        case "venus":
          texto = "Vênus: planeta mais quente.";
          break;

        case "terra":
          texto = "Terra: nosso planeta.";
          break;

        case "marte":
          texto = "Marte: planeta vermelho.";
          break;

        case "saturno":
          texto = "Saturno: planeta com anéis.";
          break;
      }

      info.innerHTML = texto;

      planeta.setAttribute(
        "animation__scale",
        "property: scale; to: 1.5 1.5 1.5; dur: 300; dir: alternate;"
        );

    });

  });

};
