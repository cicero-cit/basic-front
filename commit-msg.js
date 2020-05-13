const fs = require('fs');

const gitPath = `./${process.env.HUSKY_GIT_PARAMS}`;
const impRegex = /(\[(feat|bug|test)\]){1,} (.+)/g;

const message = fs.readFileSync(gitPath, 'utf8').trim();

if (message.match(impRegex)) {
  process.exit(0);
}

console.log('Mensagem de commit inválida.\nUtilize o modelo:');
console.log('[feat] Descrição da feature, ou');
console.log('[bug] Descrição do bug, ou');
console.log('[test] Descrição do teste');
process.exit(1);
