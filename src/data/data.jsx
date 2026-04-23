import React from 'react';

export const generalTimeline = [
  { year: "1943", title: "神经元数学模型", desc: "McCulloch 和 Pitts 提出神经元的数学表达，为神经网络奠定逻辑基础。" },
  { year: "1950", title: "图灵测试", desc: "阿兰·图灵定义机器智能标准，提出“机器能思考吗？”的终极评判。" },
  { year: "1956", title: "达特茅斯会议", desc: "术语“人工智能”正式诞生，确立了 AI 作为一个独立的研究领域。" },
  { year: "1966", title: "ELIZA 诞生", desc: "第一个能够模拟心理医生的聊天程序，展示了自然语言处理的潜力。" },
  { year: "1997", title: "深蓝击败棋王", desc: "IBM 深蓝击败国际象棋冠军卡斯帕罗夫，暴力搜索算法的巅峰。" },
  { year: "2012", title: "AlexNet 视觉革命", desc: "卷积神经网络在 ImageNet 大赛碾压传统算法，深度学习时代开启。" },
  { year: "2016", title: "AlphaGo 奇迹", desc: "DeepMind 击败围棋世界冠军，证明深度强化学习在复杂决策中的上限。" },
  { year: "2017", title: "Transformer 降临", desc: "Google 提出 Attention 机制，彻底统一了 NLP 领域的底层架构。" },
  { year: "2020", title: "GPT-3 & Scaling Law", desc: "证明了规模化可以产生令人惊叹的智能涌现，大模型赛道开启。" },
  { year: "2022", title: "ChatGPT 全球引爆", desc: "生成式 AI 跨越奇点，AGI 路线图正式明晰，AI 走入全民时代。" },
  { year: "2024", title: "视频与推理元年", desc: "Sora 模拟物理世界，o1 开启慢思考革命，AI 逻辑推理达到新高度。" },
  { year: "2026", title: "全能 Agent 时代", desc: "自主智能体全面爆发，AI 能够独立理解物理世界并执行长链路任务。" }
];

export const domainsData = [
  {
    id: "text",
    name: "文字与代码",
    icon: "MessageSquare",
    color: "indigo",
    stats: [
      { id: "innovation", label: "创新", value: 99 },
      { id: "logical", label: "逻辑", value: 98 },
      { id: "coding", label: "代码", value: 95 }
    ],
    techSpecs: [
      { label: "核心架构", value: "Transformer / MoE" },
      { label: "逻辑范式", value: "思维链 (CoT)" },
      { label: "上下文", value: "2M+ Tokens" }
    ],
    history: [
      { year: "2018", title: "BERT 预训练", desc: "Google 引入双向编码，NLP 从“查表”进入大规模特征预训练时代。" },
      { year: "2020", title: "GPT-3 涌现", desc: "1750亿参数规模引发智能涌现，AI 开始展示未被训练的代码与推理能力。" },
      { year: "2021", title: "GitHub Copilot", desc: "基于 Codex 模型，AI 正式进入程序员工作流，开启结对编程时代。" },
      { year: "2023", title: "长文本竞赛", desc: "Kimi 等国产模型引爆上下文长度战争，从 20k 到 200w 的飞跃。" },
      { year: "2024", title: "o1 慢思考革命", desc: "OpenAI 引入强化学习生成的思维链，让模型具备逻辑预演能力。" },
      { year: "2025", title: "DeepSeek R1 震撼开源", desc: "国产推理模型开源，打破了闭源公司对顶级推理能力的垄断。" }
    ],
    principles: {
      title: "自回归生成 (Autoregressive) 与 混合专家 (MoE)",
      content: "大语言模型（LLM）的底层基于 Transformer 架构。2025 年主流模型已全面转向 MoE 架构，仅激活部分专家神经元，在保持智能密度的同时极大降低了成本。最新的强化学习算法则通过思维链（CoT）让模型在输出前进行多路径自我博弈。"
    },
    deepDive: {
      steps: [
        { title: "Tokens 分词与向量化", desc: "将自然语言拆解为数学向量，捕捉上下文极其微小的关联权重。" },
        { title: "后训练对齐 (Alignment)", desc: "利用 RLHF 与 DPO 技术，确保模型符合人类安全规范与道德标准。" },
        { title: "思维链 CoT 引导", desc: "引导模型将复杂任务拆解为子步骤，逐一逻辑破局。" },
        { title: "长程记忆 RAG 增强", desc: "结合外挂向量数据库，解决模型幻觉，实现海量私有数据检索。" }
      ],
      comparison: {
        open: "定制化高、部署安全 (DeepSeek, Llama, Qwen, Yi, Mistral)",
        closed: "性能巅峰、多模态融合深 (GPT-4, Claude, Gemini, Grok)"
      }
    },
    vendors: [
      { id: "v-openai", name: "OpenAI", logo: "Globe", logoColor: "text-emerald-500", origin: "硅谷巨头", desc: "行业先行者", models: [
        { name: "o1 / o3", type: "推理模型", status: "闭源", specs: { context: "200K", params: "未知", cost: "高" }, features: ["推理深度思考", "代码专家"], suitability: "高智力科研与算法。" },
        { name: "GPT-4o", type: "旗舰基座", status: "闭源", specs: { context: "128K", params: "万亿", cost: "中" }, features: ["实时交互", "全能"], suitability: "万能个人助手。" }
      ]},
      { id: "v-google", name: "Google", logo: "Zap", logoColor: "text-blue-500", origin: "硅谷巨头", desc: "AI 架构鼻祖", models: [
        { name: "Gemini 2.0 Pro", type: "原生多模态", status: "闭源", specs: { context: "2M+", params: "巨型", cost: "中" }, features: ["超长上下文", "多模态原生"], suitability: "海量资料阅读分析。" }
      ]},
      { id: "v-anthropic", name: "Anthropic", logo: "Layers", logoColor: "text-amber-600", origin: "硅谷新贵", desc: "代码与逻辑王者", models: [
        { name: "Claude 3.5 Sonnet", type: "创作/编程", status: "闭源", specs: { context: "200K", params: "未知", cost: "中" }, features: ["行文细腻", "编程第一"], suitability: "深度创作者与程序员。" }
      ]},
      { id: "v-deepseek", name: "DeepSeek", logo: "BrainCircuit", logoColor: "text-blue-600", origin: "国产先锋", desc: "开源之光", models: [
        { name: "R1 / V3", type: "推理/通用", status: "开源", specs: { context: "128K", params: "671B", cost: "极低" }, features: ["推理比肩o1", "极致性价比"], suitability: "开发者本地部署首选。" }
      ]},
      { id: "v-bytedance", name: "字节跳动", logo: "Hexagon", logoColor: "text-blue-400", origin: "国产大厂", desc: "应用之王", models: [
        { name: "豆包 Pro", type: "大规模通用", status: "闭源", specs: { context: "256K", params: "MoE", cost: "极低" }, features: ["字节生态", "极高并发"], suitability: "商业应用大规模接入。" }
      ]},
      { id: "v-zhipu", name: "智谱 AI", logo: "CpuIcon", logoColor: "text-purple-500", origin: "国产先锋", desc: "学术派巨头", models: [
        { name: "GLM-4 / 5", type: "旗舰基座", status: "闭源/开源", specs: { context: "256K", params: "千亿级", cost: "中" }, features: ["ToolUse极强", "清华系底蕴"], suitability: "Agent 智能体构建。" }
      ]},
      { id: "v-moonshot", name: "月之暗面", logo: "Rocket", logoColor: "text-slate-800", origin: "国产独角兽", desc: "长文本先驱", models: [
        { name: "Kimi k1.5", type: "超长文本", status: "闭源", specs: { context: "2M+", params: "未知", cost: "中" }, features: ["长文本解析", "搜索强"], suitability: "长文档、财报分析。" }
      ]},
      { id: "v-mistral", name: "Mistral AI", logo: "Wind", logoColor: "text-orange-400", origin: "欧洲力量", desc: "开源之王(欧洲)", models: [
        { name: "Mistral Large 2", type: "开源基座", status: "开源", specs: { context: "128K", params: "123B", cost: "低" }, features: ["效率奇高", "多语言强"], suitability: "全球化业务处理。" }
      ]}
    ]
  },
  {
    id: "image",
    name: "绘画与视觉",
    icon: "ImageIcon",
    color: "cyan",
    stats: [
      { id: "aesthetics", label: "审美", value: 95 },
      { id: "speed", label: "生成速度", value: 92 },
      { id: "control", label: "控制精准度", value: 90 }
    ],
    history: [
      { year: "2018", title: "StyleGAN", desc: "NVIDIA 发布，人脸生成达到“无法分辨虚实”的高度。" },
      { year: "2022", title: "Diffusion 爆发", desc: "Stable Diffusion 与 Midjourney 席卷全球创作界。" },
      { year: "2023", title: "ControlNet 诞生", desc: "为扩散模型增加了线稿、姿态等精准控制能力。" },
      { year: "2024", title: "FLUX 架构统一", desc: "结合 DiT 架构彻底解决了手部和文字排版难题。" }
    ],
    principles: {
      title: "潜在扩散模型 (Latent Diffusion) 与 DiT",
      content: "视觉生成已从像素计算演进至潜在空间。2026 年的最新模型采用 Diffusion Transformer (DiT) 架构，能像人类一样理解空间构图，支持秒级的高保真原生文字排版。"
    },
    deepDive: {
      steps: [
        { title: "潜空间压缩", desc: "将图片压缩至特征空间进行演算，极大节省显存。" },
        { title: "反向扩散去噪", desc: "从纯噪声开始，通过多轮预测还原画面细节。" },
        { title: "语义对齐引导", desc: "确保画面中的每一个物件都符合提示词的语义分布。" },
        { title: "生成式超分", desc: "利用生成模型将草图瞬间扩充至 8K 电影级分辨率。" }
      ],
      comparison: {
        open: "微调自由、Lora生态丰富 (Flux, Stable Diffusion, HunyuanDiT)",
        closed: "审美天花板、大师级光影 (Midjourney, Imagen, DALL-E 3)"
      }
    },
    vendors: [
      { id: "i-mj", name: "Midjourney", logo: "Palette", logoColor: "text-slate-800", origin: "独立团队", desc: "审美天花板", models: [
        { name: "V7 / V6.1", type: "艺术基座", status: "闭源", specs: { context: "极致画质", params: "专有", cost: "订阅" }, features: ["艺术大师", "风格参考"], suitability: "高端创意设计。" }
      ]},
      { id: "i-bfl", name: "BFL (Flux)", logo: "Wand2", logoColor: "text-cyan-600", origin: "欧洲力量", desc: "开源绘图新皇", models: [
        { name: "FLUX 2 Pro", type: "DiT旗舰", status: "开源", specs: { context: "原生4K", params: "12B+", cost: "低" }, features: ["文字精准", "解剖学完美"], suitability: "专业微调首选。" }
      ]},
      { id: "i-adobe", name: "Adobe", logo: "PenTool", logoColor: "text-red-500", origin: "设计巨头", desc: "版权安全首选", models: [
        { name: "Firefly 4", type: "商用引擎", status: "闭源", specs: { context: "PS无缝", params: "未知", cost: "订阅" }, features: ["绝对版权安全", "矢量生成"], suitability: "商业合规设计。" }
      ]},
      { id: "i-tencent", name: "腾讯混元", logo: "Component", logoColor: "text-blue-500", origin: "国产大厂", desc: "国风专家", models: [
        { name: "Hunyuan-DiT", type: "中文原生", status: "开源", specs: { context: "高清", params: "1.5B", cost: "免费" }, features: ["最懂中文", "汉字直出"], suitability: "国风营销素材。" }
      ]}
    ]
  },
  {
    id: "audio",
    name: "音频与音乐",
    icon: "Music",
    color: "purple",
    stats: [
      { id: "voice", label: "人声表现", value: 96 },
      { id: "music", label: "音乐性", value: 90 },
      { id: "speed", label: "生成速度", value: 85 }
    ],
    history: [
      { year: "2016", title: "WaveNet", desc: "Google 首次实现神经网络对原始音频波形的建模。" },
      { year: "2023", title: "零样本克隆", desc: "只需 3 秒参考音频即可完美复刻人类音色。" },
      { year: "2024", title: "Suno V4 革命", desc: "AI 音乐在音质、旋律、编曲上达到商业流行乐水准。" },
      { year: "2025", title: "全原生流式对话", desc: "端到端语音直连，不再依赖文本中转，实现超自然交互。" }
    ],
    principles: {
      title: "神经音频 Codec 与 流匹配 (Flow Matching)",
      content: "现在的音频生成通过流匹配技术精准预测音色波动、呼吸声甚至发音时的“犹豫感”。"
    },
    deepDive: {
      steps: [
        { title: "神经离散编码", desc: "将波形压缩为音频 Token，实现像处理文字一样的音频生成。" },
        { title: "多维情绪注入", desc: "同步计算叹息、笑声、耳语等极微小的副语言特征。" },
        { title: "跨语种声学迁移", desc: "保留母语韵律的同时，让 AI 说出一口流利的外语。" },
        { title: "端到端音乐解耦", desc: "实现人声、鼓点、伴奏的独立音轨分离与重构。" }
      ],
      comparison: {
        open: "隐私安全、可微调各种方言 (CosyVoice, ChatTTS, FishSpeech)",
        closed: "商业质感、渲染极速 (ElevenLabs, Suno, Udio, MiniMax)"
      }
    },
    vendors: [
      { id: "a-11labs", name: "ElevenLabs", logo: "Mic2", logoColor: "text-purple-600", origin: "硅谷独角兽", desc: "全球配音标杆", models: [
        { name: "Multilingual V3", type: "拟人TTS", status: "闭源", specs: { context: "流式", params: "专有", cost: "高" }, features: ["顶级情绪", "零样本克隆"], suitability: "专业出海配音。" }
      ]},
      { id: "a-suno", name: "Suno / Udio", logo: "Sparkles", logoColor: "text-pink-500", origin: "独立团队", desc: "流行乐之皇", models: [
        { name: "Suno V4", type: "作曲模型", status: "闭源", specs: { context: "全曲", params: "未知", cost: "订阅" }, features: ["旋律感", "词曲结合"], suitability: "大众创作。" }
      ]},
      { id: "a-minimax", name: "MiniMax (海螺)", logo: "Wand2", logoColor: "text-blue-500", origin: "国产独角兽", desc: "情绪配音专家", models: [
        { name: "abab-audio", type: "拟人语音", status: "闭源", specs: { context: "流式", params: "专有", cost: "低" }, features: ["叹气笑声自然", "中文极佳"], suitability: "情感陪伴与解说。" }
      ]}
    ]
  },
  {
    id: "video",
    name: "视频与仿真",
    icon: "Video",
    color: "rose",
    stats: [
      { id: "physics", label: "物理规律", value: 92 },
      { id: "temporal", label: "时序稳定", value: 88 },
      { id: "quality", label: "画质", value: 90 }
    ],
    history: [
      { year: "2023", title: "Gen-2 开幕", desc: "开启了大规模文生视频商业化应用之门。" },
      { year: "2024", title: "Sora 震撼发布", desc: "证明了 DiT 架构可以模拟真实物理重力与碰撞规律。" },
      { year: "2024", title: "国产可灵爆发", desc: "动作稳定性反超海外，国产视频底座全面领先。" },
      { year: "2025", title: "Veo 视听一体化", desc: "Google 实现了画面动作与原生音效的毫秒级对齐。" }
    ],
    principles: {
      title: "DiT 与 时空补丁 模拟",
      content: "现在的视频生成不再是逐帧插值，而是将时间与空间视为整体 3D 补丁。模型具备了初步的“世界模型”属性。"
    },
    deepDive: {
      steps: [
        { title: "3D Patch 切分", desc: "将视频分解为包含时间维度的 Patch，保留跨帧关联性。" },
        { title: "物理定律学习", desc: "从海量视频中学习物体恒常性与运动先验。" },
        { title: "多步去噪推演", desc: "计算最符合物理惯性的运动路径，消除抖动。" },
        { title: "时域平滑增强", desc: "实现长达 60s 的一镜到底，背景保持绝对稳定。" }
      ],
      comparison: {
        open: "支持本地角色微调 (HunyuanVideo, CogVideoX, Vidu)",
        closed: "物理真实度顶尖 (Sora, Kling, Luma, Runway)"
      }
    },
    vendors: [
      { id: "v-openai-vid", name: "OpenAI (Sora)", logo: "Globe", logoColor: "text-emerald-500", origin: "硅谷巨头", desc: "物理模拟巅峰", models: [
        { name: "Sora", type: "旗舰视频", status: "闭源", specs: { context: "60s", params: "巨型", cost: "高" }, features: ["物理仿真", "多机位"], suitability: "电影级创作。" }
      ]},
      { id: "v-kling-vid", name: "快手 (可灵)", logo: "VideoIcon", logoColor: "text-orange-600", origin: "国产大厂", desc: "动态表现第一", models: [
        { name: "Kling 3.0", type: "视频基座", status: "闭源", specs: { context: "超长摄制", params: "大", cost: "中" }, features: ["动作幅度大", "一致性强"], suitability: "自媒体、微短剧。" }
      ]},
      { id: "v-runway-vid", name: "Runway", logo: "Triangle", logoColor: "text-indigo-500", origin: "硅谷力量", desc: "后期工具专家", models: [
        { name: "Gen-3 Alpha", type: "高保真视频", status: "闭源", specs: { context: "10s", params: "未知", cost: "高" }, features: ["运动笔刷", "精准控制"], suitability: "专业后期视频流。" }
      ]}
    ]
  }
];
