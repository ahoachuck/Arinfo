class Figure {
    surface() {
        return 0;
    }

    perimeter() {
        return 0;
    }
}

class Cercle extends Figure {
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }

    surface() {
        return Math.PI * Math.pow(this.rayon, 2);
    }

    perimeter() {
        return 2 * Math.PI * this.rayon;
    }
}

class Rectangle extends Figure {
    width;
    height;

    constructor(pWidth = 0, pHeight = 0) {
        super();
        this.width = pWidth;
        this.height = pHeight;
    }

    surface() {
        return this.width * this.height;
    }

    perimeter() {
        return (this.width * 2) + (this.height * 2);
    }
}