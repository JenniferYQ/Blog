# API 文档

本文档提供了各个库的API参考。

## 共享库 API

### formatDate

格式化日期为指定格式的字符串。

```js
import { formatDate } from 'shared';

// 使用示例
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD');
console.log(formattedDate); // 例如: 2023-05-15
```

### debounce

创建一个防抖函数，延迟调用提供的函数。

```js
import { debounce } from 'shared';

// 使用示例
const debouncedSearch = debounce((query) => {
  // 搜索逻辑
  console.log('Searching for:', query);
}, 300);

// 调用
debouncedSearch('test'); // 只有在300ms内没有再次调用时才会执行
```