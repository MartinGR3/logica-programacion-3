   
        function calcularfactorial(n) {
            if (n === 0 || n === 1) return 1;
            let res = 1;
            for (let i = 2; i <= n; i++) {
                res *= i;
            }
            return res;
        }

        function entrada() {
            const input = document.getElementById('numberInput');
            const error = document.getElementById('errorMessage');
            const container = document.getElementById('resultContainer');
            const display = document.getElementById('resultText');
            
            const rawValue = input.value.trim();
            const num = Number(rawValue);


            const isInvalid = rawValue === "" || 
                             isNaN(num) || 
                             !Number.isInteger(num) || 
                             num < 0;

            if (isInvalid) {
                input.classList.add('is-invalid');
                error.style.display = 'block';
                container.style.display = 'none';
                return;
            }

            input.classList.remove('is-invalid');
            error.style.display = 'none';

            const result = calcularfactorial(num);
            
            display.textContent = `${num}! = ${result.toLocaleString()}`;
            container.style.display = 'block';

            console.log(`Factorial de ${num}: ${result}`);
        }

        document.getElementById('numberInput').addEventListener('keyup', (e) => {
            if (e.key === 'Enter') entrada();
        });