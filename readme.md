# 🔐 SSH File Explorer

A lightweight CLI tool for establishing SSH connections using password or private key authentication and exploring the files present in server. Easily connect to remote servers via terminal with flexible config options.

---

## 🚀 Features

- [x] Connect to any SSH server via CLI
- [x] Supports **password** and **private key** authentication
- [x] Simple config flags: `--host`, `--port`, `--username`, etc.
- [x] Logs connection status and errors
- [x] File exploration on remote server
- [x] Download files from remote server
- [x] Interactive prompts using `inquirer`
- [X] Colored CLI output using `chalk`
- [x] Robust error handling and logging
- [X] Cross-platform support (Linux, macOS, Windows)

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/sangleshubham/ssh-file-explorer.git
cd ssh-file-explorer
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

| Flag               | Description                                 |
| ------------------ | ------------------------------------------- |
| `--host`           | SSH server hostname or IP                   |
| `--port`           | SSH port (default: 22)                      |
| `--username`       | SSH login username                          |
| `--password`       | Password for authentication                 |
| `--privateKeyPath` | Path to private key file for key-based auth |
| `--authMethod`     | `'password'` or `'privateKey'`              |

---

## 🔧 Example

```bash
node index.js --host 192.168.1.10 --port 22 --username admin --authMethod privateKey --privateKeyPath ~/.ssh/id_ed25519
```

---

## 🗂️ Project Structure

```
/project-root
├── src           
    ├── connect-ssh.js           # SSH Authenticator is implemented here
    ├── file-and-folder-ssh.js   # Helper code for handling File and Folder download and traversal
    ├── helper.js                # Helper code for project
├── index.js          		 # The main execution js file
├── package.json
└── README.md
```

---

## 🤩 Dependencies

- [commander](https://www.npmjs.com/package/commander) (or `yargs`) for CLI parsing
- [node-ssh](https://www.npmjs.com/package/ssh2`) or other SSH client lib
- [chalk](https://www.npmjs.com/package/chalk) for colored CLI output _(planned)_
- [inquirer](https://www.npmjs.com/package/inquirer) for interactive prompts
- [password-prompt](https://www.npmjs.com/package/password-prompt) for getting password in cli

---

## 📖 Development Timeline

### Week 1: Project Setup and Basic SSH Connection

- [x] Initialize Node.js project with `npm init`
- [x] Install `commander` and `node-ssh`
- [x] Implement basic SSH connection
- [x] Test SSH connectivity
- [x] Add basic CLI commands (connect/disconnect)

### Week 2: File Exploration and Downloading

- [x] List directories/files on remote server
- [x] Navigate remote directories via CLI
- [x] Download files from remote to local
- [x] Show download progress indicators
- [x] Test and debug file features

### Week 3: Enhancements and Documentation

- [x] Add colored output using `chalk`
- [x] Add interactive prompts via `inquirer`
- [x] Implement robust error handling
- [x] Write detailed documentation with examples

### Week 4: Final Testing and Optimization

- [X] Test on Linux, macOS, Windows
	- [X] Known issue with Windows terminals: Some terminals may crash due to a known bug in the inquirer library.
 	- [X] Issue was fixed by Inquirer.js team some times back. 
- [x] Optimize SSH connection & file operations
- [x] Final code/documentation review
- [x] Prepare for deployment/personal use

### Week 5: If I ever get time.
- [ ] Remove password-prompt Dependency. 
---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 🙌 Contributing

Have suggestions or improvements? Fork the repo and submit a pull request!

---

## 📞 Contact

For support, open an issue or email [sangleshubham9@gmail.com].
