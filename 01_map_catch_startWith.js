/**
 * Демо с https://rxviz.com/
 */

// Возвращает загруженные данные через 800мс
const load = (id) => Rx.Observable
	.of(id)
	.delay(800)

// Возвращает ошибку через 400мс
const loadWithError = (id) => Rx.Observable
	.throw(`Error id: ${id}`)
	.materialize()
	.delay(400)
	.dematerialize()


const loadRandom = (id) => Math.random() > 0.5 ?
	load(id) : loadWithError(id)

loadRandom(1)
	.map((id) => `LOADED id:${id}`)
	.catch(() => Rx.Observable.of('ERROR'))
//	.startWith('PENDING')
