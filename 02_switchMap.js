// Возвращает данные пациента через 800мс
const loadPatient = (patientId) => Rx.Observable
	.of({
		id: patientId,
		tasks: ['id1', 'id2', 'id3'],
	})
	.delay(800)


// Возвращает задачи пациента через 400 секунд
// [1,2,3] =*> ['Task 1', 'Task 2', 'Task 3']
const loadTaskByIds = (ids) => Rx.Observable
	.of(ids.map((id) => `Task ${id}`))
	.delay(400)


loadPatient(10)
//	.map((patient) => loadTaskByIds(patient.tasks))
//	.switch()
//	.switchMap((patient) => loadTaskByIds(patient.tasks))
