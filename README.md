# 24-games

This project implements a **24 game** solver using Python

## About the 24 Game

The 24 game is a classic mathematical puzzle in which players are given four numbers. The goal is to combine these four numbers using basic arithmetic operations (addition, subtraction, multiplication, and division) to get the result of 24. Each number must be used exactly once, and the operations can be applied in any order.

For example, given the numbers 8, 3, 8, 3, one possible solution could be:

$`(8 / (3 - (8 / 3))) = 24`$

This project allows users to input four numbers, and the program will automatically calculate and display a valid expression if one exists that results in 24.

## How it works

The front-end consists of an HTML form where users enter four numbers.

When the user clicks "Solve," the front-end sends a request to the Flask back-end, which processes the numbers using a depth-first search algorithm to explore all possible combinations.

The solution (if found) is then displayed on the webpage.

## How to Run Locally

1. Clone the repository:

```bash

git clone https://github.com/VincentdeCristo/24-games.git
cd 24-games

```

2. Set up a virtual environment and install dependencies:

```bash

python3 -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
pip install -r requirements.txt

```

3. Run the Flask server:

```bash

python backend/app.py

```

4. Open your browser and go to:

```arduino
http://127.0.0.1:5000/
```
