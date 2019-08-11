var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.members = []
};

LRUCache.prototype.get = function (key) {
    for (let i = 0; i < this.members.length; i++) {
        let member = this.members[i];
        if (member.key = key) {
            member.age = 0
            return member.value
        }
    }
    return -1;
};

LRUCache.prototype.put = function (key, value) {
    let flag = false;
    let oldestAge = -1;
    let oldestIndex = -1;
    for (let i = 0; i < this.members.length; i++) {
        let member = this.members[i];
        if (member.age > oldestAge) {
            oldestAge = i
            oldestAge = member.age
        }
        if (member.key == key) {
            flag = true
            this.members[i] = {
                key,
                value,
                age: 0
            };

        } else {
            member.age++;
        }
    }
    if (!flag) {
        if (this.members.length >= this.capacity) {
            this.members.splice(oldestIndex, 1)
        } else {
            this.members.push({
                key,
                value,
                age: 0
            })
        }
    }
};