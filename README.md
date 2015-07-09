# Automation
This is a toolkit to better work on ContaAzul front-end.

## Requirements
To run this project, you need Nodejs installed in your system. *node ~v0.10 recommended*

## Installation
- To get this automator up and running, just run `npm install` after to clone the repo.
- **Important** Clone the repo into the same directory where you have cloned ContAzul (e.g. `workspace`)

## Use
The available tasks are:
- *grunt jshint*: inspect javascript syntax
- *grunt less*: compile contaazul.less file into contaazul.css
- *karma start*: run unit testing against the components we already have isolated on cdn
- *grunt watch*: run all above tasks

## Troubleshooting
- If you get `npm: command not found`, make sure you have npm-cli **globally** installed in your system.
- If you get `grunt: command not found`, make sure npm **globally** installed `grunt-cli` successfully.
- If you get `karma: command not found`, make sure npm **globally** installed `karma-cli` successfully.
