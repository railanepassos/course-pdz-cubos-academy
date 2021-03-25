/**
    Calcular
    Quadrado => lado X lado
    Retângilo => largura X comprimento
    Triangulo => base X altura / 2


 */

    let lado = 5, largura = 16, comprimento = 6, base = 12, altura = 8, resposta = 0;
    
    resposta = lado * lado;
    console.log(`A área do quadrado é ${resposta}`);

    resposta = largura * comprimento;
    console.log(`A área do retângulo é ${resposta}`);

    reposta = base * (altura / 2);
    console.log(`A área do triângilo é ${resposta}`);