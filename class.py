class Idiot:
    def __init__(self, words):
        self.words = words

    def __str__(self):
        return f"I love {self.words}"

class BiggerIdiot(Idiot):
    def __init__(self, second_word):
        self.second_word = second_word
    
    def second_words():
        return f"I love {self.second_word}"

frank = BiggerIdiot("idiot")
print(frank)