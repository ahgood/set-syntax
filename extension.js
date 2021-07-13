const vscode = require('vscode');

async function setSyntax(languageId) {
	const activeEditor = vscode.window.activeTextEditor;

	if (activeEditor) {
		await vscode.languages.setTextDocumentLanguage(activeEditor.document, languageId);
	}
}

function activate(context) {
	const supportedLanguages = ['abap', 'bat', 'bibtex', 'clojure', 'coffeescript', 'c', 'cpp', 'csharp', 'css', 'diff', 'dockerfile', 'fsharp', 'git-commit', 'git-rebase', 'go', 'groovy', 'handlebars', 'haml', 'html', 'ini', 'java', 'javascript', 'javascriptreact', 'jsx', 'json', 'jsonc', 'latex', 'less', 'lua', 'makefile', 'markdown', 'objective-c', 'objective-cpp', 'perl', 'perl6', 'php', 'plaintext', 'powershell', 'jade', 'pug', 'python', 'r', 'razor', 'ruby', 'rust', 'scss', 'sass', 'shaderlab', 'shellscript', 'slim', 'sql', 'stylus', 'swift', 'typescript', 'typescriptreact', 'tex', 'vb', 'vue', 'vue-html', 'xml', 'xsl', 'yaml'];
	const commands = {};

	supportedLanguages.forEach(command => {
		commands[command] = vscode.commands.registerCommand(
			`set-syntax.${command}`, () => setSyntax('javascript')
		)
	});

	context.subscriptions.push(Object.values(commands));
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
