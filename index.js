const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)

  pad = ''
  repo = github.context.payload.repository.full_name
  for (i=0; i<37-repo.length; i++) { pad += ' ' }
  console.log(' ______________________________________')
  console.log("/ It looks like you're trying to build \\")
  console.log("\\ " + repo + pad + "/")
  console.log(' --------------------------------------')
  console.log(' \\')
  console.log('  \\')
  console.log('     __')
  console.log('    /  \\')
  console.log('    |  |')
  console.log('    @  @')
  console.log('    |  |')
  console.log('    || |/')
  console.log('    || ||')
  console.log('    |\\_/|')
  console.log('    \\___/')
} catch (error) {
  core.setFailed(error.message);
}
