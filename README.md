# 荣格词汇联想测试 - 词汇验证工具

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yourusername/jung-word-association/blob/main/LICENSE)
[![version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/yourusername/jung-word-association)

这是一个用于荣格词汇联想测试的词汇验证和统计工具集。主要功能包括验证不同版本应用中使用的词汇数据一致性，以及生成词汇统计报告。

## 项目简介

荣格词汇联想测试（Jung Word Association Test）是由瑞士心理学家卡尔·荣格（Carl Jung）开发的一种心理测试方法，通过分析被测试者对一系列标准词汇的联想反应，来探索其无意识心理内容和情感模式。

本项目提供了：
1. 标准的100个荣格测试词汇列表
2. 词汇验证工具，确保不同版本应用使用相同的词汇
3. 词汇统计分析功能

## 文件结构

```
├── jung-words.js       # 荣格标准词汇列表及其分类信息
├── validate-words.js   # 词汇一致性验证脚本
├── index.html          # 主应用页面
├── index-new.html      # 新应用页面（用于比较）
├── index-old.html      # 旧应用页面（用于比较）
├── test.py             # 测试脚本
├── LICENSE             # 许可证文件
├── CHANGELOG.md        # 版本更新日志
└── README.md           # 项目说明文档（当前文件）
```

## 核心文件说明

### jung-words.js

包含荣格词汇联想测试使用的100个标准词汇，以及相关的分类和统计信息：
- `JUNG_WORDS`: 100个标准词汇数组
- `JUNG_WORD_CATEGORIES`: 词汇分类信息
- `JUNG_WORDS_STATS`: 词汇统计数据

### validate-words.js

词汇一致性验证工具，主要功能：
- 比较不同版本应用中的词汇列表
- 检测词汇不一致和重复
- 生成词汇统计报告
- 支持浏览器和Node.js环境

## 安装说明

无需安装，直接克隆或下载本仓库即可使用：

```bash
git clone https://github.com/yourusername/jung-word-association.git
cd jung-word-association
```

## 使用方法

### 在Node.js环境中运行

1. 验证词汇一致性：
```bash
node validate-words.js
```

### 在浏览器中使用

1. 在HTML文件中引入必要的脚本：
```html
<script src="jung-words.js"></script>
<script src="validate-words.js"></script>
```

2. 然后在浏览器控制台中调用：
```javascript
// 验证当前页面的词汇与标准词汇
validateWordConsistency();

// 生成词汇统计报告
generateWordStats();
```

## 功能详解

### 1. 词汇一致性验证

验证功能会：
- 检查词汇数量是否一致
- 比对每个位置的词汇是否相同
- 检测词汇列表中的重复词汇
- 在Node.js环境中自动检查index.html和index-new.html文件

### 2. 词汇统计分析

统计功能会生成：
- 总词汇数量
- 平均词汇长度
- 词汇长度分布
- 重复词汇统计（如有）
- 词汇分类统计（如有分类数据）

## 示例输出

### 一致性验证输出
```
🔍 开始验证荣格词汇联想测试词汇一致性...

🖥️ Node.js环境验证

📄 index.html:
  ✅ 词汇完全一致
  📊 词汇数量: 100

📄 index-new.html:
  ❌ 发现不一致：
    - 长度不匹配: 标准词汇(100) vs index-new.html(101)
    - 位置 45: "小册子" vs "手册"
  📊 词汇数量: 101

🎯 验证完成
```

### 统计报告输出
```
📈 荣格词汇统计报告
===================================================
总词汇数量: 100
平均词汇长度: 2.3 字符

词汇长度分布:
  1字: 15个
  2字: 78个
  3字: 7个

重复词汇: 生病, 骄傲, 死亡, 游泳, 疯狂, 害怕, 亲吻
重复次数: 10

词汇分类统计:
  body: 3个
  colors: 5个
  emotions: 11个
  actions: 10个
  objects: 14个
  nature: 10个
  social: 7个
  abstract: 21个
```

## API参考

### 核心函数

#### `validateWordConsistency()`
- 功能：验证词汇一致性
- 参数：无
- 返回值：无（直接在控制台输出结果）

#### `generateWordStats()`
- 功能：生成词汇统计报告
- 参数：无
- 返回值：无（直接在控制台输出结果）

#### `compareWordArrays(words1, words2, name1, name2)`
- 功能：比较两个词汇数组
- 参数：
  - `words1`: 第一个词汇数组
  - `words2`: 第二个词汇数组
  - `name1`: 第一个数组的名称
  - `name2`: 第二个数组的名称
- 返回值：比较结果对象

#### `extractWordsFromHTML(htmlContent, variableName)`
- 功能：从HTML文件中提取词汇数组
- 参数：
  - `htmlContent`: HTML文件内容
  - `variableName`: 变量名（默认为'wordList'）
- 返回值：提取的词汇数组

## 注意事项

1. 荣格词汇列表中有意包含一些重复词汇，这是测试设计的一部分。
2. 验证脚本会检测并报告重复词汇，但这不会被视为错误。
3. 确保在使用前正确引入jung-words.js文件。

## 许可证

本项目采用MIT许可证。详见[LICENSE](LICENSE)文件。

## 贡献

欢迎提交Issue和Pull Request来改进本项目。

## 更新日志

详见[CHANGELOG.md](CHANGELOG.md)文件。

## 相关资源

- [荣格词汇联想测试 - 维基百科](https://en.wikipedia.org/wiki/Word_association)
- [卡尔·荣格心理学理论](https://en.wikipedia.org/wiki/Carl_Jung)