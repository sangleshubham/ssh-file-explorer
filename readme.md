# 🔐 SSH CLI Tool

A lightweight CLI tool for establishing SSH connections using password or private key authentication. Easily connect to remote servers via terminal with flexible config options.

---

## 🚀 Features

- [x] Connect to any SSH server via CLI
- [x] Supports **password** and **private key** authentication
- [x] Simple config flags: `--host`, `--port`, `--username`, etc.
- [ ] Logs connection status and errors
- [ ] File exploration on remote server
- [ ] Download files from remote server
- [ ] Interactive prompts using `inquirer`
- [ ] Colored CLI output using `chalk`
- [ ] Robust error handling and logging
- [ ] Cross-platform support (Linux, macOS, Windows)

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/yourusername/ssh-cli-tool.git
cd ssh-cli-tool
npm install
```
---

## 🧹 Usage

Run the CLI tool with required options:

```bash
node index.js --host your.server.com --port 22 --username youruser --password yourpassword --authMethod password
```

Or with a private key:

```bash
node index.js --host your.server.com --port 22 --username youruser --privateKeyPath /path/to/key --authMethod privateKey
```

---

## ⚙️ Options

| Flag               | Description                                         |
|--------------------|-----------------------------------------------------|
| `--host`           | SSH server hostname or IP                          |
| `--port`           | SSH port (default: 22)                             |
| `--username`       | SSH login username                                 |
| `--password`       | Password for authentication                        |
| `--privateKeyPath` | Path to private key file for key-based auth        |
| `--authMethod`     | `'password'` or `'privateKey'`                     |

---

## 🔧 Example

```bash
node index.js --host 192.168.1.10 --port 22 --username admin --authMethod privateKey --privateKeyPath ~/.ssh/id_ed25519
```

---

## 🗂️ Project Structure

```
/project-root
├── connect-ssh.js     # SSH Authenticator is implemented here
├── ssh-explorer.js    # The main execution js file
├── helper.js          # Helper code for project
├── package.json
├── ssh-config.json    # Stored Configuration of remote server
└── README.md
```

---

## 🤩 Dependencies

- [commander](https://www.npmjs.com/package/commander) (or `yargs`) for CLI parsing
- [node-ssh](https://www.npmjs.com/package/ssh2`) or other SSH client lib
- [chalk](https://www.npmjs.com/package/chalk) for colored CLI output *(planned)*
- [inquirer](https://www.npmjs.com/package/inquirer) for interactive prompts *(planned)*

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 🙌 Contributing

Have suggestions or improvements? Fork the repo and submit a pull request!

---

## 📞 Contact

For support, open an issue or email [sangleshubham9@gmail.com].

---

## 📖 Development Timeline

### Week 1: Project Setup and Basic SSH Connection

- [x] Initialize Node.js project with `npm init`
- [x] Install `commander` and `node-ssh`
- [x] Implement basic SSH connection
- [x] Test SSH connectivity
- [x] Add basic CLI commands (connect/disconnect)

### Week 2: File Exploration and Downloading

- [ ] List directories/files on remote server
- [ ] Navigate remote directories via CLI
- [ ] Download files from remote to local
- [ ] Show download progress indicators
- [ ] Test and debug file features

### Week 3: Enhancements and Documentation

- [ ] Add colored output using `chalk`
- [ ] Add interactive prompts via `inquirer`
- [ ] Implement robust error handling
- [ ] Set up logging for activity/errors
- [ ] Write detailed documentation with examples

### Week 4: Final Testing and Optimization

- [ ] Test on Linux, macOS, Windows
- [ ] Optimize SSH connection & file operations
- [ ] Final code/documentation review
- [ ] Prepare for deployment/personal use

---

## 🔗 Additional Resources

- [Node.js CLI Best Practices (GitHub)](https://github.com/lirantal/nodejs-cli-apps-best-practices?utm_source=chatgpt.com)
- [Building a CLI with Node.js in 2024 (Medium)](https://egmz.medium.com/building-a-cli-with-node-js-in-2024-c278802a3ef5?utm_source=chatgpt.com)
- [Task Manager CLI Tutorial (FreeCodeCamp)](https://www.freecodecamp.org/news/nodejs-tutorial-build-a-task-manager-cli-tool/?utm_source=chatgpt.com)