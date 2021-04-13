# Husky + Pivotal [![NPM Version](https://img.shields.io/npm/v/husky-pivotal.svg?style=flat)](https://npmjs.org/package/husky-pivotal) [![Build Status](https://travis-ci.org/redoPop/husky-pivotal.svg?branch=master)](https://travis-ci.org/redoPop/husky-pivotal)
[Husky](https://github.com/typicode/husky) hook commands to keep commits tied to [Pivotal Tracker](https://www.pivotaltracker.com) stories.

## Installation
1. [Set up Husky](https://typicode.github.io/husky/)
2. `npm install husky-pivotal --save-dev`
3. Add one or more of the hook commands to suit your needs:

## Hook commands
<details><summary><strong>hup-mkmsg</strong> automatically adds story references to new commits</summary>

The `hup-mkmsg` command looks for a Pivotal Tracker Story ID in the current branch name and then uses it to prefill new commit messages with a [[#____] format](https://www.pivotaltracker.com/help/api#Tracker_Updates_in_SCM_Post_Commit_Hooks) story reference. For example, if you're working in a branch named `123456-new-feature` then `[#123456]` will be prefilled in new commit messages created within that branch.

To use this command, add `hup-mkmsg` to your Husky `prepare-commit-msg` hook:

```
npx husky add .husky/prepare-commit-msg 'npx --no-install hup-mkmsg "$1"'
```
</details>

<details><summary><strong>hup-ckmsg</strong> disallows commits without story references</summary>

The `hup-ckmsg` command checks that commit messages contain a [[#____] format](https://www.pivotaltracker.com/help/api#Tracker_Updates_in_SCM_Post_Commit_Hooks) story reference. The commit is aborted if it doesn't contain a story reference.

To use this command, add `hup-ckmsg` to your Husky `commit-msg` hook:

```
npx husky add .husky/commit-msg 'npx --no-install hup-ckmsg "$1"'
```
</details>

<details><summary><strong>hup-ckbranch</strong> disallows commits outside of story branches</summary>

The `hup-ckbranch` command checks that the current branch name contains a Pivotal Tracker Story ID. Commits are aborted if the branch name doesn't contain a Story ID.

To use this command, add `hup-ckbranch` to your Husky `pre-commit` hook:

```
npx husky add .husky/pre-commit 'npx --no-install ckbranch'
```
</details>

## License
[MIT](LICENSE)
