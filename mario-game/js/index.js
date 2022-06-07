const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 5.5;

// Kreiranje klase Player koji sadrzi metodu draw 
class Player {
    // Konstruktor klase Player 
    constructor() {
        // Postavljanje pozicije playera na x i y koordinatu
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30;
        this.height = 30;
    }
    // Metoda draw klase Player 
    
    draw() {
        // Boja plejera menjanje boje u crveno 
        c.fillStyle = 'red'; 
        // Crtanje playera na canvasu
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    // Metoda za pomeranje playera
    update() {
        // Pomeranje playera na x i y koordinatu
        this.draw();
        this.position.y += this.velocity.y;
        
        if(this.position.y + this.height + this.velocity.y <= canvas.height)
        this.position.y += gravity;
        else this.velocity.y = 0;

        
    }
}

const player = new Player();

player.update();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, canvas.width, canvas.height);
    player.update();
}

animate();
