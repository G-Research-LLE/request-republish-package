const core = require('@actions/core');
const {create, UploadOptions} = require('@actions/artifact');
const github = require('@actions/github');
const fs = require('fs').promises;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

(async () => {
    try {
        const destOwner = core.getInput('dest-owner');
        const destRepo = core.getInput('dest-repo');
        const packagePath = core.getInput('package-path');
        const repositoryDispatchToken = core.getInput('repository-dispatch-token');

        //const octokit = github.getOctokit(pat);

        console.log('Checking SHA256 of ' + packagePath);
        const {stdout} = await exec('sha256sum ' + packagePath);
        sha256 = stdout.slice(0, 64);
        console.log('SHA256 is ' + sha256);

        console.log('Uploading package as a GitHub artifact');
        const artifactClient = create();
        const uploadOptions = {continueOnError: false};
        const uploadResponse = await artifactClient.uploadArtifact(packagePath, [packagePath], process.cwd());

    } catch (error) {
        core.setFailed(error.message);
    }
})();
