#include <iostream>
#include <fstream>
#include <string>

int main() {
    int bottles;
    std::cout << "How many bottles of beer on the wall?" << std::endl;
    std::cin >> bottles;
    std::string song;
    std::cout << "Generating song..." << std::endl;
    while (bottles > 0) {
        song += std::to_string(bottles) + " bottles of beer on the wall, \n";
        song += std::to_string(bottles) + " bottles of beer!\n";
        --bottles;
        song += "Take one down, pass it around, \n";
        song += std::to_string(bottles) + " bottles of beer on the wall.\n\n";
    }
    song += "No more bottles of beer on the wall, no more bottles of beer.\n";
    song += "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
    std::cout << "Successfully generated song" << std::endl;
    std::ofstream outFile("song.txt");
    if (outFile.is_open()) {
        outFile << song;
        outFile.close();
        std::cout << "Song written to song.txt" << std::endl;
        return 0;
    } else {
        std::cerr << "Unable to open file" << std::abort;
        return 1;
    }
}
