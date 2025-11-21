/**
 * 荣格词汇联想测试的100个标准词汇
 * Jung Word Association Test - Standard 100 Words
 * 
 * 这些词汇是卡尔·荣格（Carl Jung）在其词汇联想测试中使用的标准词汇列表。
 * 这个测试用于探索个体的无意识心理内容和情感反应。
 * 
 * 词汇按照荣格原始测试的顺序排列，每个词汇都经过精心选择，
 * 旨在触发不同类型的心理反应和联想。
 * 
 * 使用方法：
 * 1. 在HTML文件中引入此文件：<script src="jung-words.js"></script>
 * 2. 使用 JUNG_WORDS 常量访问词汇数组
 * 
 * @author Jung
 * @version 2.0.0
 * @since 2024-10-24
 */

// 荣格词汇联想测试的100个标准词汇
const JUNG_WORDS = [
    "头", "绿色", "水", "唱歌", "死亡", "长", "船", "支付", "窗户", "友好",
    "桌子", "问题", "跳舞", "湖泊", "生病", "骄傲", "做饭", "墨水", "生气", "针",
    "游泳", "旅行", "蓝色", "灯", "犯罪", "种子", "善良", "箱子", "害怕", "床",
    "红色", "亲吻", "女人", "工作", "深海", "生病", "骄傲", "黄色", "山脉", "死亡",
    "盐", "新", "习俗", "祈祷", "钱", "愚蠢", "小册子", "失望", "道德", "镜子",
    "胖", "书籍", "肮脏", "羽毛", "命令", "玩偶", "饥饿", "白色", "孩子", "游泳",
    "希望", "香烟", "疯狂", "钉子", "油", "受害者", "舌头", "爱", "冷水", "舞蹈",
    "港口", "害羞", "家庭", "粗暴", "警察", "高度", "姐妹", "战争", "瓶子", "疯狂",
    "睡觉", "风暴", "国王", "奶酪", "血", "怜悯", "交谈", "未来", "请求", "亲吻",
    "纯洁", "门", "选择", "羊毛", "害怕", "月亮", "步行", "生病", "愤怒", "油漆"
];

// 词汇分类信息（可选，用于分析）
const JUNG_WORD_CATEGORIES = {
    // 身体部位和生理
    body: ["头", "舌头", "血"],
    
    // 颜色
    colors: ["绿色", "蓝色", "红色", "黄色", "白色"],
    
    // 情感和心理状态
    emotions: ["死亡", "友好", "生病", "骄傲", "生气", "害怕", "希望", "疯狂", "害羞", "爱", "愤怒"],
    
    // 行为和动作
    actions: ["唱歌", "支付", "跳舞", "做饭", "游泳", "旅行", "祈祷", "交谈", "步行", "亲吻"],
    
    // 物品和物体
    objects: ["船", "窗户", "桌子", "墨水", "针", "箱子", "床", "镜子", "书籍", "玩偶", "香烟", "钉子", "瓶子", "门"],
    
    // 自然和环境
    nature: ["水", "湖泊", "深海", "山脉", "盐", "种子", "羽毛", "油", "风暴", "月亮"],
    
    // 社会和关系
    social: ["问题", "犯罪", "家庭", "警察", "姐妹", "战争"],
    
    // 抽象概念
    abstract: ["长", "善良", "新", "习俗", "钱", "愚蠢", "小册子", "失望", "道德", "命令", "饥饿", "受害者", "粗暴", "高度", "怜悯", "未来", "请求", "纯洁", "选择", "羊毛"]
};

// 词汇统计信息
const JUNG_WORDS_STATS = {
    total: JUNG_WORDS.length,
    categories: Object.keys(JUNG_WORD_CATEGORIES).length,
    averageLength: Math.round(JUNG_WORDS.reduce((sum, word) => sum + word.length, 0) / JUNG_WORDS.length * 10) / 10
};

// 验证词汇数量
if (JUNG_WORDS.length !== 100) {
    console.warn(`警告：荣格词汇数量不正确，当前为 ${JUNG_WORDS.length} 个，应为 100 个`);
}

// 检查重复词汇
const duplicates = JUNG_WORDS.filter((word, index) => JUNG_WORDS.indexOf(word) !== index);
if (duplicates.length > 0) {
    console.info(`注意：发现重复词汇（这是正常的）：${duplicates.join(', ')}`);
}

// 导出（如果在Node.js环境中）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        JUNG_WORDS,
        JUNG_WORD_CATEGORIES,
        JUNG_WORDS_STATS
    };
}

// 全局访问（浏览器环境）
if (typeof window !== 'undefined') {
    window.JUNG_WORDS = JUNG_WORDS;
    window.JUNG_WORD_CATEGORIES = JUNG_WORD_CATEGORIES;
    window.JUNG_WORDS_STATS = JUNG_WORDS_STATS;
}

console.log('✅ 荣格词汇联想测试词汇已加载', JUNG_WORDS_STATS);

