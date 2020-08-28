#language: pt
Funcionalidade: Listagem

    Como usuário , desejo acessar a Listagem
    Para que possa visualizar a listagem

Cenario: Listagem sem registros
    Dado que o site não possui registros
    Quando acessar a listagem
    Entao devo visualiar a listagem vazia

Cenario: Listagem com apenas um registro
    Given que o site possui apenas um registro
    Quando acessar a listagem
    Entao devo visualizar apenas um registro
