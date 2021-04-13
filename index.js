
class Circle {
	constructor(r) {
		this.r = r;
	}
	getArea() {
		return (Math.PI * this.r**2);
	}
	
	getPerimeter() {
		return (2 * Math.PI * this.r);
	}
}


// unquote and use run to test these cases:

let q = new Circle(11);
console.log(q.getArea());

