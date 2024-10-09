from flask import Flask, request, jsonify, render_template
from itertools import permutations
from fractions import Fraction
from flask_cors import CORS

app = Flask(__name__, static_folder="../frontend/static", static_url_path="/static", template_folder="../frontend")
CORS(app)

def solve_24(numbers):
    def generate_expressions(nums):
        if len(nums) == 1:
            yield nums[0]
            return
        
        for i in range(len(nums)):
            for left in generate_expressions(nums[:i] + nums[i+1:]):
                yield f'({nums[i]} + {left})'
                yield f'({nums[i]} - {left})'
                yield f'({left} - {nums[i]})'
                yield f'({nums[i]} * {left})'
                if left != '0':
                    yield f'({nums[i]} / {left})'
                if nums[i] != '0':
                    yield f'({left} / {nums[i]})'

    def evaluate(expr):
        try:
            return eval(expr, {"Fraction": Fraction})
        except ZeroDivisionError:
            return None

    target = 24
    epsilon = 1e-10

    for nums in permutations(map(str, numbers)):
        for expr in generate_expressions(nums):
            result = evaluate(expr)
            if result is not None and abs(result - target) < epsilon:
                return expr

    return None

@app.route('/solve', methods=['POST'])
def solve():
    data = request.json
    numbers = data.get('numbers', [])
    
    if len(numbers) != 4 or not all(isinstance(num, int) for num in numbers):
        return jsonify({'error': 'Invalid input'}), 400
    
    solution = solve_24(numbers)
    
    if solution:
        return jsonify({'solution': f'{solution} = 24'})
    else:
        return jsonify({'solution': None})

# Display the front-end HTML page
@app.route('/')
def index():
    return render_template('index.html')  # Use the file name directly, no path is required

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
