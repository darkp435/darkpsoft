function addSemicolons() {
    let code = document.getElementById("codeInput").value;
    let lines = code.split('\n');
    let processedCode = lines.map(line => {
        if (line.length > 0 && !line.endsWith(';') && !line.endsWith('{') && !line.endsWith('}') && !line.endsWith('>')) {
            line += ';';
        }
        return line;
    }).join('\n');
    document.getElementById("output").innerHTML = processedCode;
}
