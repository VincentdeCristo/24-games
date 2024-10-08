# 24-games

This project implements a **24 game** solver using Python

## About the 24 Game

The 24 game is a classic mathematical puzzle in which players are given four numbers. The goal is to combine these four numbers using basic arithmetic operations (addition, subtraction, multiplication, and division) to get the result of 24. Each number must be used exactly once, and the operations can be applied in any order.

For example, given the numbers `8, 3, 8, 3`, one possible solution could be:

$`(8 / (3 - (8 / 3))) = 24`$

This project allows users to input four numbers, and the program will automatically calculate and display a valid expression if one exists that results in 24.

## Features

- **User Interface**: A simple web-based interface where users can input numbers.

- **Solver**: Backend logic implemented in Python that checks all possible permutations and combinations of operations to find a solution.

- **Responsive Design**: The user interface is responsive and adapts well to different screen sizes.

- **Animations**: Basic animations to enhance the user experience.

## How it works

- The front-end consists of an HTML form where users enter four numbers.

- When the user clicks "Solve," the front-end sends a request to the Flask back-end, which processes the numbers using a depth-first search algorithm to explore all possible combinations.

- The solution (if found) is then displayed on the webpage.

## Technology Stack

- **Back-end**: Python with Flask framework

- **Front-end**: HTML, CSS, JavaScript (with animations and responsiveness)

- **Deployment**: Can be hosted on any platform that supports Flask (e.g., local server, cloud services)

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

## Setting up Auto-Start on Boot

### On Linux (Using systemd):

1. Create a systemd service file:

```bash
sudo nano /etc/systemd/system/flaskapp.service
```

2. Define the service:

```ini
[Unit]
Description=xxxxxx
After=network.target

[Service]
User=your_username
WorkingDirectory=/path/to/your/project_root
ExecStart=/path/to/your/project_root/venv/bin/python backend/app.py
Restart=always

[Install]
WantedBy=multi-user.target
```

- **Description**: A short description of your service.
- **User**: The user account that runs the script (replace `your_username`).
- **WorkingDirectory**: The path to your project directory.
- **ExecStart**: The command to start your Flask app using the virtual environment's Python.
- **Restart**: Automatically restarts the service if it crashes.

3. Enable and Start the Service:

   - Reload `systemd` to recognize the new service:

   ```bash
   sudo systemctl daemon-reload
   ```

   - Enable the service to start on boot:

   ```bash
   sudo systemctl enable flaskapp
   ```

   - Start the service:

   ```bash
   sudo systemctl start flaskapp
   ```

### On Windows (Using Task Scheduler):

1. Open Task Scheduler:

   - Go to "Start" > search for "Task Scheduler".

2. Create a New Task:

   - In the right-hand panel, click on "Create Task".

3. General Tab:

   - Name the task (e.g., "FlaskApp Auto-Start").
   - Select "Run whether the user is logged on or not".
   - Check "Run with highest privileges".

4. Triggers Tab:

   - Click "New" and set the trigger to "At startup".

5. Actions Tab:

   - Click "New", then in "Program/script", enter the path to the python.exe in your virtual environment.
   - In the "Arguments" field, enter the path to your `app.py`:

   ```bash
   /path/to/your/project_root/backend/app.py
   ```

6. Finish:
   - Click "OK" and enter your password when prompted.
