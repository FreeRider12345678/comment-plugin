import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let comment = vscode.commands.registerCommand('comment-plugin.comment', () => {
		commentLine();
	});

	let uncomment = vscode.commands.registerCommand('comment-plugin.uncomment', () => {
		uncommentLine();
	});

	function commentLine() {
		vscode.commands.executeCommand('editor.action.addCommentLine');
		// vscode.window.showInformationMessage("It's commented!");
	}

	function uncommentLine() {
		vscode.commands.executeCommand('editor.action.removeCommentLine');
		// vscode.window.showInformationMessage("It's uncommented!");
	}

	context.subscriptions.push(comment);
	context.subscriptions.push(uncomment);
}

export function deactivate() {}
