# 🎯 English Word Learning App

一个现代化的英语单词学习应用，帮助用户通过多种方式学习和记忆英语单词。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-2.0.0-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ 功能特性

### 🎓 学习模式
- **顺序学习**: 按顺序逐个学习单词
- **随机学习**: 随机显示单词，增加学习趣味性
- **复习模式**: 重点复习错误或困难的单词

### 🎵 多媒体支持
- **语音播放**: 支持单词发音播放
- **音频控制**: 可调节播放速度和音量
- **离线支持**: 本地音频文件支持

### 📊 学习统计
- **实时进度**: 显示学习进度和完成度
- **正确率统计**: 跟踪学习效果
- **时间记录**: 记录学习时长

### ⚙️ 个性化设置
- **显示时长**: 自定义单词显示时间
- **自动播放**: 可选择是否自动播放发音
- **主题切换**: 支持明暗主题切换
- **字体大小**: 可调节字体大小

### 📱 响应式设计
- **移动端优化**: 完美适配手机和平板
- **现代化UI**: 采用最新的设计趋势
- **流畅动画**: 丰富的交互动画效果

## 🚀 快速开始

### 环境要求
- 现代浏览器（Chrome 80+, Firefox 75+, Safari 13+）
- Python 3.6+（用于本地服务器）

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/your-username/english-word-learning-app.git
cd english-word-learning-app
```

2. **启动本地服务器**
```bash
# 使用Python启动服务器
python -m http.server 8000

# 或使用Node.js
npx http-server -p 8000
```

3. **访问应用**
打开浏览器访问 `http://localhost:8000`

### 文件结构
```
english-word-learning-app/
├── index.html              # 原版应用
├── index-new.html          # 现代化版本
├── words/                  # 单词数据文件
│   ├── cet4.txt           # CET-4词汇
│   ├── cet6.txt           # CET-6词汇
│   ├── toefl.txt          # TOEFL词汇
│   └── ielts.txt          # IELTS词汇
├── audio/                  # 音频文件目录
├── css/                    # 样式文件
├── js/                     # JavaScript文件
├── README.md              # 项目说明
├── LICENSE                # 开源协议
└── .gitignore            # Git忽略文件
```

## 📖 使用指南

### 基本操作

1. **选择词汇表**: 从下拉菜单中选择要学习的词汇表
2. **开始学习**: 点击"开始学习"按钮
3. **控制播放**: 使用播放/暂停按钮控制学习进度
4. **调整设置**: 在设置面板中自定义学习参数

### 高级功能

#### 自定义词汇表
在 `words/` 目录下创建新的文本文件，格式如下：
```
word1 /pronunciation/ meaning
word2 /pronunciation/ meaning
...
```

#### 添加音频文件
将音频文件放入 `audio/` 目录，文件名与单词对应：
```
audio/
├── word1.mp3
├── word2.mp3
└── ...
```

## 🛠️ 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **样式**: CSS Grid, Flexbox, CSS Variables
- **音频**: Web Audio API
- **存储**: LocalStorage
- **构建**: 无需构建工具，纯静态文件

## 🎨 设计特色

### 现代化UI设计
- **卡片式布局**: 清晰的信息层次
- **柔和阴影**: 增强视觉深度
- **流畅动画**: 提升用户体验
- **响应式设计**: 适配各种设备

### 色彩系统
- **主色调**: 渐变蓝紫色系
- **辅助色**: 温暖的橙色和绿色
- **中性色**: 现代化的灰色调
- **语义色**: 清晰的状态指示

## 📊 浏览器支持

| 浏览器 | 版本 | 支持状态 |
|--------|------|----------|
| Chrome | 80+ | ✅ 完全支持 |
| Firefox | 75+ | ✅ 完全支持 |
| Safari | 13+ | ✅ 完全支持 |
| Edge | 80+ | ✅ 完全支持 |
| IE | - | ❌ 不支持 |

## 🤝 贡献指南

我们欢迎所有形式的贡献！请查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解详细信息。

### 贡献方式
- 🐛 报告Bug
- 💡 提出新功能建议
- 📝 改进文档
- 🔧 提交代码修复
- 🌍 翻译支持

### 开发流程
1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📝 更新日志

查看 [CHANGELOG.md](CHANGELOG.md) 了解版本更新历史。

### 最新版本 v2.0.0
- ✨ 全新现代化UI设计
- 🎨 改进的视觉效果和动画
- 📱 更好的移动端适配
- ⚡ 性能优化和代码重构
- 🔧 新增多项个性化设置

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 👥 作者

- **Jung** - *初始开发* - [GitHub](https://github.com/your-username)

## 🙏 致谢

- 感谢所有贡献者的支持
- 感谢开源社区提供的灵感
- 特别感谢词汇数据提供方

## 📞 联系方式

- 项目主页: [GitHub Repository](https://github.com/your-username/english-word-learning-app)
- 问题反馈: [Issues](https://github.com/your-username/english-word-learning-app/issues)
- 邮箱: your-email@example.com

---

⭐ 如果这个项目对你有帮助，请给它一个星标！

## 🔗 相关链接

- [在线演示](https://your-username.github.io/english-word-learning-app)
- [开发文档](https://github.com/your-username/english-word-learning-app/wiki)
- [API文档](https://github.com/your-username/english-word-learning-app/blob/main/docs/API.md)
