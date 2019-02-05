const { of, throwError } = Rx;
const { map, take, delay, materialize, dematerialize, catchError } = RxOperators;

/**
 * Демо с https://rxviz.com/
 */

// Возвращает загруженные данные через 800мс
const load = (id) => of(id).pipe(delay(800));

// Возвращает ошибку через 400мс
const loadWithError = (id) => throwError(`Error id: ${id}`).pipe(delay(400));


const loadRandom = (id) => Math.random() > 0.5 ? load(id) : loadWithError(id)

loadRandom(1).pipe(
  map((id) => `LOADED id:${id}`),
  catchError(() => of('ERROR')),
  //startWith('PENDING'),
)
