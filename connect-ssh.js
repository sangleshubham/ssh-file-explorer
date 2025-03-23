'use strict'
import { NodeSSH } from "node-ssh";
import os from 'os'
import fs from 'fs'
import path from 'path'
import passwordPrompt from 'password-prompt'

// Helpers imported
import helper from './helper.js'

let sshServer = null

async function getSSHLoginDetails({ authMethod, privateKeyPath, username, password }) {
    switch (authMethod) {
        case 'privateKey':

            return ((privateKeyPath) => {
                if (privateKeyPath) return path.resolve(privateKeyPath) 

                // Return default path of the ssh private keys
                const sshKeyPaths = []
                helper.defaultSSHPaths.forEach(function isValidSSHPath(privateKeyFileName) {
                    const filePath = path.join(os.homedir(), '.ssh', privateKeyFileName)
                    if (fs.existsSync(filePath)) return sshKeyPaths.push(filePath)
                })

                // Check if only 1 ssh key path is present in paths array
                if (sshKeyPaths.length > 1) {
                    process.stdout.clearScreenDown()
                    console.error(helper.errorMessages.ssh_key_length)
                    console.table(sshKeyPaths)
                }

                // Return the first ssh keys path
                return sshKeyPaths[0] ? { username, privateKeyPath: sshKeyPaths[0] } : new Error(helper.errorMessages.ssh_key_invalid_path)
            })(privateKeyPath)

        case 'password':
            if (!password) {
                // Take input from user as password field.
                password = await passwordPrompt('ssh password: ')
                if (!password) return new Error(helper.errorMessages.password_not_entered)
            }
            return { username, password }

        // If invalid login method is selected.
        default: {
            process.stdout.clearScreenDown()
            console.log(helper.errorMessages.login_method_invalid)
            console.table(helper.errorMessages.login_method_allowed)
            return new Error(helper.errorMessages.login_method_invalid)
        }
    }
}

/**
 * 
 * @param {*} config A configuration for the SSH server to connect
 * @returns A connection object
 * This is a singolton function which always return single connection. 
 */
async function getSSHServer(config = {}) {

    if (!sshServer || sshServer?.isConncted()) {
        const {
            username = '', privateKeyPath = "", password = ''
        } = await getSSHLoginDetails({
            authMethod: config.authMethod || "privateKey",
            privateKeyPath: config.privateKeyPath,
            username: config.username || 'root', password: config.password
        })

        try {
            sshServer = await new NodeSSH().connect({
                host: config.host, port: config.port || 22, 
                username, ...(password && { password }),
                ...(privateKeyPath && { privateKeyPath })
            })
        } catch (error) {
            return { isConnected: () => false }
        }
    }
    return sshServer
}

/** Helper function to use this function as constructor */
function SSHConnect(config) {
    return getSSHServer(config)
}

export default SSHConnect
