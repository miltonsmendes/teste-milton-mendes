# Teste Frontend V4

![Aiko](img/aiko.png)

Neste teste, serão avaliados seus conhecimentos em Javascript, HTML e CSS, a criatividade e metodologia aplicadas no desenvolvimento, a usabilidade e design da aplicação final.

## O Desafio

Você é o desenvolvedor frontend de uma empresa que coleta dados de equipamentos utilizados em uma operação florestal. Dentre esses dados, estão o histórico de posições e estados desses equipamentos. O estado de um equipamento é utilizado para saber o que o equipamento estava fazendo em um determinado momento, seja *Operando*, *Parado* ou em *Manutenção*. O estado é alterado de acordo com o uso do equipamento na operação; já a posição do equipamento é coletada através do GPS e é enviada e armazenada periodicamente pela aplicação.

Seu objetivo é, de posse desses dados, desenvolver o frontend de uma aplicação web que trate e exiba essas informações para os gestores da operação.

## Requisitos

Esses requisitos são obrigatórios e devem ser desenvolvidos para a entrega do teste.

* **Posições dos equipamentos**: Exibir no mapa os equipamentos nas suas posições mais recentes.
* **Estado atual do equipamento**: Visualizar o estado mais recente dos equipamentos. Exemplo: mostrando no mapa, como um pop-up, mouse hover sobre o equipamento, etc.
* **Histórico de estados do equipamento**: Permitir a visualização do histórico de estados de um equipamento específico ao clicar sobre o equipamento.

## O que foi feito
* Desenvolvido um painel para exibir e esconde informacoes de acordo com a preferencia do usuario
* Icones personalizado
* Adicao de cluster para melhor vizualizar multiplos equipamentos no mapa
* Adicao de opcao para mostrar trajetoria do equipamento

## Desafios encontrados no teste
* Correlacionar a última data dos equipamentos em diferentes tabelas
* Personalizar ícones

## Imagens do layout
![image](https://github.com/user-attachments/assets/8affd603-7a3b-4d9d-9d8c-0152c306b840)
![image](https://github.com/user-attachments/assets/184dcad3-e083-4574-9b97-83c768d648cb)
![image](https://github.com/user-attachments/assets/c20e0727-8bcb-4a05-9122-0591d8b81f4e)
![image](https://github.com/user-attachments/assets/1211ab88-be3e-43ff-9e6e-0e9d8dedd741)
![image](https://github.com/user-attachments/assets/697cc0af-ba5f-4b93-a9db-3d864a87d7f0)


## Como iniciar o desenvolvimento

Rodar frontend:
```
* Instale o [npm](https://nodejs.org/en/download/)
* Faça o clone do projeto
* Acesse a branch teste/milton-mendes
* Instale as dependências com npm install na pasta desafio-aiko
* Use npm run dev/yarn start na pasta desafio-aiko para iniciar o projeto.
* Acesse http://localhost:3000
```

