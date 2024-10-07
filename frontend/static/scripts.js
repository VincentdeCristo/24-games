function solve() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;
    const num4 = document.getElementById('num4').value;

    const numbers = [parseInt(num1), parseInt(num2), parseInt(num3), parseInt(num4)];

    // 移除之前可能添加的错误样式
    document.querySelectorAll('input').forEach(input => input.classList.remove('error-input'));

    // 检查是否所有输入都是有效的数字
    if (numbers.some(num => isNaN(num) || num === "" || num < 0 || num > 99)) {
        document.getElementById('result').textContent = 'Please enter 4 valid numbers between 0 and 99.';
        
        // 给输入错误的字段添加抖动效果
        document.querySelectorAll('input').forEach(input => {
            if (isNaN(input.value) || input.value === "" || input.value < 0 || input.value > 99) {
                input.classList.add('error-input');  // 触发 CSS 抖动动画
            }
        });

        return;
    }

    // 向后端发送请求并处理结果
    fetch('/solve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ numbers: numbers })
    })
    .then(response => response.json())
    .then(data => {
        if (data.solution) {
            document.getElementById('result').textContent = `Solution: ${data.solution}`;
        } else {
            document.getElementById('result').textContent = 'No solution found';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error solving the problem.';
    });
}
