/*
Source code for the beer.exe file. Copy and paste this, and compile with a C++ compiler to get the executable you want.
This is for if you aren't using windows and need to compile it, or if you just want to review the source code for any reasons.
*/

#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
    int bottles;
    cout << "How many bottles of beer on the wall?" << endl;
    cin >> bottles;
    string song;
    cout << "Generating song..." << endl;
    while (bottles > 0) {
        song += to_string(bottles) + " bottles of beer on the wall, \n";
        song += to_string(bottles) + " bottles of beer!\n";
        --bottles;
        song += "Take one down, pass it around, \n";
        song += to_string(bottles) + " bottles of beer on the wall.\n\n";
    }
    song += "No more bottles of beer on the wall, no more bottles of beer.\n";
    song += "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
    cout << "Successfully generated song" << endl;
    ofstream outFile("song.txt");
    if (outFile.is_open()) {
        outFile << song;
        outFile.close();
        cout << "Song written to song.txt" << endl;
        return 0;
    } else {
        cerr << "Unable to open file" << abort;
        return 1;
    }
}
