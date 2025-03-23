'use strict'

import SSHConnect from './connect-ssh.js'
import helper from './helper.js'

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

const sshConnection = await new SSHConnect({
    host: "",
})

if(!sshConnection.isConnected()) {
    console.error(helper.errorMessages.login_failed)
    process.exit(1)
}

console.log(`is Server Connected : ${sshConnection.isConnected()}`)