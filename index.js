const core = require('@actions/core');
const github = require('@actions/github');

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
const USERNAME = core.getInput('USERNAME');
const OPERATION = core.getInput('OPERATION');

try{
console.log(`Github Token ${GITHUB_TOKEN}`);
console.log(`Username ${USERNAME}`);
console.log(`Operation ${OPERATION}`);
}catch(error){
    core.setFailed(error.message);
}