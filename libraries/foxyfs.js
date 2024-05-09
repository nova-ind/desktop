const opfsRoot = await navigator.storage.getDirectory();
window.foxyfs = {
	init: async function () {
		var directoryHandle = await opfsRoot.getDirectoryHandle('sys', { create: true });
		directoryHandle = await opfsRoot.getDirectoryHandle('user', { create: true });
	},
	ls: async function (dir) {
		return await opfsRoot.getDirectoryHandle(dir);
	}
}
foxyfs.init()