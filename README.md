# Husky + Pivotal [![NPM Version](https://img.shields.io/npm/v/husky-pivotal.svg?style=flat)](https://npmjs.org/package/husky-pivotal) [![Build Status](https://travis-ci.org/redoPop/husky-pivotal.svg?branch=master)](https://travis-ci.org/redoPop/husky-pivotal)

[Husky](https://github.com/typicode/husky) Git hooks to check that the team's commits are [associated with Pivotal Tracker stories.](https://www.pivotaltracker.com/help/api#Tracker_Updates_in_SCM_Post_Commit_Hooks)

## Installation

```
npm install husky husky-pivotal --save-dev
```

Then add hooks to your project's package.json:

```
{
  scripts: {
    "commitmsg": "hup-ckmsg",
    "precommit": "hup-ckbranch",
    "preparecommitmsg": "hup-mkmsg"
  }
}
```

You can pick and choose the hooks most appropriate to your project.

## About the hooks

These are the hooks included with this package:

### `hup-ckbranch` (Check Branch)

For a `precommit` hook.

Checks that the current branch name contains a Pivotal Tracker Story ID and aborts the commit if it does not.

Story ID detection is naive: the first string of 6 or more consecutive digits is assumed to be a Story ID.

### `hup-ckmsg` (Check Message)

For a `commitmsg` hook.

Checks that the last commit message contained a Pivotal Tracker Story ID reference in [`[#________]`](https://www.pivotaltracker.com/help/api#Tracker_Updates_in_SCM_Post_Commit_Hooks) notation and aborts the commit if it did not.

### `hup-mkmsg` (Make Message)

For a `preparecommitmsg` _or_ `commitmsg` hook.

Looks for a Pivotal Tracker Story ID in the current branch name and appends it to the pending commit message if found.

If none is found, a comment is added to the message template reminding the committer to add one.

## License

[MIT.](LICENSE)
