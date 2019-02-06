const { of, interval } = Rx;
const { take, delay, map, switchMap, flatMap, mergeMap, exhaustMap, concatMap } = RxOperators;

// Возвращает данные клиента через 800мс
const loadClient = (clientId) => of({
  id: clientId,
}).pipe(delay(800));

// возвращает поток цифр 0, 1, 2, X через 300мс
const threeId = () => interval(300).pipe(take(3));

threeId().pipe(
	map((id) => loadClient(id)),
//	flatMap((id) => loadClient(id)),
//	mergeMap((id) => loadClient(id)),
//	switchMap((id) => loadClient(id)),
//	exhaustMap((id) => loadClient(id)),
//	concatMap((id) => loadClient(id)),
);
