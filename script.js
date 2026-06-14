// 1. Live Clock
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-IN');
    document.getElementById('clock').textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

// 2. Dark Mode Toggle
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = '☀️ Light Mode';
    } else {
        darkModeBtn.textContent = '🌙 Dark Mode';
    }
});

// 3. Change Name Color
const colorBtn = document.getElementById('colorBtn');
const nameSpan = document.getElementById('name');
const colors = ['#c71585', '#ff4500', '#1e90ff', '#32cd32', '#ff1493', '#8a2be2'];
let colorIndex = 0;

colorBtn.addEventListener('click', function() {
    colorIndex++;
    if (colorIndex >= colors.length) colorIndex = 0;
    nameSpan.style.color = colors[colorIndex];
});

// 4. Add New Skill
const addSkillBtn = document.getElementById('addSkillBtn');
const newSkillInput = document.getElementById('newSkill');
const skillsList = document.getElementById('skillsList');

addSkillBtn.addEventListener('click', function() {
    const skill = newSkillInput.value;
    if (skill.trim()!== '') {
        const li = document.createElement('li');
        li.textContent = skill + ' ✅';
        skillsList.appendChild(li);
        newSkillInput.value = '';
        
        // Update counter
        let count = document.getElementById('counter');
        count.textContent = parseInt(count.textContent) + 1;
    } else {
        alert('Please enter a skill first!');
    }
});

// 5. Greeting System
const greetBtn = document.getElementById('greetBtn');
const userNameInput = document.getElementById('userName');
const greetingPara = document.getElementById('greeting');

greetBtn.addEventListener('click', function() {
    const name = userNameInput.value;
    if (name.trim()!== '') {
        greetingPara.textContent = `Hi ${name}! Welcome to my portfolio 🚀`;
        userNameInput.value = '';
    } else {
        greetingPara.textContent = 'Please enter your name first!';
    }
});

// 6. Enter key support for inputs
newSkillInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addSkillBtn.click();
});

userNameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') greetBtn.click();
});