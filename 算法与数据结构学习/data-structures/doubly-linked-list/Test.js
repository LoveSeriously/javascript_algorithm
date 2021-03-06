import DoublyLinkedList from './DoublyLinkedList'

// 测试
const nodeArr = [2,1,6,4,5,7,8,5,2];
const list = new DoublyLinkedList();
list.fromArray(nodeArr);
console.log('原数组:', list.toString());
// 前插一个节点
list.prepend(2);
console.log('前插一个节点2：', list.toString());
// 尾部插入节点
list.append(5)
console.log('后插一个节点5：', list.toString());
list.deleteHead();
console.log('删除头部节点：', list.toString());
list.deleteTail();
console.log('删除尾部节点', list.toString());
list.delete(2);
console.log('删除值为2的节点', list.toString());

