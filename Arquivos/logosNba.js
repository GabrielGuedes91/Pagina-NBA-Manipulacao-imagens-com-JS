function    TrocarImagem(titulo , nomeArqImagemGrande) // ta chegando o titulo e a imagem na função TrocarImagem()
{
    //Criar objeto que acesse (referencie) a imagem grande
    var objImgGrande = document.getElementById("imgGrande") // document.getElementByld("ID(html)")
    
    objImgGrande.src = "imgs/" + nomeArqImagemGrande
    objImgGrande.title = titulo
}