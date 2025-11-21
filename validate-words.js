/**
 * 荣格词汇联想测试 - 词汇一致性验证脚本
 * Jung Word Association Test - Word Consistency Validator
 * 
 * 此脚本用于验证不同版本的应用中使用的词汇数据是否一致
 * 确保所有版本都使用相同的荣格标准词汇列表
 * 
 * 使用方法：
 * 1. 在浏览器控制台中运行此脚本
 * 2. 或在Node.js环境中运行：node validate-words.js
 * 
 * @author Jung
 * @version 1.0.0
 * @since 2024-10-24
 */

// 引入标准词汇列表
if (typeof require !== 'undefined') {
    // Node.js 环境
    const fs = require('fs');
    const path = require('path');
    
    // 读取 jung-words.js 文件
    const jungWordsContent = fs.readFileSync(path.join(__dirname, 'jung-words.js'), 'utf8');
    eval(jungWordsContent);
} else {
    // 浏览器环境 - 确保已加载 jung-words.js
    if (typeof JUNG_WORDS === 'undefined') {
        console.error('❌ 请先加载 jung-words.js 文件');
        throw new Error('JUNG_WORDS not defined');
    }
}

/**
 * 从HTML文件中提取词汇数组
 * @param {string} htmlContent - HTML文件内容
 * @param {string} variableName - 变量名（wordList 或 WORD_LIST）
 * @returns {Array} 提取的词汇数组
 */
function extractWordsFromHTML(htmlContent, variableName = 'wordList') {
    const regex = new RegExp(`const\\s+${variableName}\\s*=\\s*\\[(.*?)\\];`, 's');
    const match = htmlContent.match(regex);
    
    if (!match) {
        throw new Error(`无法找到变量 ${variableName}`);
    }
    
    const arrayContent = match[1];
    const words = [];
    const wordRegex = /"([^"]+)"/g;
    let wordMatch;
    
    while ((wordMatch = wordRegex.exec(arrayContent)) !== null) {
        words.push(wordMatch[1]);
    }
    
    return words;
}

/**
 * 比较两个词汇数组
 * @param {Array} words1 - 第一个词汇数组
 * @param {Array} words2 - 第二个词汇数组
 * @param {string} name1 - 第一个数组的名称
 * @param {string} name2 - 第二个数组的名称
 * @returns {Object} 比较结果
 */
function compareWordArrays(words1, words2, name1, name2) {
    const result = {
        identical: true,
        lengthMatch: words1.length === words2.length,
        differences: [],
        duplicatesIn1: [],
        duplicatesIn2: [],
        stats: {
            [name1]: { length: words1.length },
            [name2]: { length: words2.length }
        }
    };
    
    // 检查长度
    if (!result.lengthMatch) {
        result.identical = false;
        result.differences.push(`长度不匹配: ${name1}(${words1.length}) vs ${name2}(${words2.length})`);
    }
    
    // 检查每个位置的词汇
    const maxLength = Math.max(words1.length, words2.length);
    for (let i = 0; i < maxLength; i++) {
        const word1 = words1[i];
        const word2 = words2[i];
        
        if (word1 !== word2) {
            result.identical = false;
            result.differences.push(`位置 ${i + 1}: "${word1}" vs "${word2}"`);
        }
    }
    
    // 检查重复词汇
    result.duplicatesIn1 = words1.filter((word, index) => words1.indexOf(word) !== index);
    result.duplicatesIn2 = words2.filter((word, index) => words2.indexOf(word) !== index);
    
    return result;
}

/**
 * 验证词汇一致性
 */
function validateWordConsistency() {
    console.log('🔍 开始验证荣格词汇联想测试词汇一致性...\n');
    
    try {
        // 在浏览器环境中验证
        if (typeof document !== 'undefined') {
            console.log('📱 浏览器环境验证');
            
            // 检查当前页面的词汇
            let currentWords = [];
            if (typeof wordList !== 'undefined') {
                currentWords = wordList;
                console.log('✅ 找到 wordList 变量');
            } else if (typeof WORD_LIST !== 'undefined') {
                currentWords = WORD_LIST;
                console.log('✅ 找到 WORD_LIST 变量');
            } else {
                console.warn('⚠️ 当前页面未找到词汇变量');
                return;
            }
            
            // 与标准词汇比较
            const comparison = compareWordArrays(JUNG_WORDS, currentWords, '标准词汇', '当前页面词汇');
            
            if (comparison.identical) {
                console.log('✅ 词汇完全一致！');
            } else {
                console.error('❌ 发现词汇不一致：');
                comparison.differences.forEach(diff => console.error(`  - ${diff}`));
            }
            
            // 显示统计信息
            console.log('\n📊 统计信息：');
            console.log(`  - 标准词汇数量: ${JUNG_WORDS.length}`);
            console.log(`  - 当前词汇数量: ${currentWords.length}`);
            
            if (comparison.duplicatesIn1.length > 0) {
                console.log(`  - 标准词汇中的重复: ${comparison.duplicatesIn1.join(', ')}`);
            }
            if (comparison.duplicatesIn2.length > 0) {
                console.log(`  - 当前词汇中的重复: ${comparison.duplicatesIn2.join(', ')}`);
            }
        }
        
        // 在Node.js环境中验证文件
        if (typeof require !== 'undefined') {
            console.log('🖥️ Node.js环境验证');
            
            const fs = require('fs');
            const path = require('path');
            
            const files = [
                { path: 'index.html', variable: 'wordList' },
                { path: 'index-new.html', variable: 'WORD_LIST' }
            ];
            
            for (const file of files) {
                try {
                    const filePath = path.join(__dirname, file.path);
                    if (fs.existsSync(filePath)) {
                        const content = fs.readFileSync(filePath, 'utf8');
                        const words = extractWordsFromHTML(content, file.variable);
                        
                        const comparison = compareWordArrays(JUNG_WORDS, words, '标准词汇', file.path);
                        
                        console.log(`\n📄 ${file.path}:`);
                        if (comparison.identical) {
                            console.log('  ✅ 词汇完全一致');
                        } else {
                            console.log('  ❌ 发现不一致：');
                            comparison.differences.slice(0, 5).forEach(diff => console.log(`    - ${diff}`));
                            if (comparison.differences.length > 5) {
                                console.log(`    ... 还有 ${comparison.differences.length - 5} 个差异`);
                            }
                        }
                        console.log(`  📊 词汇数量: ${words.length}`);
                    } else {
                        console.warn(`  ⚠️ 文件不存在: ${file.path}`);
                    }
                } catch (error) {
                    console.error(`  ❌ 处理 ${file.path} 时出错: ${error.message}`);
                }
            }
        }
        
    } catch (error) {
        console.error('❌ 验证过程中出现错误:', error.message);
    }
    
    console.log('\n🎯 验证完成');
}

/**
 * 生成词汇统计报告
 */
function generateWordStats() {
    console.log('\n📈 荣格词汇统计报告');
    console.log('=' .repeat(50));
    
    console.log(`总词汇数量: ${JUNG_WORDS.length}`);
    console.log(`平均词汇长度: ${(JUNG_WORDS.reduce((sum, word) => sum + word.length, 0) / JUNG_WORDS.length).toFixed(1)} 字符`);
    
    // 词汇长度分布
    const lengthDistribution = {};
    JUNG_WORDS.forEach(word => {
        const len = word.length;
        lengthDistribution[len] = (lengthDistribution[len] || 0) + 1;
    });
    
    console.log('\n词汇长度分布:');
    Object.keys(lengthDistribution).sort((a, b) => a - b).forEach(len => {
        console.log(`  ${len}字: ${lengthDistribution[len]}个`);
    });
    
    // 重复词汇
    const duplicates = JUNG_WORDS.filter((word, index) => JUNG_WORDS.indexOf(word) !== index);
    if (duplicates.length > 0) {
        console.log(`\n重复词汇: ${[...new Set(duplicates)].join(', ')}`);
        console.log(`重复次数: ${duplicates.length}`);
    } else {
        console.log('\n✅ 无重复词汇');
    }
    
    // 词汇分类统计（如果有分类数据）
    if (typeof JUNG_WORD_CATEGORIES !== 'undefined') {
        console.log('\n词汇分类统计:');
        Object.entries(JUNG_WORD_CATEGORIES).forEach(([category, words]) => {
            console.log(`  ${category}: ${words.length}个`);
        });
    }
}

// 如果直接运行此脚本
if (typeof require !== 'undefined' && require.main === module) {
    validateWordConsistency();
    generateWordStats();
}

// 导出函数（如果在模块环境中）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateWordConsistency,
        generateWordStats,
        compareWordArrays,
        extractWordsFromHTML
    };
}

// 浏览器环境中的全局函数
if (typeof window !== 'undefined') {
    window.validateWordConsistency = validateWordConsistency;
    window.generateWordStats = generateWordStats;
}
