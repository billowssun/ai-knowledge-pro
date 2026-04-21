import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, Music, Video, Image as ImageIcon,
  ChevronDown, ChevronUp, Cpu, BookOpen, Building2,
  Zap, CheckCircle2, Lock, Globe, Terminal, Layers,
  Sparkles, BrainCircuit, Wand2, Clock, Database, 
  Maximize, Banknote, Rocket, Activity, Palette, 
  Code, PenTool, LayoutTemplate, MonitorPlay,
  Aperture, Component, Hexagon, Eye, MousePointer2,
  Brush, ImagePlus, TrendingUp, ShieldCheck, Gauge,
  Server, Share2, Info, ArrowRight, Binary, Mic2,
  VideoIcon, PlayCircle, Waves, CpuIcon, Infinity,
  Dna, Boxes, Search, Star, Milestone, Flag,
  Wind, Triangle, Crown
} from 'lucide-react';

// --- 全局编年史 (底部横向滚动数据) ---
const generalTimeline = [
  { year: "1943", title: "神经元数学模型", desc: "McCulloch 和 Pitts 提出神经元的数学表达，为神经网络奠定逻辑基础。" },
  { year: "1950", title: "图灵测试", desc: "阿兰·图灵定义机器智能标准，提出“机器能思考吗？”的终极评判。" },
  { year: "1956", title: "达特茅斯会议", desc: "术语“人工智能”正式诞生，确立了 AI 作为一个独立的研究领域。" },
  { year: "1966", title: "ELIZA 诞生", desc: "第一个能够模拟心理医生的聊天程序，展示了自然语言处理的初步潜力。" },
  { year: "1986", title: "反向传播算法", desc: "Hinton 等人推广 BP 算法，解决了多层神经网络的训练难题。" },
  { year: "1997", title: "深蓝击败棋王", desc: "IBM 深蓝击败国际象棋冠军卡斯帕罗夫，暴力搜索算法的巅峰。" },
  { year: "2006", title: "深度学习概念", desc: "Geoffrey Hinton 提出多层神经网络的有效训练方法，AI 进入第三次浪潮。" },
  { year: "2012", title: "AlexNet 视觉革命", desc: "深度学习在 ImageNet 大赛碾压传统算法，神经网络开始统治视觉领域。" },
  { year: "2016", title: "AlphaGo 奇迹", desc: "DeepMind 击败围棋世界冠军，证明深度强化学习在复杂决策中的上限。" },
  { year: "2017", title: "Transformer 降临", desc: "Google 提出 Attention 机制，彻底统一了自然语言处理的底层架构。" },
  { year: "2020", title: "GPT-3 发布", desc: "1750亿参数规模验证了 Scaling Law 的存在，AI 产生惊人的涌现能力。" },
  { year: "2022", title: "ChatGPT 引爆全球", desc: "生成式 AI 跨越奇点，AGI 路线图正式明晰，AI 走入千家万户。" },
  { year: "2024", title: "视频与推理元年", desc: "Sora 模拟物理世界，o1 开启慢思考革命，AI 逻辑推理达到新高度。" },
  { year: "2026", title: "全能 Agent 时代", desc: "自主智能体全面爆发，AI 能够独立理解物理世界并执行长链路任务。" }
];

// --- 领域详尽数据源 (锁定 2026 年最新格局 - 海量厂商扩容) ---
const domainsData = [
  {
    id: "text",
    name: "文字与代码",
    icon: <MessageSquare className="w-5 h-5" />,
    color: "indigo",
    stats: { innovation: 99, logical: 98, coding: 95 },
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
      { year: "2024", title: "o1 慢思考革命", desc: "OpenAI 引入强化学习生成的思维链，让模型具备了在回答前进行逻辑预演的能力。" },
      { year: "2025", title: "DeepSeek R1 震撼开源", desc: "纯强化学习训练出的推理模型开源，打破了闭源公司对顶级推理能力的垄断。" }
    ],
    principles: {
      title: "自回归生成 (Autoregressive) 与 混合专家 (MoE)",
      content: "大语言模型（LLM）的底层基于 Transformer 架构。2025 年主流模型已全面转向 MoE 架构，仅激活部分专家神经元。最新的强化学习算法则通过思维链（CoT）让模型在输出前进行多路径自我博弈。"
    },
    deepDive: {
      steps: [
        { title: "Tokens 分词与向量化", desc: "将自然语言拆解为数学向量，通过自注意力机制捕捉上下文关联权重。" },
        { title: "后训练对齐 (Alignment)", desc: "利用 RLHF 与 DPO 技术，确保模型符合人类的安全规范与道德标准。" },
        { title: "思维链 CoT 引导", desc: "通过特定提示或强化学习，引导模型将复杂任务拆解为子步骤。" },
        { title: "长程记忆 RAG 增强", desc: "结合外挂向量数据库，解决模型幻觉，实现海量私有数据检索。" }
      ],
      comparison: {
        open: "定制化程度极高、数据私密安全 (DeepSeek, Llama, Qwen, Yi, Mistral)",
        closed: "性能天花板、多模态原生融合 (GPT-4, Claude, Gemini, Grok)"
      }
    },
    vendors: [
      { id: "v-openai", name: "OpenAI", logo: <Globe className="w-6 h-6 text-emerald-500" />, origin: "硅谷巨头", desc: "行业先行者", models: [
        { name: "o1 / o3", type: "推理模型", status: "闭源", specs: { context: "200K", params: "未知", cost: "高" }, features: ["推理深度思考", "复杂代码"], suitability: "高智力科研。" },
        { name: "GPT-4o", type: "旗舰基座", status: "闭源", specs: { context: "128K", params: "万亿", cost: "中" }, features: ["实时音视频", "全能"], suitability: "万能个人助手。" }
      ]},
      { id: "v-google", name: "Google", logo: <Zap className="w-6 h-6 text-blue-500" />, origin: "硅谷巨头", desc: "AI 架构鼻祖", models: [
        { name: "Gemini 2.0 Pro", type: "原生多模态", status: "闭源", specs: { context: "2M+", params: "巨型", cost: "中" }, features: ["超长上下文", "原生多模态"], suitability: "海量资料阅读。" }
      ]},
      { id: "v-anthropic", name: "Anthropic", logo: <Layers className="w-6 h-6 text-amber-600" />, origin: "硅谷新贵", desc: "代码与逻辑王者", models: [
        { name: "Claude 3.5 Sonnet", type: "创作/编程", status: "闭源", specs: { context: "200K", params: "未知", cost: "中" }, features: ["行文极具人味", "代码极强"], suitability: "程序员与创作者。" }
      ]},
      { id: "v-deepseek", name: "DeepSeek (深度求索)", logo: <BrainCircuit className="w-6 h-6 text-blue-600" />, origin: "国产先锋", desc: "开源之光", models: [
        { name: "R1 / V3", type: "推理/通用", status: "开源", specs: { context: "128K", params: "671B", cost: "极低" }, features: ["价格战神", "推理强"], suitability: "开发者首选。" }
      ]},
      { id: "v-bytedance", name: "字节跳动", logo: <Hexagon className="w-6 h-6 text-blue-400" />, origin: "国产大厂", desc: "应用之王", models: [
        { name: "豆包 Pro", type: "大规模通用", status: "闭源", specs: { context: "256K", params: "MoE", cost: "极低" }, features: ["极高并发", "字节生态"], suitability: "海量C端接入。" }
      ]},
      { id: "v-alibaba", name: "阿里巴巴", logo: <Terminal className="w-6 h-6 text-orange-500" />, origin: "国产大厂", desc: "全能开源主力", models: [
        { name: "Qwen 2.5 / 3", type: "旗舰基座", status: "开源", specs: { context: "128K-1M", params: "72B+", cost: "低" }, features: ["中文无敌", "工具调用强"], suitability: "企业级应用底座。" }
      ]},
      { id: "v-zhipu", name: "智谱 AI", logo: <CpuIcon className="w-6 h-6 text-purple-500" />, origin: "国产先锋", desc: "清华系学术派", models: [
        { name: "GLM-4 / 5", type: "旗舰基座", status: "闭源/开源", specs: { context: "256K", params: "千亿级", cost: "中" }, features: ["ToolUse极强", "学术底蕴"], suitability: "Agent 智能体构建。" }
      ]},
      { id: "v-moonshot", name: "月之暗面", logo: <Rocket className="w-6 h-6 text-slate-800" />, origin: "国产独角兽", desc: "长文本先驱", models: [
        { name: "Kimi k1.5", type: "超长文本", status: "闭源", specs: { context: "2M+", params: "未知", cost: "中" }, features: ["超长记忆", "搜索增强"], suitability: "长文档分析。" }
      ]},
      { id: "v-mistral", name: "Mistral AI", logo: <Wind className="w-6 h-6 text-orange-400" />, origin: "欧洲力量", desc: "开源之王(欧洲)", models: [
        { name: "Mistral Large 2", type: "开源基座", status: "开源", specs: { context: "128K", params: "123B", cost: "低" }, features: ["效率奇高", "多语言强"], suitability: "全球化业务。" }
      ]},
      { id: "v-xai", name: "xAI (Grok)", logo: <Infinity className="w-6 h-6 text-slate-900" />, origin: "硅谷力量", desc: "马斯克的AI", models: [
        { name: "Grok-3", type: "超大规模", status: "闭源", specs: { context: "未知", params: "巨量", cost: "中" }, features: ["实时X数据", "不设限"], suitability: "实时新闻分析。" }
      ]},
      { id: "v-ms", name: "Microsoft", logo: <Boxes className="w-6 h-6 text-blue-500" />, origin: "硅谷巨头", desc: "集成之王", models: [
        { name: "Phi-4", type: "高密度小模型", status: "开源", specs: { context: "128K", params: "14B", cost: "免" }, features: ["最强小模型", "教科书数据"], suitability: "端侧部署。" }
      ]}
    ]
  },
  {
    id: "image",
    name: "绘画与视觉",
    icon: <ImageIcon className="w-5 h-5" />,
    color: "cyan",
    stats: { aesthetics: 95, speed: 92, control: 90 },
    history: [
      { year: "2018", title: "StyleGAN", desc: "NVIDIA 标志着 AI 生成人脸达到“无法分辨虚实”的高度。" },
      { year: "2022", title: "Diffusion 爆发", desc: "Stable Diffusion 与 Midjourney 开启 AIGC 图像元年。" },
      { year: "2023", title: "ControlNet 诞生", desc: "为扩散模型增加了线稿、姿态等精准控制能力。" },
      { year: "2024", title: "FLUX 架构统一", desc: "结合 DiT 架构彻底解决了手部和文字生成的难题。" }
    ],
    principles: {
      title: "潜在扩散模型 (Latent Diffusion) 与 DiT",
      content: "视觉生成已从像素计算演进至潜在空间。2026 年的最新模型采用 Diffusion Transformer (DiT) 架构，能像人类一样理解空间构图，支持秒级的高保真原生文字排版。"
    },
    deepDive: {
      steps: [
        { title: "潜空间压缩", desc: "将高清图片压缩至特征空间进行运算，极大节省显存。" },
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
      { id: "i-mj", name: "Midjourney", logo: <Palette className="w-6 h-6 text-slate-800" />, origin: "独立团队", desc: "审美天花板", models: [
        { name: "V7 / V6.1", type: "艺术基座", status: "闭源", specs: { context: "极致画质", params: "专有", cost: "订阅" }, features: ["艺术大师", "风格一致"], suitability: "高端创意设计。" }
      ]},
      { id: "i-bfl", name: "BFL (Flux)", logo: <Wand2 className="w-6 h-6 text-cyan-600" />, origin: "欧洲力量", desc: "开源绘图新皇", models: [
        { name: "FLUX 2 Pro / Dev", type: "DiT旗舰", status: "开源", specs: { context: "原生4K", params: "12B+", cost: "低" }, features: ["文字拼写准", "手部不崩"], suitability: "专业微调首选。" }
      ]},
      { id: "i-adobe", name: "Adobe", logo: <PenTool className="w-6 h-6 text-red-500" />, origin: "设计巨头", desc: "版权安全首选", models: [
        { name: "Firefly 4", type: "商用引擎", status: "闭源", specs: { context: "PS无缝", params: "未知", cost: "订阅" }, features: ["绝对版权安全", "矢量生成"], suitability: "商业合规设计。" }
      ]},
      { id: "i-google", name: "Google (Imagen)", logo: <Zap className="w-6 h-6 text-blue-500" />, origin: "硅谷巨头", desc: "语义理解之王", models: [
        { name: "Imagen 3 / 4", type: "视觉基座", status: "闭源", specs: { context: "极高语义", params: "未知", cost: "API" }, features: ["听话度第一", "摄影感"], suitability: "长文字指令作图。" }
      ]},
      { id: "i-tencent", name: "腾讯混元", logo: <Component className="w-6 h-6 text-blue-500" />, origin: "国产大厂", desc: "国风专家", models: [
        { name: "Hunyuan-DiT", type: "中文原生", status: "开源", specs: { context: "高清", params: "1.5B", cost: "免费" }, features: ["最懂中文", "汉字直出"], suitability: "国风营销素材。" }
      ]}
    ]
  },
  {
    id: "audio",
    name: "音频与音乐",
    icon: <Music className="w-5 h-5" />,
    color: "purple",
    stats: { voice: 96, music: 90, speed: 85 },
    history: [
      { year: "2016", title: "WaveNet", desc: "Google 发布，首次实现神经网络对音频波形的精准建模。" },
      { year: "2023", title: "零样本克隆", desc: "只需 3 秒参考音频即可完美复刻人类音色。" },
      { year: "2024", title: "Suno V4 革命", desc: "AI 音乐在音质、旋律、编曲上达到商业流行乐水准。" },
      { year: "2025", title: "全原生流式对话", desc: "语音直连不再依赖文字中转，实现超自然交互。" }
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
        open: "隐私安全、可定制各种方言 (CosyVoice, ChatTTS, FishSpeech)",
        closed: "商业质感、渲染极速 (ElevenLabs, Suno, Udio, MiniMax)"
      }
    },
    vendors: [
      { id: "a-11labs", name: "ElevenLabs", logo: <Mic2 className="w-6 h-6 text-purple-600" />, origin: "硅谷独角兽", desc: "全球配音标杆", models: [
        { name: "Multilingual V3", type: "拟人TTS", status: "闭源", specs: { context: "极低延迟", params: "专有", cost: "高" }, features: ["顶级情绪", "零样本克隆"], suitability: "专业出海配音。" }
      ]},
      { id: "a-suno", name: "Suno", logo: <Sparkles className="w-6 h-6 text-pink-500" />, origin: "独立团队", desc: "流行乐之皇", models: [
        { name: "Suno V4", type: "全场景音乐", status: "闭源", specs: { context: "完整单曲", params: "未知", cost: "订阅" }, features: ["旋律感", "歌词匹配"], suitability: "大众创作。" }
      ]},
      { id: "a-minimax", name: "MiniMax (海螺)", logo: <Wand2 className="w-6 h-6 text-blue-500" />, origin: "国产独角兽", desc: "情绪配音专家", models: [
        { name: "abab-audio", type: "拟人语音", status: "闭源", specs: { context: "流式", params: "专有", cost: "低" }, features: ["叹气笑声自然", "中文极佳"], suitability: "情感陪伴与解说。" }
      ]}
    ]
  },
  {
    id: "video",
    name: "视频与仿真",
    icon: <Video className="w-5 h-5" />,
    color: "rose",
    stats: { physics: 92, temporal: 88, quality: 90 },
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
      { id: "v-openai-vid", name: "OpenAI (Sora)", logo: <Globe className="w-6 h-6 text-emerald-500" />, origin: "硅谷巨头", desc: "物理模拟巅峰", models: [
        { name: "Sora", type: "旗舰视频", status: "闭源", specs: { context: "60s", params: "巨型", cost: "高" }, features: ["物理仿真", "多机位"], suitability: "电影级创作。" }
      ]},
      { id: "v-kling-vid", name: "快手 (可灵)", logo: <VideoIcon className="w-6 h-6 text-orange-600" />, origin: "国产大厂", desc: "动态表现第一", models: [
        { name: "Kling 3.0", type: "视频基座", status: "闭源", specs: { context: "超长摄制", params: "大", cost: "中" }, features: ["动作幅度大", "一致性强"], suitability: "短剧、自媒体。" }
      ]},
      { id: "v-runway-vid", name: "Runway", logo: <Triangle className="w-6 h-6 text-indigo-500" />, origin: "硅谷力量", desc: "后期工具专家", models: [
        { name: "Gen-3 Alpha", type: "高保真视频", status: "闭源", specs: { context: "10s", params: "未知", cost: "高" }, features: ["运动笔刷", "精准控制"], suitability: "专业后期视频流。" }
      ]}
    ]
  }
];

export default function App() {
  const [activeDomain, setActiveDomain] = useState(domainsData[0]);
  const [activeVendor, setActiveVendor] = useState(null);

  useEffect(() => {
    setActiveVendor(null);
  }, [activeDomain]);

  // 安全渲染工具
  const renderValue = (val) => {
    if (typeof val === 'object' && val !== null) return '';
    return val;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-indigo-100 flex flex-col">
      
      {/* 顶部 Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter text-slate-900 uppercase">AI NAVIGATOR <span className="text-indigo-600">百科</span></h1>
              <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Global AI Ecosystem • v2026.04</p>
            </div>
          </div>
          <nav className="flex bg-slate-100 p-1 rounded-full border border-slate-200 shadow-inner overflow-x-auto no-scrollbar max-w-full">
            {domainsData.map(d => (
              <button 
                key={d.id}
                onClick={() => setActiveDomain(d)}
                className={`px-6 py-2 rounded-full text-xs font-black transition-all whitespace-nowrap ${activeDomain?.id === d.id ? 'bg-white text-indigo-700 shadow-md scale-105' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {d.name}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* 左侧主百科区 */}
          <div className="lg:col-span-8 space-y-10">
            <section className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-80 h-80 bg-${activeDomain?.color || 'indigo'}-400/5 blur-[100px] -mr-32 -mt-32`}></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div className="flex items-center gap-5">
                    <div className={`p-4 rounded-2xl bg-${activeDomain?.color || 'indigo'}-50 text-${activeDomain?.color || 'indigo'}-600 shadow-sm`}>
                      {activeDomain?.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-slate-900 tracking-tight">{renderValue(activeDomain?.principles?.title)}</h2>
                      <div className="flex gap-2 mt-2">
                        {(activeDomain?.techSpecs || []).map((spec, i) => (
                          <span key={i} className="text-[9px] font-black bg-slate-50 text-slate-400 px-2 py-1 rounded-lg border border-slate-100 uppercase">{renderValue(spec.value)}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg font-medium text-justify mb-10">{renderValue(activeDomain?.principles?.content)}</p>
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                  {Object.entries(activeDomain?.stats || {}).map(([key, val]) => (
                    <div key={key} className="space-y-3">
                      <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span>{key === 'innovation' ? '创新' : key === 'logical' ? '逻辑' : key === 'coding' ? '代码' : key === 'aesthetics' ? '审美' : key === 'speed' ? '生成' : key === 'control' ? '控制' : key === 'voice' ? '人声' : '物理'}</span>
                        <span className="text-slate-900">{renderValue(val)}%</span>
                      </div>
                      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full bg-${activeDomain?.color || 'indigo'}-500 rounded-full transition-all duration-1000 ease-out`} style={{width: `${val}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 技术 Deep Dive */}
            <section className="bg-slate-900 text-slate-100 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="bg-indigo-500 p-2 rounded-xl"><Binary className="w-6 h-6 text-white" /></div>
                    <h3 className="text-2xl font-black tracking-tight">技术演进：全链路深度解析</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      {(activeDomain?.deepDive?.steps || []).map((step, i) => (
                        <div key={i} className="flex gap-6 group">
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/50 flex items-center justify-center text-sm font-black text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-lg">
                              {i + 1}
                            </div>
                            {i !== (activeDomain?.deepDive?.steps?.length || 0) - 1 && <div className="w-0.5 flex-1 bg-slate-800 my-2"></div>}
                          </div>
                          <div>
                            <h4 className="text-base font-black text-white mb-2 group-hover:text-indigo-400 transition-colors">{renderValue(step.title)}</h4>
                            <p className="text-xs text-slate-400 leading-relaxed font-medium">{renderValue(step.desc)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/[0.03] rounded-3xl p-8 border border-white/10 flex flex-col backdrop-blur-sm">
                      <h4 className="text-xl font-black text-white mb-8 flex items-center gap-3"><Share2 className="w-6 h-6 text-indigo-400" /> 生态格局与选型参考</h4>
                      <div className="space-y-8 flex-1">
                        <div className="bg-emerald-500/5 p-6 rounded-2xl border border-emerald-500/20 group hover:bg-emerald-500/10 transition-colors">
                           <div className="text-xs font-black text-emerald-400 uppercase mb-3 flex items-center gap-2"><Rocket className="w-4 h-4"/> 开源生态优势</div>
                           <p className="text-xs text-emerald-100/70 leading-relaxed font-bold">{renderValue(activeDomain?.deepDive?.comparison?.open)}</p>
                        </div>
                        <div className="bg-rose-500/5 p-6 rounded-2xl border border-rose-500/20 group hover:bg-rose-500/10 transition-colors">
                           <div className="text-xs font-black text-rose-400 uppercase mb-3 flex items-center gap-2"><Lock className="w-4 h-4"/> 闭源云端优势</div>
                           <p className="text-xs text-rose-100/70 leading-relaxed font-bold">{renderValue(activeDomain?.deepDive?.comparison?.closed)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
            </section>

            {/* 厂商宇宙矩阵 */}
            <section className="space-y-8">
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-slate-400" />
                  <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">AI 厂商图谱与生态库</h3>
                </div>
                {activeVendor && (
                  <button onClick={() => setActiveVendor(null)} className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 flex items-center gap-2 hover:bg-indigo-100 transition-all">收起详情面板 <ChevronUp className="w-3 h-3" /></button>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {(activeDomain?.vendors || []).map(v => (
                  <button key={v.id} onClick={() => setActiveVendor(v)} className={`flex flex-col items-center justify-center p-5 rounded-[1.5rem] border transition-all duration-300 text-center group relative overflow-hidden h-full ${activeVendor?.id === v.id ? 'bg-white border-indigo-500 shadow-xl shadow-indigo-100/50 scale-105 z-10 ring-4 ring-indigo-50' : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-lg'}`}>
                    <div className="mb-3 transition-transform group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0">{v.logo}</div>
                    <div className="text-xs font-black text-slate-900 leading-tight mb-1">{renderValue(v.name)}</div>
                    <span className="text-[8px] font-black bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded-md uppercase">{renderValue(v.origin)}</span>
                    {activeVendor?.id === v.id && <div className="absolute top-2 right-2"><Star className="w-3 h-3 text-indigo-500 fill-indigo-500" /></div>}
                  </button>
                ))}
                <div className="flex flex-col items-center justify-center p-5 rounded-[1.5rem] border border-dashed border-slate-200 opacity-40 grayscale h-full">
                    <div className="text-[8px] font-black text-slate-400 mb-1 uppercase tracking-widest">More...</div>
                    <div className="text-[10px] font-black text-slate-300 italic">更多厂商录入中</div>
                </div>
              </div>
              {activeVendor && (
                <div className="animate-in fade-in slide-in-from-top-6 duration-500 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  {(activeVendor.models || []).map((m, idx) => (
                    <div key={idx} className="bg-white border-2 border-indigo-50 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all flex flex-col group relative overflow-hidden">
                       <div className="flex justify-between items-start mb-8 relative z-10">
                          <div>
                            <div className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{renderValue(m.name)}</div>
                            <div className="text-[10px] font-black text-slate-400 uppercase mt-1.5 flex items-center gap-1.5 tracking-widest"><Layers className="w-3 h-3"/>{renderValue(m.type)}</div>
                          </div>
                          <div className={`text-[10px] px-3 py-1.5 rounded-xl font-black border shadow-sm ${m.status === '开源' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-rose-50 text-rose-700 border-rose-100'}`}>{renderValue(m.status)}</div>
                       </div>
                       <div className="grid grid-cols-3 gap-3 mb-8">
                          {Object.entries(m.specs || {}).map(([k, v]) => (
                            <div key={k} className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center shadow-inner">
                              <div className="text-[8px] font-black text-slate-400 uppercase mb-1 tracking-tighter">{renderValue(k)}</div>
                              <div className="text-[10px] font-black text-slate-700">{renderValue(v)}</div>
                            </div>
                          ))}
                       </div>
                       <div className="flex flex-wrap gap-2 mb-8">
                          {(m.features || []).map((f, i) => (
                            <span key={i} className="bg-indigo-50 text-indigo-600 text-[10px] px-3 py-1 rounded-full font-bold border border-indigo-100 shadow-sm"># {renderValue(f)}</span>
                          ))}
                       </div>
                       <p className="mt-auto text-xs text-slate-500 italic leading-relaxed pt-6 border-t border-slate-100 font-medium">{renderValue(m.suitability)}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* 右侧边栏: 领域编年史 */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-[3rem] border border-slate-200 p-10 shadow-sm sticky top-28 flex flex-col h-[calc(100vh-140px)]">
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-indigo-50 p-2.5 rounded-2xl text-indigo-600 border border-indigo-100 shadow-sm"><Milestone className="w-5 h-5" /></div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">{activeDomain?.name} 演进史</h3>
                  <p className="text-[10px] font-black text-slate-400 uppercase mt-0.5">Vertical Chronicle</p>
                </div>
              </div>
              <div className="relative border-l-[3px] border-slate-100 ml-4 flex-1 space-y-12 overflow-y-auto pr-4 scrollbar-hide">
                {(activeDomain?.history || []).map((item, index) => (
                  <div key={index} className="relative pl-10 group">
                    <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-white border-[3px] border-slate-200 group-hover:border-indigo-600 group-hover:scale-125 transition-all shadow-sm"></div>
                    <div className="text-[11px] font-black text-indigo-600 mb-1.5 tracking-widest">{renderValue(item.year)}</div>
                    <h4 className="text-base font-black text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{renderValue(item.title)}</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-bold text-justify group-hover:text-slate-700 transition-colors">{renderValue(item.desc)}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* 底部横向滚动: 全局 AI 史诗编年录 */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-20 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="bg-slate-900 p-3 rounded-2xl shadow-xl shadow-slate-200"><Clock className="w-6 h-6 text-white" /></div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight italic">AI 行业宏大编年录</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Universal AI Chronicle • Global Milestones</p>
              </div>
            </div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shadow-inner"><MousePointer2 className="w-3 h-3 text-indigo-500" /> 向右滑动追溯历史</div>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-slate-100 -translate-y-1/2 z-0"></div>
            <div className="flex gap-8 overflow-x-auto pb-10 pt-4 scrollbar-hide snap-x relative z-10 px-4">
              {generalTimeline.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-[300px] snap-center group">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-white border-[4px] border-slate-900 group-hover:border-indigo-600 transition-all shadow-xl mb-8 relative">
                       <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-black text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300">{item.year}</div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-7 shadow-sm hover:shadow-2xl hover:border-indigo-100 transition-all group-hover:-translate-y-3 w-full">
                       <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-lg mb-3 shadow-sm">{item.year}</div>
                       <h4 className="text-lg font-black text-slate-900 mb-3 leading-tight group-hover:text-indigo-700 transition-colors">{renderValue(item.title)}</h4>
                       <p className="text-xs text-slate-500 leading-relaxed font-bold italic text-justify line-clamp-3">{renderValue(item.desc)}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex-shrink-0 w-[100px] flex items-center justify-center"><Infinity className="w-10 h-10 text-slate-100" /></div>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
             {[
               { icon: <ShieldCheck className="text-indigo-500" />, title: "权威数据同步", desc: "TRACKING GLOBAL LAB DATA" },
               { icon: <Globe className="text-emerald-500" />, title: "全球视野同步", desc: "SYNCED WITH SILICON VALLEY & SHENZHEN" },
               { icon: <Infinity className="text-amber-500" />, title: "开源未来共建", desc: "向所有 AI 开源贡献者致敬" }
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-5 p-7 bg-slate-50 border border-slate-200 rounded-[2.5rem] shadow-inner">
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-100">{item.icon}</div>
                  <div><div className="text-sm font-black text-slate-900">{renderValue(item.title)}</div><div className="text-[10px] font-black text-slate-400 mt-0.5 tracking-widest uppercase">{renderValue(item.desc)}</div></div>
               </div>
             ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
