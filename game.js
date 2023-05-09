import random
import time

# Define the accounting terms and definitions
terms = ['Asset', 'Liabilities', 'Equity', 'Revenue', 'Expenses', 'Depreciation', 'Balance sheet', 'Income statement']
definitions = ['A resource owned or controlled by a company that has future economic benefits.',
               'Obligations that a company owes to others, such as creditors or lenders.',
               'The residual interest in the assets of a company after deducting liabilities.',
               'Income earned by a company from its business activities.',
               'Costs incurred by a company in generating revenue.',
               'The allocation of the cost of a long-term asset over its useful life.',
               'A financial statement that reports a company\'s assets, liabilities, and equity at a specific point in time.',
               'A financial statement that reports a company\'s revenue, expenses, and net income over a period of time.']

# Shuffle the terms and definitions
random.shuffle(terms)
random.shuffle(definitions)

# Create a dictionary of the shuffled terms and definitions
cards = dict(zip(terms, definitions))

# Set the game time limit
time_limit = 60  # in seconds

# Initialize the game variables
score = 0
matches = 0
start_time = time.time()

# Define the game loop
while True:
    # Check if the time limit has been reached
    elapsed_time = time.time() - start_time
    if elapsed_time >= time_limit:
        print('Time is up! Game over.')
        break

    # Print the current score and remaining time
    print(f'Score: {score}  Time remaining: {int(time_limit - elapsed_time)} seconds')

    # Print the current grid of cards
    for term in terms:
        if term in cards:
            print(f'{term}:    ???')
        else:
            print(f'{term}:    {cards[term]}')

    # Prompt the player to select two cards
    choice1 = input('Enter the first term you want to match: ')
    if choice1 not in terms:
        print('Invalid term.')
        continue
    choice2 = input('Enter the second term you want to match: ')
    if choice2 not in terms:
        print('Invalid term.')
        continue

    # Check if the selected cards match
    if cards[choice1] == cards[choice2]:
        print('Match!')
        score += 10
        matches += 1
        del cards[choice1]
        del cards[choice2]
    else:
        print('No match.')
        score -= 5

    # Check if all matches have been made
    if matches == len(definitions) // 2:
        print('Congratulations! You have matched all the terms and definitions.')
        break
