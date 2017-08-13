function iniciarTime(iniciaEmFortaleza: boolean){
    const nome: string = 'Messi e amigo';
    let cidade = 'em Beberibe';

    if (iniciaEmFortaleza){
        cidade = 'em Fortaleza';
    }

    console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(false);