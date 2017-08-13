function iniciarTime(iniciaEmFortaleza) {
    var nome = 'Messi e amigo';
    var cidade = 'em Beberibe';
    if (iniciaEmFortaleza) {
        cidade = 'em Fortaleza';
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(false);
