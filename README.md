# Husky + Pivotal [![NPM Version](https://img.shields.io/npm/v/husky-pivotal.svg?style=flat)](https://npmjs.org/package/husky-pivotal) [![Build Status](https://travis-ci.org/redoPop/husky-pivotal.svg?branch=master)](https://travis-ci.org/redoPop/husky-pivotal)

[Husky](https://github.com/typicode/husky) commands to check that commits are tied to [Pivotal Tracker](https://www.pivotaltracker.com) stories.

## Installation

```
npm install husky husky-pivotal --save-dev
```

Then add the hook commands to your project's package.json, via the "scripts" field:

```json
"scripts": {
  "commitmsg": "hup-ckmsg",
  "precommit": "hup-ckbranch",
  "preparecommitmsg": "hup-mkmsg"
}
```

You can pick and choose the hook commands most appropriate to your project and preferences.

## About the hooks

Several hook commands are included with this package:

| Hook | Command | Description
| :--- | :------ | :----------
| `preparecommitmsg` | `hup-mkmsg` | Looks for a story ID in the current branch name and then uses it to prefill commit messages with a [[#____] format](https://www.pivotaltracker.com/help/api#Tracker_Updates_in_SCM_Post_Commit_Hooks) story reference.
| `commitmsg` | `hup-ckmsg` | Ensures that the commit message contains a [[#____] format](https://www.pivotaltracker.com/help/api#Tracker_Updates_in_SCM_Post_Commit_Hooks) story reference; aborts the commit if not.
| `precommit` | `hup-ckbranch` | Ensures that the current branch name contains a Pivotal Tracker story ID; aborts the commit if not.

You may not want to use every one of these commands: simply omit the ones you don't want from your npm scripts.

## License

[MIT](LICENSE)
