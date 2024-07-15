# Meu novo projeto de portifólio!

- Detalhe importante: A internacionalização não foi traduzida com nenhuma serviço profissional, usei o google tradutor para confeccionar, só o fiz para demonstrar o conceito de internacionalização
- Caso fosse fazer esse tipo de trabalho para uma empresa internacional, necessitaria de um tradutor, para cada idioma ser muito bem revisado.
- Os únicos idiomas que eu fiz revisão foram de Inglês e Espanhol, já que são linguas que eu tenho conhecimento. Alemão eu tenho noções bem básicas portanto dei uma olhada também.
- Consultado os idiomas mais falados do mundo [aqui](http://izabelahendrix.edu.br/noticias/conheca-as-10-linguas-mais-faladas-no-mundo)

## Passo a passo para adicionar um novo idioma

0. Para demonstração vou usar o idioma Inglês como exemplo, sendo ele a abreviatura `en`.
1. Adicione o SVG da bandeira em `src/assets/flags-icons/`, salve com o nome da abreviação.svg, como por exemplo "en.svg".
2. Crie em `src/languages/` um novo arquivo com o nome da abreviação.json, por exemplo "en.json"
3. Traduza a partir de outro JSON todos os valores e mantenha a mesmíssima estrutura interna de chaveamento para não ocorrer nenhum bug ou falha.
4. Brasileiro fala "Inglês", e o Americano chama o proprio idioma de "English", portanto devemos adicionar EM TODOS OS JSONS uma nova chave no caminho `global.language` com a chave da abreviação e no valor colocar a maneira como o idioma é chamado em cada lingua diferente. Criei um prompt para o chatGPT para realizar essa tradução de forma mais rápida, está logo abaixo.
5. Após adicionar isso, vá em `src/interfaces/Languages.interface.ts` e adicione uma nova linha para a interface `LanguageOptions` que está sendo exportada. Ela precisa ser o nome da abreviação, e é uma string.
6. Agora navegue para `src/components/LanguageSwitcher.tsx`, importe a bandeira criada no passo 1.

```tsx
import enIcon from "../assets/flags-icons/en.svg";
```

7. Ainda neste arquivo, modifique a constante `languages` e insira um novo objeto dentro, que conterá as seguintes props :

```tsx
{
  code: "en",
  name: getTranslatedInformation(selected, "global.language.en"),
  icon: enIcon,
}
```

8. Para finalizar navegue até `src/utils/languageFunctions.ts` e faça as seguintes modificações:
9. Importe o JSON criado no passo 2.

```ts
import en from "../languages/en.json";
```

10. Adicione na constante `translations` o json importado no passo 9.
11. Na função `isLanguage` adicione a abreviatura no array retornado.
12. Pronto! Agora você já pode atualizar sua aplicação e ela possuirá o novo idioma criado!

## Prompt para traduzir o nome do idioma para todos os outros idiomas:

```md
Traduza o trecho solicitado para os seguintes idiomas:

1. Árabe (ar)
2. Bengali (be)
3. Mandarim Chinês (ch)
4. Tcheco (cz)
5. Alemão (de)
6. Dinamarquês (di)
7. Inglês Americano (en)
8. Espanhol (es)
9. Estoniano (et)
10. Finlandês (fi)
11. Francês (fr)
12. Grego (gr)
13. Hebraico (he)
14. Hindi (hi)
15. Húngaro (hu)
16. Indonésio (ind)
17. Italiano (it)
18. Japonês (ja)
19. Coreano (ko)
20. Latim (la)
21. Holandês (ne)
22. Norueguês (no)
23. Polonês (po)
24. Português Brasileiro (ptbr)
25. Português de Portugal (ptpt)
26. Russo (ru)
27. Suaíli (sw)
28. Tailandês (ta)
29. Turco (tu)
30. Zulu (zu)

Segue o trecho para ser traduzido, escrito em Português Brasileiro:
insira o que deseja traduzir aqui

Retorne cada um deles dessa forma:
sigla-do-idioma :
resto do json
"key": "TRECHO_TRADUZIDO",

- quero as siglas em ordem alfabetica na chave e o texto traduzido no valor do JSON
- por favor sem as vírgulas no final de cada linha, para facilitar o ato de copiar e colar para os JSONs principais
```

## Automatização

- Alguns passos podem ser automatizados com Python, como o passo 4 acima, de criar em cada JSON a chave e valor do novo idioma, será criado em breve
