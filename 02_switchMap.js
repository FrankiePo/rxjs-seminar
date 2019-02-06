const { of } = Rx;
const { take, delay, map, switchAll, switchMap } = RxOperators;

// Возвращает данные клиента через 800мс
const loadClient = (clientId) => of({
  id: clientId,
  tasks: ['id1', 'id2', 'id3'],
}).pipe(delay(800));


// Возвращает задачи клиента через 400 секунд
// [1,2,3] =*> ['Task 1', 'Task 2', 'Task 3']
const loadTaskByIds = (ids) => of(ids.map((id) => `Task ${id}`)).pipe(delay(400));

loadClient(10).pipe(
//	map((client) => loadTaskByIds(client.tasks)),
//	switchAll(),
	switchMap((client) => loadTaskByIds(client.tasks)),
);

