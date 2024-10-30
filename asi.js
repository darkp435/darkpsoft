        function addSemicolons() {
    // Get the code from the textarea
    let code = document.getElementById("codeInput").value;

    // Split code into lines
    let lines = code.split('\n');

    // Process each line, adding semicolons if missing
    let processedCode = lines.map(line => {
        line = line.trim();  // Trim whitespace from each line

        // Check if the line does not end with a semicolon, and does not end with '{', '}', or '>'.
        // To add more exceptions, simply add them to the following conditional check:
        // Example: To exclude lines ending with ']' and '>', modify the condition:
        // !line.endsWith(';') && !line.endsWith('{') && !line.endsWith('}') && !line.endsWith(']') && !line.endsWith('>')
        if (line.length > 0 && !line.endsWith(';') && !line.endsWith('{') && !line.endsWith('}') && !line.endsWith('>')) {
            line += ';';  // Add semicolon if it doesn't end with one
        }
        return line;
    }).join('\n');

    // Display the processed code
    document.getElementById("output").textContent = processedCode;
}
