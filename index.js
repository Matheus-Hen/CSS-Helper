import prompt from "prompt-sync"
import color from "ansi-colors"

const promptline = prompt()
let input = [];
let verify
for (let i = 0; verify != "sair"; i++) {
    input[i] = promptline("Qual comando CSS você deseja inserir?")
    input[i] = input[i].toLowerCase()
    verify = input[i]
}

input.pop();
input.sort();

for (let y = 0; input.length > y; y++) {
    console.log(color.bold.bgCyan(input[y]));
}