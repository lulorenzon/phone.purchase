const buttonId = document.querySelector("button")


buttonId.addEventListener("click", function(){
    console.log("Fui clicado", buttonId)
})
function dizTeste(){
    console.log("Fui clicado")

}

function updateCopyright() {
    const currentYear = new Date().getFullYear();
    const copyrightText = `© Copyright 2000-${currentYear}  Web Developer `;
    document.getElementById("copyright").textContent = copyrightText;
  }
  
  updateCopyright();
  
  async function conectarComApi() {
    const conectaApi = await fetch("");
    const conectaApiConvertido = await conectaApi.json()
    console.log(conectaApiConvertido);
    }
    
    conectarComApi();