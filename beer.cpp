#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
    int bottles;
    string output;
    string *song = new string;
    cout << "How many bottles of beer on the wall?" << endl;
    cin >> bottles;
    cout << "What file to output the song to?" << endl;
    cin >> output;
    cout << "Generating song..." << endl;

    int startBottles = bottles; // Store the original number of bottles

    while (bottles > 0) {
        *song += to_string(bottles) + " bottles of beer on the wall, \n";
        *song += to_string(bottles) + " bottles of beer!\n";
        --bottles;
        *song += "Take one down, pass it around, \n";
        *song += to_string(bottles) + " bottles of beer on the wall.\n\n";
    }

    *song += "No more bottles of beer on the wall, no more bottles of beer.\n";
    *song += "Go to the store and buy some more, " + to_string(startBottles) + " bottles of beer on the wall.\n";
    cout << "Successfully generated song" << endl;

    ofstream outFile(output);
    if (outFile.is_open()) {
        outFile << *song;
        outFile.close();
        cout << "Song written to " << output << endl;
        return 0;
    } else {
        cerr << "Unable to open file" << endl;
        return 1;
    }
}
