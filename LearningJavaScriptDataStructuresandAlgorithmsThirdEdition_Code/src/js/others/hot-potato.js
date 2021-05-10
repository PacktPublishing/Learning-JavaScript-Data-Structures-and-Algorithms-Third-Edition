import Queue from '../data-structures/queue';

export function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  };
}
