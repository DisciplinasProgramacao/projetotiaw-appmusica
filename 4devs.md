# Como clonar o repositório, realizar sua tarefa e subir para o Github.

## Esse passo a passo será realizado utilizando o <b>TERMINAL (Git Bash)</b> !!

## <b>1º Clonar o repositório</b>

Utilize o comando:
`git clone https://github.com/DisciplinasProgramacao/projetotiaw-appmusica`

</br>

## <b>2º Criar uma nova branch</b>

#### Seguiremos uma padronização para a nomenclatura das branchs.

#### TODAS irão ser da seguinte forma:

#### `feat/APP-(numero-da-sua-tarefa)-(breve-descricao)`

#### Exemplo:

#### `feat/APP-1-criando-repositorio`

#### Estando na MASTER execute o comando

`git checkout -b feat/APP-(numero-da-sua-tarefa)-(breve-descricao)`

</br>

## <b>3º Criar um commit</b>

#### Apos realizar todas as suas mudanças, execute o comando

`git add . && git commit -m "feat: (escreva uma breve descricao)"`

#### Exemplo:

#### `git commit -m "feat: criando o arquivo 4 devs"`

</br>

## <b>4º Atualizando com a MASTER</b>

#### Apos commitar suas mudanças lembre-se de dar um pull na MASTER (atualizar com a MASTER) para subir sua branch atualizada com a ultima versão do app

`git fetch && git merge origin/master`

</br>

## <b>5º Subindo sua branch para o Github</b>

#### Apos realizar TODOS os passos anteriores, suba sua branch com o comando:

`git push origin feat/APP-(numero-da-sua-tarefa)-(breve-descricao)`

#### Exemplo:

#### `git push origin feat/APP-1-criando-repositorio`

</br>

## <b>6º Abrir seu PR (Pull Request) no Github</b>

#### Agora vá ao Github e abra seu PR para que possa ser aprovada e mergeada as suas atualizações
