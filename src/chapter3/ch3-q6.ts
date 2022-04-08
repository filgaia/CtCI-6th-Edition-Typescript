import { Animal } from './ch3-models';

/**
 * Uses two different queues one for dogs and one for cats. Each entry is
 * assigned a unique identifier which allows dequeueAny to determine which of
 * the two queues to dequeue an item from.
 *
 * N = number of animals
 * Time: enqueue O(1), dequeue O(1), dequeueAny O(1)
 * Additional space: enqueue O(N), dequeue O(1), dequeueAny O(1)
 * Additional space required to hold unique id per animal.
 */
export class AnimalShelter {
  private _dogs: Animal[];

  private _cats: Animal[];

  private _id: number;

  constructor() {
    this._dogs = [];
    this._cats = [];
    this._id = 0;
  }

  enqueueCat(name: string): void {
    this._cats.push({
      name,
      id: ++this._id,
    });
  }

  enqueueDog(name: string): void {
    this._dogs.push({
      name,
      id: ++this._id,
    });
  }

  dequeueAny(): string | undefined {
    const dogId = this._dogs.length > 0 ? this._dogs[0].id : Number.POSITIVE_INFINITY;
    const catId = this._cats.length > 0 ? this._cats[0].id : Number.POSITIVE_INFINITY;

    if (dogId !== Number.POSITIVE_INFINITY || catId !== Number.POSITIVE_INFINITY) {
      if (dogId < catId) {
        return this._dogs.shift()?.name;
      }

      return this._cats.shift()?.name;
    }
  }

  dequeueCat(): string | undefined {
    return this._cats.shift()?.name;
  }

  dequeueDog(): string | undefined {
    return this._dogs.shift()?.name;
  }
}
