const { of, throwError, timer } = Rx;
const { map, take, delay, materialize, dematerialize, catchError, switchMapTo, startWith } = RxOperators;

/**
 * Демо с https://rxviz.com/
 */

// Возвращает загруженные данные через 800мс
const load = (id) => of(id).pipe(delay(800));

// Возвращает ошибку через 400мс
const loadWithError = (id) => timer(400).pipe(switchMapTo(throwError(`Error id: ${id}`)));


const loadRandom = (id) => Math.random() > 0.5 ? load(id) : loadWithError(id)

loadRandom(1).pipe(
  map((id) => `LOADED id:${id}`),
  catchError(() => of('ERROR')),
  //startWith('PENDING'),
)
