## Aluno: Luiz Gustavo Moura Santos

name = input('Insira o nome do aluno: ')
entry = []

while True:
    nota = float(input('Insira uma nota para o aluno: '))
    entry.append(nota)
    resp = input('Deseja parar o programa? sim ou nao: ')
    if resp == 'sim':
        break

lowerEntry = sorted(entry)
highestEntry = sorted(entry, reverse=True)
mediaEntry = sum(entry) / len(entry)

print(f'Nota mais baixa do aluno {name}: {lowerEntry[0]}, nota mais alta do aluno: {highestEntry[0]}, média das notas do aluno: {mediaEntry:.2f}')
