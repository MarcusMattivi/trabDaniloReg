function repeticaoPalavra(palavra, texto) {
    palavra = palavra.toLowerCase();
    texto = texto.toLowerCase();
    let regex = new RegExp("\\b" + palavra + "\\b", "g");
    let quantidade = texto.match(regex);

    if (quantidade) {
        return quantidade.length;
    } else {
        return 0;
    }
}

let texto = "Amanha irei para escola,amanha tambem irei jogar bola assim como amanha irei viajar de noite.Amanha tenho muitas coisas a fazer.";
let palavraBuscada = "amanha";
let quantidade = repeticaoPalavra(palavraBuscada, texto);

console.log("A palavra " + palavraBuscada + " ocorre " + quantidade + " vezes no texto.");