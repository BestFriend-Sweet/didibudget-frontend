const rawData = [{"balance": 0,"date": "2014-11-01"}, {"balance": 678.74,"date": "2014-12-01"},{"balance": 800.75,"date": "2015-01-01"},{"balance": 1189.88,"date": "2015-01-01"},{"balance": 8110.37,"date": "2015-03-01"}]

const allDataParsed = [{ date: '2014-11-01', balance: 0 }, { date: '2014-12-01', balance: 678.74 }, { date: '2015-01-01', balance: 995.32 }, { date: '2015-02-01' }, { date: '2015-03-01', balance: 8110.37 }]

const allDataParsedFewMonths = [{ date: '2014-11-01', balance: 0 }, { date: '2014-12-01', balance: 678.74 }, { date: '2015-01-01', balance: 995.32 }, { date: '2015-02-01' }, { date: '2015-03-01', balance: 8110.37 }]

const allDataParsedEnoughtMonths = [
	{ date: '2014-11-01', balance: 0 },
	{ date: '2014-12-01', balance: 678.74 },
	{ date: '2015-01-01', balance: 995.32 },
	{ date: '2015-02-01' },
	{ date: '2015-03-01', balance: 8110.37 },
	{ date: '2015-04-01', balance: 9210.44 },
	{ date: '2015-05-01', balance: 1210.01 },
	{ date: '2015-06-01', balance: 587.99 },
	{ date: '2015-07-01', balance: 0 },
	{ date: '2015-08-01', balance: 853.23 },
	{ date: '2015-08-01', balance: 1266.72 },
	{ date: '2015-08-01', balance: 2476.87 }
]

const allDataParsedLotOfMonths = [
	{ date: '2014-09-01', balance: 238.92 },
	{ date: '2014-10-01', balance: 26.43 },
	{ date: '2014-11-01', balance: 0 },
	{ date: '2014-12-01', balance: 678.74 },
	{ date: '2015-01-01', balance: 995.32 },
	{ date: '2015-02-01' },
	{ date: '2015-03-01', balance: 8110.37 },
	{ date: '2015-04-01', balance: 9210.44 },
	{ date: '2015-05-01', balance: 1210.01 },
	{ date: '2015-06-01', balance: 587.99 },
	{ date: '2015-07-01', balance: 0 },
	{ date: '2015-08-01', balance: 853.23 },
	{ date: '2015-08-01', balance: 1266.72 },
	{ date: '2015-08-01', balance: 2476.87 }
]

const lastYearDataParsed = [
	{ date: '2014-11-01', balance: 0 },
	{ date: '2014-12-01', balance: 678.74 },
	{ date: '2015-01-01', balance: 995.32 },
	{ date: '2015-02-01' },
	{ date: '2015-03-01', balance: 8110.37 },
	{ date: '2015-04-01', balance: 9210.44 },
	{ date: '2015-05-01', balance: 1210.01 },
	{ date: '2015-06-01', balance: 587.99 },
	{ date: '2015-07-01', balance: 0 },
	{ date: '2015-08-01', balance: 853.23 },
	{ date: '2015-08-01', balance: 1266.72 },
	{ date: '2015-08-01', balance: 2476.87 }
]

module.exports = {
	rawData,
	allDataParsed,
	allDataParsedFewMonths,
	allDataParsedEnoughtMonths,
	allDataParsedLotOfMonths,
	lastYearDataParsed
}