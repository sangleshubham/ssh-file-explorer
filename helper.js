const defaultSSHPaths = ['id_rsa', 'id_ecdsa', 'id_ed25519']

const errorMessages = {
    login_method_invalid: "Possible login methods",
    login_method_allowed: [
        'privateKey -> Login using private key',
        'password   -> Login using password'
    ],
    login_failed : "Failed to connect with server, Please check configuration and try again.",
    ssh_key_length: "More than 1 SSH key found, Please use custom path to specify the key in config",
    ssh_key_invalid_path: "No SSH Key Found! Please update path in config file if error persists.",
    password_not_entered: "No password entered"
}

export default {
    defaultSSHPaths,
    errorMessages
}