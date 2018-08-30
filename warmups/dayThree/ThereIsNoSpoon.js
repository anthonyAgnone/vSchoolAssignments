const coffee = {
	name: 'Latte',
	price: 3,
	taste: 'Ok',
	cupColor: 'Green'
};

const wall = {
	direction: {
		left: {
			color: 'Exposed Brick',
			windows: 2,
			paitings: 2,
			hasPowerOutlets: true,
			window: {
				panes: 4,
				isOpen: false,
				canJump: false,
				shouldJump: false,
				open: function(openness, thingsToLiveFor) {
					if (openness == 100) {
						this.isOpen = true;
						this.canJump = true;
						if (thingsToLiveFor == null) {
							this.shouldJump = true;
						}
					}
				}
			}
		},
		right: {
			color: 'White',
			windows: 0,
			paintings: 0,
			hasPowerOutlets: true
		},
		front: {
			color: 'White',
			windows: 0,
			paintings: 0,
			hasPowerOutlets: true
		},
		back: {
			color: 'White',
			windows: 3,
			paitnings: 0,
			hasPowerOutlets: true
		},
		bangHead: function(direction) {
			if (direction === 'left') {
				console.log('You paint the brick with your insides');
			} else {
				console.log(
					'You take your forehead and plant it deep within the ' +
						this.direction.color +
						' wall'
				);
			}
		}
	}
};
