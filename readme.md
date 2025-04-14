# 🔐 SSH File Explorer

A lightweight CLI tool for establishing SSH connections using password or private key authentication and exploring the files present in server. Easily connect to remote servers via terminal with flexible config options.

---

## 🎯 Project Overview

SSH File Explorer allows users to connect to remote servers via SSH and interact with their file systems from the comfort of their terminal. With support for both password and private key authentication, this tool aims to reduce the friction in secure file access and manipulation.

> Goal: Provide a cross-platform, intuitive, and scriptable tool for managing files over SSH using a CLI-first approach.

---

## 🚀 Features

- [x] Connect to any SSH server via CLI
- [x] Supports **password** and **private key** authentication
- [x] Simple config flags: `--host`, `--port`, `--username`, etc.
- [x] Logs connection status and errors
- [x] File exploration on remote server
- [x] Download files from remote server
- [x] Interactive prompts using `inquirer`
- [x] Colored CLI output using `chalk`
- [x] Robust error handling and logging
- [x] Cross-platform support (Linux, macOS, Windows)

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
| `--authMethod`     | 'password' or 'privateKey'                  |

---

## 📚 Common Use Cases

- Backup remote files to your local machine
- Inspect directories on a Linux server without needing a GUI
- Avoid GUI-based SFTP clients in headless environments
- Simplify DevOps workflows via terminal
- Test server access and structure during CI/CD

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
│   ├── connect-ssh.js           # SSH connection logic
│   ├── file-and-folder-ssh.js   # File/folder traversal & download
│   └── helper.js                # General helper functions
├── index.js                     # Entry point
├── package.json
└── README.md
```

---

## 🤩 Dependencies

- commander (or yargs) — for CLI parsing
- node-ssh — for SSH connections
- chalk — for colored output
- inquirer — for interactive CLI UX
- password-prompt — for password input

---

## 📖 Development Timeline

### Week 1: Project Setup and Basic SSH Connection
- [x] Initialize project
- [x] Install commander & node-ssh
- [x] Implement basic SSH connection
- [x] Test connectivity
- [x] Add CLI flags

### Week 2: File Exploration and Downloading
- [x] List remote directories/files
- [x] Navigate directories
- [x] Download files
- [x] Add progress indicators
- [x] Debug and improve UX

### Week 3: Enhancements and Documentation
- [x] Colored output with chalk
- [x] Add inquirer prompts
- [x] Handle errors gracefully
- [x] Write docs and examples

### Week 4: Final Testing and Optimization
- [x] Test on Linux, macOS, Windows
  - [x] Windows terminal crash (inquirer bug) — resolved
- [x] Optimize SSH logic
- [x] Final review & polish

### Week 5: If I ever get time
- [ ] Remove password-prompt dependency

---

## 🔍 Roadmap / To-Do

- [ ] Recursive folder download
- [ ] Upload files to server
- [ ] Server bookmarking
- [ ] Support `.ssh/config` parsing

---

## 🤝 Contributing

We welcome contributions!

### Contribution Steps
1. Fork the repo
2. Create a feature branch
3. Write your changes
4. Commit with meaningful messages
5. Push and open a pull request

### Code of Conduct
- Be kind and respectful
- Provide constructive feedback
- Assume positive intent

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 📞 Contact

For support, open an issue or email:

📧 sangleshubham9@gmail.com  
🌐 github.com/sangleshubham
