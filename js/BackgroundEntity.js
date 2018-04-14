class BackgroundEntity extends Entity{
	constructor (image, x, y, w, h) {
		super(image, x, y, w, h)
	}

	move () {
		if (this.isOut())
			this.reset();
		super.move();
	}

	isOut () {
		return this.y >= height;
	}

	reset () {
		this.y = -this.h;
	}
}