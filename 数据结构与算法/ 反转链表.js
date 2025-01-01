class LinkNode {
  constructor(value) {
    this.value = value || null;
    this.next = null;
  }
}

const link1 = new LinkNode(1);
const link2 = new LinkNode(2);
const link3 = new LinkNode(3);
const link4 = new LinkNode(4);
const link5 = new LinkNode(5);
const link6 = new LinkNode(6);

link1.next = link2;
link2.next = link3;
link3.next = link4;
link4.next = link5;
link5.next = link6;

console.log(JSON.stringify(link1, null, 2));

function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
const data = reverseList(link1);
console.log(JSON.stringify(data, null, 2));
