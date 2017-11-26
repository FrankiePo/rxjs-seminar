// Возвращает данные пациента через 800мс
const loadPatient = (patientId) => Rx.Observable
	.of(patientId)
	.delay(800)

// возвращает поток цифр 0, 1, 2, X через 300мс
const threeId = () => Rx.Observable
	.interval(300)
	.take(3)


threeId()
//	.map((id) => loadPatient(id))
//	.flatMap((id) => loadPatient(id))
//	.switchMap((id) => loadPatient(id))
//	.exhaustMap((id) => loadPatient(id))
//	.concatMap((id) => loadPatient(id))
