const words = ["skibidi","Those who know","sigma","rizz","gyatt","winter arc","massive","low taper fade","mango","vexbolts","property in egypt","eye of rah","chopped chin","drippy cheese","quandale dingle","ninja","locked in","still water","lunchly","hawk tuah","talk tuah","aldi","𝓯𝓻𝓮𝓪𝓴𝔂","fanum tax","what the sigma","gedagedigedagedago","this is for my safety","looksmaxxing","ohio","diddy party","mewing","I'VE PLAYED THESE GAMES BEFORE!","John Pork","knee surgery","edging","brainrot","grimace shake","yapping","glazing","unc status","tiktok rizz party","among us","gooning","imagine","green FN","let him cook","aura","calc (short for calculator)"];
        
        function generateWord() {
            if (words.length === 0) {
                document.getElementById('wordBox').innerText = "No more words here, refresh to play again\nI'VE PLAYED THESE GAMES BEFORE!";
                document.getElementById('generateButton').disabled = true;
                return;
            }
            const randomIndex = Math.floor(Math.random() * words.length);
            document.getElementById('wordBox').innerText = words[randomIndex];
            words.splice(randomIndex, 1);
        }