from itertools import permutations

words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

combinations = []

for perm in permutations(words, 2):
    combined = "".join(perm)
    if all(combined.count(letter) == min(word.count(letter) for word in perm) for letter in combined):
        combinations.append(combined)

for combination in combinations:
    print(combination)
