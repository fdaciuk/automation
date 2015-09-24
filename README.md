# Automation

> This is a toolkit to improve work on ContaAzul frontend.

## Installation

If you don't have `gulp` installed, do it! If you have one, update with this command:

```
npm i -g gulp babel
```

After that, clone this repository and run inside of the `automation` directory:

```
npm install
```

## How to Use

Run automation with the command:

```
gulp
```

At the first time that you run `gulp` command, it will ask you for your "JBOSS" directory, and your "application" directory. Fill it with absolute or relative paths.

## Up and run the application

To up and run your application, follow this instructions:

- Download  [`contaazul.sh`](https://gist.githubusercontent.com/fdaciuk/07c1786967bc75fe66ef/raw/ea5dc3a1e10e742ef21ed3b3eca3cefb82f35afa/contaazul.sh);
- Edit the environment variable (inside this file) `CA_HOME` with path to your "JBOSS";
- Create a symbolic link to `contaazul.sh` in `/usr/bin`:
```
cd /usr/bin
sudo ln -s /path/to/contaazul.sh contaazul
sudo chown yourUser:yourGroup contaazul
```

Restart your terminal.

### Running (inside your application directory)

**contaazul**: It shows all available commands.

**contaazul start**: It starts the JBOSS.

**contaazul stop**: It kill the JBOSS process.

**contaazul log**: It shows JBOSS log on terminal.

Just it! Enjoy ;)
