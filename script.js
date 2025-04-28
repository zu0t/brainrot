const words = ["mango", "chopped chin", "fanum tax", "what the sigma", "John Pork", "knee surgery", "chill guy", "let him cook", "aura", "calc (short for calculator)", "nonchalant", "huzz", "icl", "tripitropi", "tralalerotralala", "chicken jockey", "RELEASE!", "I am Steve", "flint and steel", "kevin", "yogurt", "owen"];
        
        function generateWord() {
            if (words.length === 0) {
                document.getElementById('wordBox').innerText = "No more brainrot (refresh to play again)\nI'VE PLAYED THESE GAMES BEFORE!!";
                document.getElementById('generateButton').disabled = true;
                return;
            }
            const randomIndex = Math.floor(Math.random() * words.length);
            document.getElementById('wordBox').innerText = words[randomIndex];
            words.splice(randomIndex, 1);
        }

        let countdownInterval;
        let countdownSeconds = 120;

        function updateCountdownDisplay() {
            const minutes = String(Math.floor(countdownSeconds / 60)).padStart(2, '0');
            const seconds = String(countdownSeconds % 60).padStart(2, '0');
            document.getElementById('countdown').innerText = `${minutes}:${seconds}`;
        }

        function startCountdown() {
            if (!countdownInterval) {
                countdownInterval = setInterval(() => {
                    if (countdownSeconds > 0) {
                        countdownSeconds--;
                        updateCountdownDisplay();
                    } else {
                        clearInterval(countdownInterval);
                        countdownInterval = null;
                    }
                }, 1000);
            }
        }

        function pauseCountdown() {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }

        function resetCountdown() {
            clearInterval(countdownInterval);
            countdownInterval = null;
            countdownSeconds = 120;
            updateCountdownDisplay();
        }

        function adjustCountdown(seconds) {
            countdownSeconds = Math.max(0, countdownSeconds + seconds);
            updateCountdownDisplay();
        }
        function startCountdown() {
            if (!countdownInterval) {
                countdownInterval = setInterval(() => {
                    if (countdownSeconds > 0) {
                        countdownSeconds--;
                        updateCountdownDisplay();
                    } else {
                        clearInterval(countdownInterval);
                        countdownInterval = null;
                        playSound();
                    }
                }, 1000);
            }
        }
        
        function playSound() {
            const audio = new Audio('./lowtaperfade.mp3');
            audio.play();
        }
        
