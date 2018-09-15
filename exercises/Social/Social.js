let bowler = {
	name: 'Bob',
	age: 23,
	average: 202,
	hometown: 'Pittsburgh',
	state: 'Pa',
	sponsors: ['Brunswick', 'Rotogrip'],
	team: 'Nail n More',
	recentGames: [
		{
			id: 1,
			location: 'Forward Lanes',
			strikeBall: main,
			score: 200,
			strikes: 6,
			spares: 5,
			opponent: {
				name: 'Dave',
				score: 180
			}
		},
		{
			id: 2,
			location: 'Forward Lanes',
			strikeBall: aux,
			score: 215,
			strikes: 7,
			spares: 6,
			opponent: {
				name: 'Dave',
				score: 180
			}
		},
		{
			id: 3,
			location: 'Forward Lanes',
			strikeBall: [aux, dry],
			score: 220,
			strikes: 8,
			spares: 2,
			opponent: {
				name: 'Dave',
				score: 180
			}
		}
	]
};
