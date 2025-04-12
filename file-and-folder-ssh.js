import path from "path";
import fs from "fs";

async function listDirectory(directoryPath) {
	// Execute the command to list directory contents
	const { stdout, stderr } = await this.execCommand(`ls -la "${directoryPath}"`);
	if (stderr) {
		console.error(`Error listing directory: ${stderr}`);
		return false;
	}

	// Prepare an object to hold directory entries.
	// e.g. { 0: { entryType: 'd', entryName: 'folderName' }, 1: {...}, ... }
	const directoryEntries = {};

	// Split output by lines, filter out blank lines, and remove the first summary line (the "total ..." line)
	const lines = stdout.split("\n").filter(Boolean).slice(1);

	// Parse each line into an entry object
	lines.forEach((line, index) => {
		// Example line: 'drwxr-xr-x  2 user group 4096 Jan 14 12:34 MyFolder'
		// 				 -----------  - ---- ----- ---- --- -- ----- --------
		// 		Index	      0		  1   2     3    4   5  6	  7     8
		const parts = line.trim().split(/\s+/);

		// 'permissions' might look like 'drwxr-xr-x' or '-rw-r--r--'
		const permissions = parts[0] || "";

		// The first character indicates if it's a directory ('d') or file ('-')
		const [entryType] = permissions;

		// The file or folder name usually starts at index 8
		// after the permission, link count, owner, group, size, date, and time fields
		const entryName = parts.slice(8).join(" ");

		// Optionally log each entry. Here we convert index=1 to a "Return to parent directory" placeholder.
		const displayName = index === 1 ? "Return to parent directory" : entryName;
		if(index !== 0) console.log(`${index}) ${displayName}`);

		// Add the entry metadata to the map
		directoryEntries[index] = {
			entryType,
			entryName,
		};
	});
	return directoryEntries;``
}

/**
 * Changes the directory if the selected entry is a directory.
 * If the entry is a file, downloads it to the './download' folder
 * and returns the current directory (i.e., does not navigate elsewhere).
 *
 * @param {Object} selectedEntry - Object with { entryType, entryName }
 * @param {string} currentDirectory - The current directory path
 * @returns {Promise<string|boolean>} - The new directory path, or `false` on error
 */
async function changeDirectory(selectedEntry, currentDirectory) {
	if (!selectedEntry) return currentDirectory;
  
	const { entryType, entryName } = selectedEntry;
	
	// If it's a file, download it to the "download" folder
	if (entryType === "-") {
	  try {
		const remoteFilePath = path.join(currentDirectory, entryName);
		const downloadDir = "./download";
		
		if (!fs.existsSync(downloadDir)) {
		  fs.mkdirSync(downloadDir);
		}
		
		const localFilePath = path.join(downloadDir, entryName);
		
		// Download the file using the context's getFile function
		await this.getFile(localFilePath, remoteFilePath);
		
		// Remain in the same directory after downloading
		return currentDirectory;
	  } catch (error) {
		console.error("Error downloading file:", error);
		return false;
	  }
	}
  
	// If it's a directory, navigate into it and return the new path
	const { stdout, stderr } = await this.execCommand(`cd "${entryName}" && pwd`, {
	  cwd: currentDirectory,
	});
  
	if (stderr) {
	  console.error("Error changing directory:", stderr);
	  return false;
	}
  
	return stdout.trim();
  }

async function pwd() {
	const { stdout, stderr } = await this.execCommand("pwd");
	if (stderr) return false;
	return stdout;
}

export default {
	listDirectory,
	changeDirectory,
	pwd,
};
