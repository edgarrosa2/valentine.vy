function createFlower(x, y) {
    const flowers = ['🌸', '🌺', '🌷', '🌼', '🏵️', '💮'];
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = x + 'px';
    flower.style.bottom = y + 'px';
    flower.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 4000);
}

function createPetal(color) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.backgroundColor = color;
    petal.style.left = Math.random() * 100 + '%';
    petal.style.top = '-20px';
    petal.style.animationDelay = Math.random() * 2 + 's';
    petal.style.animationDuration = (Math.random() * 2 + 2) + 's';
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 5000);
}

function startFlowerAnimation() {
    const colors = ['#ffb6c1', '#ffc9d9', '#ffe4e1', '#ffd4e5', '#ffccdb', '#f8b4d9'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createFlower(Math.random() * window.innerWidth, -50);
        }, i * 100);
    }

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createPetal(colors[Math.floor(Math.random() * colors.length)]);
        }, i * 80);
    }
}

function showFlowers() {
    startFlowerAnimation();
    
    setTimeout(() => {
        document.getElementById('screen1').style.display = 'none';
        document.getElementById('screen2').style.display = 'flex';
    }, 2000);
}

function handleNo() {
    const noButton = document.getElementById('noButton');
    
    if (!noButton.dataset.clickCount) {
        noButton.dataset.clickCount = 0;
    }
    
    noButton.dataset.clickCount = parseInt(noButton.dataset.clickCount) + 1;
    
    if (noButton.dataset.clickCount < 4) {
        noButton.style.position = 'relative';
        
        const randomX = (Math.random() - 0.5) * 150;
        const randomY = (Math.random() - 0.5) * 80;
        
        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
        noButton.style.transition = 'transform 0.3s ease';
    } else {
        document.getElementById('screen2').style.display = 'none';
        document.getElementById('screen3').style.display = 'flex';
    }
}

function handleYes() {
    startFlowerAnimation();
    
    setTimeout(() => {
        document.getElementById('screen2').style.display = 'none';
        document.getElementById('screen3').style.display = 'none';
        document.getElementById('screen4').style.display = 'flex';
    }, 2000);
}

function showFinal() {
    document.getElementById('screen4').innerHTML = `
        <div class="text-box">
            <div class="signature">Con mucho amor: Gari</div>
            <div class="signature" style="margin-top: 20px;">Para la luz de mi alma: Meli</div>
        </div>
    `;
    startFlowerAnimation();
}

// Animación de fondo continua
setInterval(() => {
    if (Math.random() > 0.7) {
        const colors = ['#ffb6c1', '#ffc9d9', '#ffe4e1', '#ffd4e5'];
        createPetal(colors[Math.floor(Math.random() * colors.length)]);
    }
}, 500);
