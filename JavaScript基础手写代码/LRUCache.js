class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; // 缓存的最大容量
    this.cache = new Map(); // 使用 Map 存储缓存数据
  }

  // 获取缓存数据
  get(key) {
    if (!this.cache.has(key)) {
      return -1; // 如果缓存中没有该数据，则返回 -1
    }
    // 如果数据存在，先删除再重新插入（表示该数据被访问过，更新为最近使用）
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  // 设置缓存数据
  put(key, value) {
    // 如果缓存已满，删除最旧的数据
    if (this.cache.size >= this.capacity) {
      // Map 的 keys() 返回插入顺序，删除第一个元素
      this.cache.delete(this.cache.keys().next().value);
    }
    // 如果已经存在这个 key，删除旧值并插入新值
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // 插入新数据到缓存
    this.cache.set(key, value);
  }
}

// 测试代码
const lru = new LRUCache(2);
lru.put(1, 1); // 缓存 {1=1}
lru.put(2, 2); // 缓存 {1=1, 2=2}
console.log(lru.get(1)); // 返回 1，缓存 {2=2, 1=1}
lru.put(3, 3); // 缓存已满，删除最久未使用的 2，缓存 {1=1, 3=3}
console.log(lru.get(1)); // 返回 -1 (未找到)
lru.put(4, 4); // 缓存 {3=3, 4=4}
console.log(lru.get(2)); // 返回 -1 (未找到)
console.log(lru.get(3)); // 返回 3
console.log(lru.get(4)); // 返回 4
