const facts = ["A cloud weighs around a million tons.", 
    "Giraffes are 30 times more likely to get hit by lightning than people.", 
    "Animals can experience time differently from humans.", "The fear of long words is called Hippopotomonstrosesquippedaliophobia.",
    "Mount Everest isn't the tallest mountain on Earth.", "Comets smell like rotten eggs.", "You can actually die laughing.",
    "Bananas are slightly radioactive.", "Hippos can’t swim.", "The Moon looks upside down in the Southern Hemisphere.", "There are more bacterial cells in your body than human cells.",
    "A lightning bolt is five times hotter than the surface of the Sun.", "Flamingoes aren’t born pink.",
    "It rains methane on Saturn’s largest moon.", "Earth is 4.54 billion years old."]

    function showFact() {
        const randomIndex = Math.floor(Math.random() * facts.length);
        document.getElementById("fact").innerText = facts[randomIndex];
    }
    
        function addFact() {
            const newFact = document.getElementById("newFact").value.trim();
            if (newFact) {
                facts.push(newFact);  // Add to the facts array
                document.getElementById("newFact").value = ""; // Clear input field
                alert("Fact added successfully! ✅");
            } else {
                alert("Please enter a fact first! ❌");
            }
        }
    
        function showfunfactlist() {
             (alert(facts))
        }
