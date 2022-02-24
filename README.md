<h1 align="center"> TS-SOLID </h1>

![1571029149847-attachment](https://user-images.githubusercontent.com/14266075/155210393-5bc69ca8-8a34-465d-86ed-04afd2e1c67b.png)

<h1 align="center"> O QUE É O SOLID </h1>

SOLID é um acrônimo para cada um dos cinco princípios que fazem parte desse grupo:

- Single Responsability Principle (Princípio da Responsabilidade Única);
- Open/Closed Principle (Princípio do “Aberto para Extensão/Fechado para Implementação);
- Liskov Substitution Principle (Princípio da Substituição de Liskov);
- Interface Segregation Principle (Princípio da Segregação de Interfaces);
- Dependency Inversion Principle (Princípio da Inversão de Dependências)


![SOLID](https://user-images.githubusercontent.com/14266075/155244338-f16bf21b-5609-4777-bb45-8319537d540a.png)

Pelo que entendi, o SOLID são orientações e principios para facilitar o entendimento do código e sua manutenção. A estrutura passada nas aulas não é uma "regra" absoluta do SOLID, mas sim, uma possibilidade de aplicar os principios. Você pode criar sua estrutura se achar melhor, mas ao seguir uma já existente não estará reinventando a roda, e tendo uma "estrutura" padrão o time de desenvolvimento rapidamente conseguirá entender o sistema.
No caso eu entendi a estrutura desta maneira:
rotas - têm a responsabilidade de receber os requests, repassá-los para as outras camadas e retornar um response
controller - um intermediário entre a rota e o use case, conhece os dois lados e (até o momento) é onde fazemos um tratamento de erro
UseCases: é onde colocamos a regra de negócio: validações, cálculos,etc
Repository: é onde temos informações do nosso repositório, estrutura de dados , conexões etc.
Model é onde modelamos nossa entidade
Veja que cada "camada" têm sua responsabilidade/objetivo e, apesar de haver uma comunicação entre elas, uma não sabe de todos os detalhes da outra. Isto fica mais claro usando a rota como exemplo. A rota não sabe nada do nosso reposítório, model, etc.

Indo mais além, para tornar o projeto mais maleável, foi utilizado o conceito de interfaces, que faz com quem usa um "objeto" de uma interface não precise se preocupar com sua implementação, uma vez que a interface garante que o objeto está aderente ao contrato estabelecido pela interface. Esta estruturação permite que mudemos "peças" do projeto sem termos problemas. um bom exemplo é imaginar uma interface aves que têm alguns atributos como : cor das penas, cor do bico, etc, e alguns métodos como voar e cantar. A interface não implementa nenhum código, ela só "define" o que é uma ave. Ai podemos criar a classe canarinho que implementa a interface aves. Podemos criar uma outra classe Pato, outra Ganso..e assim por diante. Veja que os metódos de cantar e voar serão diferentes, mas todos as classes preenchem os requisitos definidos na interface.