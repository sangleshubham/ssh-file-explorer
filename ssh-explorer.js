'use strict'

import { Command } from 'commander';
import SSHConnect from './connect-ssh.js'
import helper from './helper.js'
import fileFolderHelper from './file-and-folder-ssh.js';
import inquirer from 'inquirer'

/**
 * sshConnection : Is the connection to you ssh server
 * Support 2 Authetication method.
 * 1. Using SSH Key (Default) -> privateKey
 * 2. Using Password -> password
 * 
Config options:
host           - SSH server hostname or IP address
port           - SSH port (default: 22)
username       - SSH login username (Default : root)
password       - Password for authentication (if used)
authMethod     - 'password' or 'privateKey'(default)
privateKeyPath - File path to private key (for key-based auth)
*/

/**
 * Get options from the terminal
*/
const program = new Command();

program.name('ssh-file-explorer')
    .usage('[options] <host>')
    .description('A lightweight CLI tool for establishing SSH connections using password or private key authentication and exploring the files present in server. Easily connect to remote servers via terminal with flexible config options.')
    .version('1.0.0');

program
    .option('-p, --port <number>', 'SSH port', 22)
    .option('-u, --username <username>', 'SSH login username', 'root')
    .option('-w, --password <password>', 'Password for authentication')
    .option('--authType <type>', 'Set authentication type ("password" or "privateKey")', 'privateKey')
    .option('--privateKeyPath <path>', 'Path to private key file')
    .argument('<host>', 'SSH server hostname or IP address')

program.parse(process.argv);
const {
    port, username, password,
    authType, privateKeyPath
} = program.opts() ?? {}

const [host] = program.args ?? []

const sshConnection = await new SSHConnect({
    host, port,
    username, password,
    authMethod: authType, privateKeyPath
})

if (!sshConnection.isConnected()) {
    console.error(helper.errorMessages.login_failed)
    process.exit(1)
}

let currentDirectory = `/home/${username}`

// Register Extra Methods 
const changeDirectoryTo = fileFolderHelper.changeDirectory.bind(sshConnection)
const listFilesFor = fileFolderHelper.listDirectory.bind(sshConnection)

// Handle FTP.
while (true) {
    console.clear()
    console.log(`PWD : ${currentDirectory}`)
    const choices = await listFilesFor(currentDirectory)
    
    // Determine the terminal's height
    const terminalHeight = process.stdout.rows || 24; // Default to 24 if undefined

    // Calculate pageSize: subtracting 4 to account for prompt and padding
    const pageSize = Math.max(5, terminalHeight - 4); // Ensure at least 5 choices are shown

    const answer = await inquirer.prompt([{
        type: 'list',
        name: 'path',
        message: 'Select Directory: ',
        choices,
        pageSize,
        loop : false
      }])
    // Change directory to selected folder.
    currentDirectory = await changeDirectoryTo(answer?.path, currentDirectory)
}