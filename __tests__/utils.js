export function createDiv() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
}

// 为DOM节点设置属性
export function applyAttributes(element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    // 这里需要把类似 strokeWidth 的属性转换成 stroke-width 的形式
    // 思路就是将大写字母替成 - + 对应的小写字母的形式
    // 下面涉及到正则匹配，不太了解的同学可以去下面的链接学习：
    // https://juejin.cn/post/6844903487155732494
    const kebabCaseKey = key.replace(/[A-Z]/g, (d) => `-${d.toLocaleLowerCase()}`);
    element.setAttribute(kebabCaseKey, value);
  }
}

// 将 child 节点挂载到 parent 节点上面
export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}

export function getAttributes(node, keys) {
  const res = {};
  for (const key of keys) {
    res[key] = node.getAttribute(key);
  }
  return res;
}
