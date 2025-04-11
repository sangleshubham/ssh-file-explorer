
import path from 'path'
import fs from 'fs'

async function ls(dir) {

    const { stdout, stderr } = await this.execCommand(`ls -l "${dir}"`)
    if (stderr) return false
    const currentFolders = { 0: { type: "d", filename: ".." }}
    console.log("0) Go Back")
    stdout?.split("\n").filter(Boolean).slice(1).map(
        (line, index) => {
            let [[type], , , , , , , , ...filename] = line.split(/\s+/);
            filename = filename.join(" ")
            console.log(`${index + 1}) ${filename}`)
            currentFolders[index + 1] = { type, filename }
        }
    )
    return currentFolders

}

async function cd(dir, currentDirectory) {
    const { type, filename } = dir ?? {}
    // If path is file
    if (type === '-') {
        const filePath = `${path.join(currentDirectory, filename)}`
        const basePath = `./download`
        if (!fs.existsSync(basePath)) fs.mkdirSync(basePath)
        const localPath = path.join(basePath, filename)
        await this.getFile(localPath, filePath)
        return currentDirectory
    }
    const { stdout, stderr } = await this.execCommand(`cd "${filename}" && pwd`, {
        cwd: currentDirectory
    })
    if (stderr) return false
    return stdout
}

async function pwd() {
    const { stdout, stderr } = await this.execCommand("pwd")
    if (stderr) return false
    return stdout
}

export default {
    ls,
    cd,
    pwd,
}