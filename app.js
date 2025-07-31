// 微信群聊投资项目分析系统
class WeChatProjectAnalyzer {
    constructor() {
        this.messages = [];
        this.projectStats = new Map();
        this.keywords = [];
        this.analysisHistory = [];
        this.currentAnalysis = null;
        
        this.initializeElements();
        this.bindEvents();
        this.loadConfig();
        this.loadHistory();
        this.initializeChart();
    }

    initializeElements() {
        // 输入控件
        this.groupNameInput = document.getElementById('groupNameInput');
        this.messageInput = document.getElementById('messageInput');
        this.analyzeBtn = document.getElementById('analyzeBtn');
        this.clearInputBtn = document.getElementById('clearInputBtn');
        this.addSampleBtn = document.getElementById('addSampleBtn');
        
        // 配置控件
        this.keywordsInput = document.getElementById('keywordsInput');
        this.caseSensitive = document.getElementById('caseSensitive
