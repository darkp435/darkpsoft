#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MEM_SIZE 30000

// Function to translate brainrot to brainfuck
void brainrotToBrainfuck(const char *brainrot_code, char *bf_code) {
    while (*brainrot_code) {
        if (strncmp(brainrot_code, "skibidi", 7) == 0) {
            strcat(bf_code, "+");
            brainrot_code += 7;
        } else if (strncmp(brainrot_code, "sigma", 5) == 0) {
            strcat(bf_code, "-");
            brainrot_code += 5;
        } else if (strncmp(brainrot_code, "rizz", 4) == 0) {
            strcat(bf_code, ">");
            brainrot_code += 4;
        } else if (strncmp(brainrot_code, "ohio", 4) == 0) {
            strcat(bf_code, "<");
            brainrot_code += 4;
        } else if (strncmp(brainrot_code, "gyatt", 5) == 0) {
            strcat(bf_code, "[");
            brainrot_code += 5;
        } else if (strncmp(brainrot_code, "fanum tax", 9) == 0) {
            strcat(bf_code, "]");
            brainrot_code += 9;
        } else if (strncmp(brainrot_code, "grimace shake", 13) == 0) {
            strcat(bf_code, ".");
            brainrot_code += 13;
        } else if (strncmp(brainrot_code, "let him cook", 12) == 0) {
            strcat(bf_code, ",");
            brainrot_code += 12;
        } else {
            brainrot_code++;  // Skip unrecognized characters
        }
    }
}

// Function to run Brainfuck code
void runBrainfuck(const char *bf_code) {
    unsigned char memory[MEM_SIZE] = {0};
    int pointer = 0;
    int pc = 0;  // Program counter
    char *code = (char *)bf_code;
    
    while (code[pc]) {
        switch (code[pc]) {
            case '>': pointer++; break;
            case '<': pointer--; break;
            case '+': memory[pointer]++; break;
            case '-': memory[pointer]--; break;
            case '.': 
                putchar(memory[pointer]);  // grimace shake -> output
                putchar('\n');  // Print a newline after the output
                break;
            case ',': {
                memory[pointer] = getchar();  // let him cook -> input
                break;
            }
            case '[':
                if (memory[pointer] == 0) {
                    int loop = 1;
                    while (loop > 0) {
                        pc++;
                        if (code[pc] == '[') loop++;
                        if (code[pc] == ']') loop--;
                    }
                }
                break;
            case ']':
                if (memory[pointer] != 0) {
                    int loop = 1;
                    while (loop > 0) {
                        pc--;
                        if (code[pc] == ']') loop++;
                        if (code[pc] == '[') loop--;
                    }
                }
                break;
        }
        pc++;
    }
}

int main() {
    const char *brainrot_code = "skibidi rizz sigma grimace shake let him cook grimace shake";
    char bf_code[1024] = "";  // Buffer to hold Brainfuck code

    // Step 1: Convert brainrot to Brainfuck code
    brainrotToBrainfuck(brainrot_code, bf_code);

    // Step 2: Run the converted Brainfuck code
    runBrainfuck(bf_code);

    return 0;
}
