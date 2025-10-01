function toggleMode() {
    const html = document.documentElement

html.classList.toggle("light") 
// Método extenso sem usar a sintaxe .togge \/
//     if(html.classList.contains("light")) {
//         html.classList.remove("light")
//     } else {
//         html.classList.add("light")
//     }   ------------------------------- /\
            // Pegar a TAG da foto
const img= document.querySelector("#profile img") 
            //substituir a imagem
if(html.classList.contains("light")) {
            // se estiver no dark mode, adicionar a imagem dark
    img.setAttribute("src", "./assets/avatar_quad.JPG")
    // img.setAttribute("alt", "Na imagem há um homem jovem, de pele clara, olhos claros e barba rala bem aparada no queixo e acima dos lábios. Ele tem cabelo curto e ondulado, com os fios mais compridos no topo da cabeça. Está usando um moletom claro, de cor rosa bem suave. O enquadramento é um autorretrato (selfie), tirado de perto, mostrando apenas o rosto e parte dos ombros. Ao fundo, é possível ver um ambiente interno, que parece ser uma cozinha, com piso de cerâmica branca. À direita, há uma caminha de cachorro estampada.")
} else {
            //se estives no light mode, manter a imagem root
            img.setAttribute("src", "./assets/avatar_quad_dark.JPG")
            // img.setAttribute("alt", "Na imagem há um homem jovem, de pele clara, olhos claros e barba rala, com destaque para o cavanhaque e o bigode. Ele tem cabelo curto e ondulado, levemente bagunçado. Usa um moletom preto com capuz. A foto é um autorretrato (selfie) tirado de perto, em um ângulo levemente de baixo para cima, o que realça a expressão confiante do rosto. O fundo é uma parede lisa, pintada em tom alaranjado. A iluminação é criativa, com luzes em tons quentes (laranja) e frios (azulados), que contrastam no rosto e dão um ar artístico e moderno à cena.")
        }
}