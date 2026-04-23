export const domainsData = [
  {
    id: 'text-code',
    name: '文本与代码生成',
    shortName: '文本生成',
    color: 'indigo',
    icon: 'Terminal',
    principles: {
      title: '从大语言模型 (LLM) 到推理引擎',
      content: '2026 年，大语言模型已经跨越了单纯的“概率文字接龙”，演化为具备系统性长程规划与自我修正能力的“推理引擎”。随着 Test-Time Compute (推理期算力扩展) 范式的普及，模型在输出前会进行深度的思维链演算。数学、复杂逻辑与高阶编程不再是弱项，全自动代码生成、Bug 定位与 Repo 级重构已成为主流开发者的日常标配。',
    },
    techSpecs: [
      { label: 'context', value: '百万级上下文' },
      { label: 'architecture', value: 'MoE 混合专家' },
      { label: 'reasoning', value: 'System 2 思维链' }
    ],
    stats: [
      { id: 'math', label: 'MATH 深度推理准度', value: 96 },
      { id: 'code', label: 'HumanEval 代码生成', value: 94 },
      { id: 'context', label: '百万上下文检索准确率', value: 99 }
    ],
    deepDive: {
      steps: [
        { title: '指令解析与意图对齐', desc: '利用强化学习 (RLHF) 精准理解人类模糊意图，过滤越狱与有毒提示词。' },
        { title: '推理期算力扩展 (Test-Time Compute)', desc: '模型在后台进行自我对抗与多路径推演，生成不可见的内部思考过程。' },
        { title: 'MoE 动态路由', desc: '根据任务复杂度，将 token 分发给对应的专业专家网络，极大降低推理成本。' },
        { title: '输出校验与流式响应', desc: '基于自我反思机制，校验代码语法或逻辑严密性后，进行超低延迟的流式吐字。' }
      ],
      comparison: {
        open: '开源生态在 2026 年迎来了爆发，Llama 4 和 Qwen 3.6 等模型通过极其高效的 MoE 架构，在消费级硬件上实现了逼近顶尖闭源模型 95% 的性能。开源社区主导了微调工具链、端侧部署和垂直行业私有化落地的核心市场。',
        closed: '闭源巨头 (OpenAI, Anthropic, Google) 依然掌控着绝对的“前沿智能 (Frontier Intelligence)”制高点。通过垄断性的算力集群和私域高质量数据壁垒，它们在超长上下文 Agentic 任务、极度复杂的数理推演，以及 Zero-Day 漏洞挖掘等极限场景下保持着难以逾越的代差优势。'
      }
    },
    vendors: [
      {
        id: 'openai',
        name: 'OpenAI',
        origin: '硅谷巨头',
        logo: 'Sparkles',
        logoColor: 'text-emerald-600',
        models: [
          {
            name: 'GPT-5.4',
            type: '前沿多模态大模型',
            status: '闭源',
            features: ['原生多模态', '深度 System-2 推理', '极低延迟语音交互'],
            specs: { 'MMLU': '92.4%', 'Context': '2M Tokens', 'Cost': '高' },
            suitability: '处理最顶级复杂逻辑任务、数学推演和企业级全能 Agent 核心驱动。',
            url: 'https://openai.com'
          },
          {
            name: 'o3',
            type: '专项推理模型',
            status: '闭源',
            features: ['极限数学推理', '深度多步思考', '竞赛级编程'],
            specs: { 'MATH': '96.7%', 'ARC-AGI': '87.5%', 'Cost': '极高' },
            suitability: '面向科学研究和极高难度逻辑链条的专项推理任务。',
            url: 'https://openai.com'
          }
        ]
      },
      {
        id: 'anthropic',
        name: 'Anthropic',
        origin: '硅谷新锐',
        logo: 'Cpu',
        logoColor: 'text-orange-500',
        models: [
          {
            name: 'Claude 4.7 Opus',
            type: '安全对齐前沿模型',
            status: '闭源',
            features: ['顶级编程能力', '长文本极致细节', 'Constitutional AI'],
            specs: { 'HumanEval': '95.1%', 'Context': '1M Tokens', 'Style': '严谨逼真' },
            suitability: '程序员和科研人员的首选，处理超长代码库重构和论文精读。',
            url: 'https://anthropic.com'
          },
          {
            name: 'Claude Sonnet',
            type: '性价比旗舰',
            status: '闭源',
            features: ['速度与智能均衡', '性价比极高', '强大编程'],
            specs: { 'HumanEval': '92%', 'Context': '200K', 'Cost': '中' },
            suitability: '日常开发、文档写作和数据分析的最佳平衡选择。',
            url: 'https://anthropic.com'
          }
        ]
      },
      {
        id: 'google',
        name: 'Google DeepMind',
        origin: '老牌霸主',
        logo: 'Globe',
        logoColor: 'text-blue-500',
        models: [
          {
            name: 'Gemini 3.5 Pro',
            type: '海量上下文模型',
            status: '闭源',
            features: ['原生跨模态', '超大吞吐量', 'Workspace 深度整合'],
            specs: { 'Context': '4M Tokens', 'Video': '原生帧分析', 'Ecosystem': 'GCP' },
            suitability: '适合一次性丢入几十本书或数小时视频进行总结和结构化数据提取。',
            url: 'https://deepmind.google/'
          }
        ]
      },
      {
        id: 'deepseek',
        name: 'DeepSeek 深度求索',
        origin: '国产黑马',
        logo: 'Search',
        logoColor: 'text-blue-600',
        models: [
          {
            name: 'DeepSeek-V4',
            type: '万亿参数 MoE',
            status: '闭源',
            features: ['极致性价比', '国产算力适配', '数理逻辑强悍'],
            specs: { 'MATH': '91.2%', 'Active Params': '~35B', 'Context': '1M Tokens' },
            suitability: '提供极具破坏性定价的顶尖 API 接口，适合大规模高并发的企业级并发调用。',
            url: 'https://deepseek.com'
          },
          {
            name: 'DeepSeek-R1',
            type: '强化学习推理模型',
            status: '开源',
            features: ['思维链透明', '极高上限', '自主搜索优化'],
            specs: { 'Params': '开源权重', 'License': 'MIT', 'Platform': 'HuggingFace' },
            suitability: '开源界最强的纯逻辑推理引擎，适合学术界二次微调和复杂业务场景的本地部署。',
            url: 'https://deepseek.com',
            github: 'https://github.com/deepseek-ai'
          }
        ]
      },
      {
        id: 'alibaba',
        name: 'Alibaba Qwen',
        origin: '国产大厂',
        logo: 'Cloud',
        logoColor: 'text-orange-600',
        models: [
          {
            name: 'Qwen3.6-35B-A3B',
            type: '端侧 MoE 模型',
            status: '开源',
            features: ['多语言通吃', '极低显存占用', '高能效比'],
            specs: { 'MMLU': '83.5%', 'Context': '262K', 'Active Params': '3B' },
            suitability: '2026 年开源界的效率天花板，完美适配消费级显卡，开发者端侧个人 Copilot 的最佳基座。',
            url: 'https://qwenlm.github.io/',
            github: 'https://github.com/QwenLM'
          }
        ]
      },
      {
        id: 'meta',
        name: 'Meta',
        origin: '开源鼻祖',
        logo: 'Infinity',
        logoColor: 'text-blue-500',
        models: [
          {
            name: 'Llama 4 (Scout)',
            type: '开源生态基石',
            status: '开源',
            features: ['千万级上下文', '海量微调生态', '多模态视觉'],
            specs: { 'MMLU': '88.9%', 'Context': '10M Tokens', 'License': 'Llama' },
            suitability: '全世界开发者的出厂默认选项，拥有最完善的部署工具链和社区微调版本。',
            url: 'https://ai.meta.com/llama/',
            github: 'https://github.com/meta-llama'
          }
        ]
      },
      {
        id: 'xai',
        name: 'xAI',
        origin: '马斯克系',
        logo: 'Hash',
        logoColor: 'text-slate-900',
        models: [
          {
            name: 'Grok 3',
            type: '实时网络架构',
            status: '闭源',
            features: ['X 平台实时直连', '超长上下文', '超大训练集群'],
            specs: { 'MMLU': '87.5%', 'Real-time': '实时推文流', 'Context': '256K' },
            suitability: '新闻工作者、金融量化分析师用于追踪全球突发事件与社交情绪的利器。',
            url: 'https://x.ai/'
          }
        ]
      },
      {
        id: 'mistral',
        name: 'Mistral AI',
        origin: '欧洲之光',
        logo: 'Wind',
        logoColor: 'text-orange-500',
        models: [
          {
            name: 'Mistral Large 3',
            type: '欧洲前沿大模型',
            status: '闭源',
            features: ['多语言卓越', '函数调用强悍', '极低延迟'],
            specs: { 'MMLU': '86.8%', 'Context': '128K', 'Languages': '12+' },
            suitability: '欧洲合规要求严格的企业级部署首选，多语言能力突出。',
            url: 'https://mistral.ai/'
          },
          {
            name: 'Mistral Small',
            type: '高效端侧模型',
            status: '开源',
            features: ['极致轻量', '低延迟', '本地友好'],
            specs: { 'Params': '22B', 'License': 'Apache 2.0', 'VRAM': '8GB+' },
            suitability: '边缘设备和隐私敏感场景的开源优选。',
            url: 'https://mistral.ai/',
            github: 'https://github.com/mistralai'
          }
        ]
      },
      {
        id: 'zhipu',
        name: '智谱 AI (GLM)',
        origin: '国产学术派',
        logo: 'GraduationCap',
        logoColor: 'text-blue-500',
        models: [
          {
            name: 'GLM-5',
            type: '中文旗舰大模型',
            status: '闭源',
            features: ['中文理解天花板', '长文档分析', 'Agent 框架'],
            specs: { 'CMMLU': '91.2%', 'Context': '1M Tokens', 'Ecosystem': 'BigModel' },
            suitability: '中文企业级应用的核心引擎，金融、法律、政务等垂直领域深度适配。',
            url: 'https://zhipuai.cn/'
          }
        ]
      }
    ],
    history: [
      { year: '2017', title: 'Transformer 诞生', desc: 'Google 发表《Attention is All You Need》，自注意力机制彻底取代 RNN，奠定当代大模型底层架构。' },
      { year: '2018', title: 'BERT 与预训练革命', desc: 'Google 发布 BERT，证明了大规模预训练 + 微调的范式可以横扫 NLP 各个子任务。' },
      { year: '2020', title: 'GPT-3 问世', desc: 'OpenAI 推出 1750 亿参数的 GPT-3，首次证明了暴力美学 (Scaling Law) 在涌现能力上的奇迹。' },
      { year: '2022', title: 'ChatGPT 引爆全球', desc: '基于 RLHF 微调的 ChatGPT 发布，开启生成式 AI 元年。' },
      { year: '2023', title: 'GPT-4 与开源追赶', desc: 'GPT-4 多模态能力震撼发布；同年 Llama 2 开源，引发全球开源大模型浪潮。' },
      { year: '2025', title: '推理期算力时代', desc: '模型将算力倾斜至 Test-Time (推理期)，引发了思维链自我对弈的效率革命。' },
      { year: '2026', title: '混合前沿崛起', desc: 'MoE 架构与搜索/代码环境深度绑定，大模型正式从文本生成器蜕变为操作系统内核。' }
    ]
  },
  {
    id: 'art-vision',
    name: '视觉与多模态',
    shortName: '视觉多模态',
    color: 'cyan',
    icon: 'ImageIcon',
    principles: {
      title: '像素级的上帝之手',
      content: '2026 年，AI 生成视觉早已超越了“画作”的范畴，进入了物理法则模拟与实时渲染的阶段。扩散模型 (Diffusion) 与自回归模型走向深度融合。我们不仅能一次性成图，还能通过精准的 ControlNet、语义图层和 3D 一致性约束，实现工业级、可复现的商业广告直出，甚至实时每秒 60 帧的高清重绘。',
    },
    techSpecs: [
      { label: 'generation', value: '实时毫秒级出图' },
      { label: 'control', value: '骨骼与光影精准约束' },
      { label: 'fidelity', value: '4K 原生一致性' }
    ],
    stats: [
      { id: 'realism', label: '照片级逼真度 (FID)', value: 98 },
      { id: 'prompt', label: '复杂 Prompt 遵循率', value: 92 },
      { id: 'speed', label: '端侧生成帧率 (fps)', value: 45 }
    ],
    deepDive: {
      steps: [
        { title: '文本特征极速提取', desc: '由高度优化的端侧 LLM 解析复杂的长文本画面描述，精确分离主体、环境光、材质与镜头参数。' },
        { title: '空间结构约束布局', desc: '利用 ControlNet 在隐空间中预生成三维几何骨架与深度图，确保后续生成的物理透视完全准确。' },
        { title: '混合扩散解码去噪', desc: '在极少的步数 (1-4步) 内，通过蒸馏后的 DiT (Diffusion Transformer) 模型剥离噪点，显现高清像素。' },
        { title: '一致性超分与实时重绘', desc: '进行无损级别的 4K 超分辨率放大；或在本地进行几十毫秒延迟的摄像头画笔实时渲染叠加。' }
      ],
      comparison: {
        open: 'Stable Diffusion 3.5 及其庞大的微调社区主宰了创作者的本地工作流。开源的无敌优势在于极致的“可控性”，艺术家可以使用 ComfyUI 把控每一束光线的折射。',
        closed: 'Midjourney V7 与 Krea AI 等闭源商业产品则是“开箱即用”的美学巅峰。它们垄断了非专业设计人员和创意发散初期的市场，随手一敲就能直出好莱坞级别的美术资产。'
      }
    },
    vendors: [
      {
        id: 'midjourney',
        name: 'Midjourney',
        origin: '独立实验室',
        logo: 'Palette',
        logoColor: 'text-indigo-600',
        models: [
          {
            name: 'Midjourney V7',
            type: '商业美学模型',
            status: '闭源',
            features: ['绝佳艺术感', '极致材质光影', '角色连续性强'],
            specs: { 'Quality': 'S+', 'Resolution': '原生超清', 'UI': '网页版/Discord' },
            suitability: '创意总监、插画师和广告行业的必备武器，最容易生成令人 WOW 的神级视觉图。',
            url: 'https://midjourney.com'
          }
        ]
      },
      {
        id: 'stability',
        name: 'Stability AI',
        origin: '开源先驱',
        logo: 'ImagePlus',
        logoColor: 'text-purple-600',
        models: [
          {
            name: 'Stable Diffusion 3.5',
            type: '可控生成基座',
            status: '开源',
            features: ['极强排版控制', 'DiT 架构', 'ComfyUI 标配'],
            specs: { 'Params': '2B-8B', 'VRAM Req': '12GB+', 'License': '开放商业' },
            suitability: '专业 AI 绘画师和游戏工作室的本地基石，适合建立高度定制化的自动化产图流水线。',
            url: 'https://stability.ai',
            github: 'https://github.com/Stability-AI'
          }
        ]
      },
      {
        id: 'krea',
        name: 'Krea AI',
        origin: '实时渲染新锐',
        logo: 'Wand2',
        logoColor: 'text-rose-500',
        models: [
          {
            name: 'Krea Real-time Engine',
            type: '超低延迟视觉引擎',
            status: '闭源',
            features: ['毫秒级实时生成', 'iPad 画笔联动', '无损极致放大'],
            specs: { 'Latency': '<50ms', 'Upscale': '8K Native', 'Workflow': 'Interactive' },
            suitability: '概念设计师在脑暴初期的画板伴侣，你画一根火柴，它能瞬间给你一棵燃烧的世界树。',
            url: 'https://www.krea.ai/'
          }
        ]
      },
      {
        id: 'flux',
        name: 'FLUX (Black Forest)',
        origin: '开源黑马',
        logo: 'Flame',
        logoColor: 'text-orange-500',
        models: [
          {
            name: 'FLUX.1 Pro',
            type: '下一代开源基座',
            status: '开源',
            features: ['SD 作者新作', '极强文字渲染', '超越 SDXL'],
            specs: { 'Params': '12B', 'Resolution': '原生2K', 'License': 'Apache 2.0' },
            suitability: '被视为 Stable Diffusion 的精神续作，以更强的文字理解和排版能力重新定义开源生图。',
            url: 'https://blackforestlabs.ai/',
            github: 'https://github.com/black-forest-labs/flux'
          }
        ]
      },
      {
        id: 'google-imagen',
        name: 'Google Imagen',
        origin: '搜索巨头',
        logo: 'Sparkle',
        logoColor: 'text-blue-500',
        models: [
          {
            name: 'Imagen 3',
            type: '搜索级图像引擎',
            status: '闭源',
            features: ['极强语义理解', 'Google 生态整合', '安全过滤'],
            specs: { 'Quality': 'S+', 'Safety': '极高', 'Platform': 'Vertex AI' },
            suitability: 'Google Cloud 和 Workspace 用户的原生图像生成引擎。',
            url: 'https://deepmind.google/technologies/imagen-3/'
          }
        ]
      }
    ],
    history: [
      { year: '2022', title: 'AI 绘画破圈', desc: 'Midjourney V3 和 Stable Diffusion 1.5 同年爆发，AI 生成图像震撼全球创意圈。' },
      { year: '2023', title: '可控性革命', desc: 'ControlNet 论文发表，AI 绘画彻底摆脱“抽卡”属性，实现了动作、线稿和深度的精准约束。' },
      { year: '2025', title: '实时流式生成', desc: '端侧推理速度突破，鼠标涂鸦实时转化为照片级高精度图像成为常态。' },
      { year: '2026', title: '3D 隐空间打通', desc: '原本生成单张图片的模型可以一键渲染整个视角的 3D 网格与法线贴图，游戏资产工业被彻底改写。' }
    ]
  },
  {
    id: 'video-motion',
    name: '视频与动态',
    shortName: '视频动态',
    color: 'rose',
    icon: 'Video',
    principles: {
      title: '物理世界的时空切片',
      content: '视频生成模型已经超越了早期的“逐帧变形”阶段，开始建立起对物理法则、重力、碰撞和光影流动的内在直觉。目前的模型可以保持极端长期的角色一致性与运镜平滑度，并且支持精准的六轴镜头控制。',
    },
    techSpecs: [
      { label: 'duration', value: '分钟级连贯生成' },
      { label: 'camera', value: '六轴运镜控制' },
      { label: 'physics', value: '时空物理一致性' }
    ],
    stats: [
      { id: 'consistency', label: '角色时空一致性', value: 96 },
      { id: 'motion', label: '动作幅度与连贯度', value: 93 },
      { id: 'quality', label: '原生分辨率与画质', value: 95 }
    ],
    deepDive: {
      steps: [
        { title: '多模态 Prompt 理解', desc: '深度解析文本提示与分镜参考图，设定镜头语言与主体动作。' },
        { title: '时空隐变量建模', desc: '在隐空间中生成起始帧，并计算随时间演化的运动轨迹与形变。' },
        { title: '联合扩散解码', desc: '在时间轴和空间轴上同时进行联合降噪，确保运动的平滑过渡。' },
        { title: '时序超分增强', desc: '提升最终视频的分辨率与帧率，输出达到广播级的流畅视频资产。' }
      ],
      comparison: {
        open: '开源社区如 Open-Sora 等通过聚合全球算力与数据，逐步追赶闭源模型，为主流开发者提供了大量可控的本地视频修改方案与节点化工作流。',
        closed: 'Sora、Runway 和 Kling 等闭源霸主通过暴力的算力与非公开的高质量视频清洗数据，牢牢占据了“物理级真实”与“原生时长”的高地，成为影视工业的生产力标配。'
      }
    },
    vendors: [
      {
        id: 'openai-video',
        name: 'OpenAI Sora',
        origin: '硅谷巨头',
        logo: 'Video',
        logoColor: 'text-rose-500',
        models: [
          {
            name: 'Sora 1.5',
            type: '物理世界模拟器',
            status: '闭源',
            features: ['极强物理直觉', '超长连贯视频', '原生多视角'],
            specs: { 'Duration': '长达几分钟', 'Fidelity': 'S+', 'Aspect': '多比例' },
            suitability: '电影级特效、概念宣传片的首选，几乎不需要后期修饰的魔法级视频生成工具。',
            url: 'https://openai.com/sora'
          }
        ]
      },
      {
        id: 'runway',
        name: 'Runway',
        origin: '专业引擎',
        logo: 'Film',
        logoColor: 'text-indigo-500',
        models: [
          {
            name: 'Gen-3 Alpha',
            type: '高保真动作模型',
            status: '闭源',
            features: ['精准相机控制', '高动态范围', '专业级 UI'],
            specs: { 'Speed': '极快', 'Control': '高', 'Platform': 'Web' },
            suitability: '数字艺术家和影视后期的首选，提供了极强的主体笔刷控制和运镜参数调节。',
            url: 'https://runwayml.com/'
          }
        ]
      },
      {
        id: 'kling',
        name: 'Kling 可灵',
        origin: '快手阵营',
        logo: 'Eye',
        logoColor: 'text-emerald-500',
        models: [
          {
            name: 'Kling 2.0',
            type: '高维视频架构',
            status: '闭源',
            features: ['复杂人物互动', '超逼真表情解析', '中文提示友好'],
            specs: { 'Resolution': '1080P/60FPS', 'Format': '3D VAE', 'Scale': '极高' },
            suitability: '自媒体创作者、短剧制作团队的大杀器，极其擅长处理人类肢体交互和微表情变化。',
            url: 'https://klingai.kuaishou.com/'
          }
        ]
      },
      {
        id: 'pika',
        name: 'Pika',
        origin: '硅谷新锐',
        logo: 'Clapperboard',
        logoColor: 'text-purple-500',
        models: [
          {
            name: 'Pika 2.0',
            type: '创意视频生成',
            status: '闭源',
            features: ['极简易用', '特效模板丰富', '社交媒体优化'],
            specs: { 'Duration': '10-30s', 'UI': '极简', 'Export': '多格式' },
            suitability: '面向社交媒体创作者的最友好视频生成工具，学习成本极低。',
            url: 'https://pika.art/'
          }
        ]
      },
      {
        id: 'luma',
        name: 'Luma AI',
        origin: '3D 视觉先驱',
        logo: 'Box',
        logoColor: 'text-cyan-500',
        models: [
          {
            name: 'Dream Machine',
            type: '3D 感知视频模型',
            status: '闭源',
            features: ['极强 3D 一致性', '物理真实运动', '光线追踪'],
            specs: { 'Physics': '高', '3D': '原生感知', 'Speed': '快速' },
            suitability: '需要三维空间感知和物理真实运动的视频创作场景。',
            url: 'https://lumalabs.ai/'
          }
        ]
      }
    ],
    history: [
      { year: '2023', title: '视频生成起步', desc: 'Gen-2 发布，AI 视频开始摆脱完全随机的噪点，勉强能够生成数秒有意义的画面。' },
      { year: '2024', title: 'Sora 的降维打击', desc: 'OpenAI 发布 Sora，展现了前所未有的时空一致性和物理规律理解，震惊了好莱坞。' },
      { year: '2025', title: '可控运镜成熟', desc: '各大模型标配精准的镜头控制与局部运动笔刷，AI 视频正式进入工业流水线。' },
      { year: '2026', title: '实时多流互动', desc: 'AI 视频不再是单向生成，可以通过语音和手柄实时输入，无缝改变正在生成的赛车或剧情走向。' }
    ]
  },
  {
    id: 'audio-speech',
    name: '声音与音频',
    shortName: '声音音频',
    color: 'purple',
    icon: 'Music',
    principles: {
      title: '零损耗的数字克隆与创作',
      content: 'AI 语音和音乐生成技术在 2026 年已经达到了“真假难辨”的巅峰。不仅可以零样本精准克隆任何人的音色和情感，更能基于文字描述，直接合成具备完整配器、唱腔和混音质感的录音室级别音乐。',
    },
    techSpecs: [
      { label: 'zero-shot', value: '3秒语音即刻克隆' },
      { label: 'emotion', value: '多模态情感注入' },
      { label: 'fidelity', value: '44.1kHz 音质' }
    ],
    stats: [
      { id: 'clone', label: '音色还原逼真度', value: 99 },
      { id: 'music', label: '乐理与编曲合理性', value: 94 },
      { id: 'latency', label: '实时双工延迟', value: 120, unit: 'ms' }
    ],
    deepDive: {
      steps: [
        { title: '声学特征提取', desc: '利用深度神经网络对参考音频进行特征解耦，分离出音色、音高、发音习惯等底层参数。' },
        { title: '多维文本到语音映射', desc: '融合上下文语义与情感标记，通过流匹配架构预测声音帧序列。' },
        { title: '高保真声码器合成', desc: '使用最先进的神经声码器将频谱图极速转换为波形，消除机械音。' },
        { title: '实时混音与后处理', desc: '音乐生成时，对人声与多轨乐器进行自动相位对齐、EQ 均衡与动态压缩混音。' }
      ],
      comparison: {
        open: '像 Fish Audio 和 VITS 这样的开源架构大幅降低了语音合成的门槛。个人开发者只需利用消费级显卡，就能在本地部署高度定制化的虚拟人声和全双工语音助手。',
        closed: 'ElevenLabs 和 Suno 代表了闭源 API 的巅峰体验。它们提供了海量的高质量音色库和极高的情感张力表现，垄断了有声书、播客配音及个人音乐创作的消费端市场。'
      }
    },
    vendors: [
      {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        origin: '语音巨头',
        logo: 'Mic',
        logoColor: 'text-purple-600',
        models: [
          {
            name: 'Eleven Multilingual V3',
            type: '情感语音合成',
            status: '闭源',
            features: ['真假难辨音质', '跨语言保留音色', '情绪极富感染力'],
            specs: { 'Latency': '<200ms', 'Languages': '30+', 'Quality': 'S+' },
            suitability: '全球数以百万计有声书、短视频解说和播客的最核心生产力工具。',
            url: 'https://elevenlabs.io/'
          }
        ]
      },
      {
        id: 'suno',
        name: 'Suno AI',
        origin: '音乐生成',
        logo: 'Headphones',
        logoColor: 'text-orange-500',
        models: [
          {
            name: 'Suno V4',
            type: '全能音乐人模型',
            status: '闭源',
            features: ['极强旋律感', '多种曲风精通', '词曲编混一体'],
            specs: { 'Length': '最长5分钟', 'Fidelity': 'Radio Quality' },
            suitability: '非专业音乐爱好者的造梦神器，输入几句歌词即可获得极具情感张力的打榜流行乐。',
            url: 'https://suno.com/'
          }
        ]
      },
      {
        id: 'udio',
        name: 'Udio',
        origin: '音乐生成',
        logo: 'Disc',
        logoColor: 'text-pink-500',
        models: [
          {
            name: 'Udio Engine',
            type: '超高保真音乐',
            status: '闭源',
            features: ['极高音频解析度', '复杂编曲结构', '极强人声质感'],
            specs: { 'Vocal': 'S++', 'Mastering': 'Studio Grade' },
            suitability: '对于音质和段落结构要求更严格的半专业音乐创作者。',
            url: 'https://www.udio.com/'
          }
        ]
      },
      {
        id: 'fish-audio',
        name: 'Fish Audio',
        origin: '开源之光',
        logo: 'Volume2',
        logoColor: 'text-cyan-500',
        models: [
          {
            name: 'Fish Speech',
            type: '零样本语音克隆',
            status: '开源',
            features: ['极致轻量级', '极简部署', '全中文友好'],
            specs: { 'Clone Need': '10秒音频', 'License': 'CC-BY-NC', 'Platform': 'Local' },
            suitability: '独立开发者构建 VTuber、个人语音助手、二次元游戏全配音的首选开源库。',
            url: 'https://fish.audio/',
            github: 'https://github.com/fishaudio/fish-speech'
          }
        ]
      }
    ],
    history: [
      { year: '2021', title: '传统 TTS 瓶颈期', desc: '虽然声音可以被机器读出，但不可避免地带有“棒读”的机械感，无法商用配音。' },
      { year: '2023', title: '情感大爆发', desc: 'ElevenLabs 一战封神，AI 首次能够精确表达出笑声、哽咽、愤怒等复杂人类情感。' },
      { year: '2024', title: '人人皆是音乐家', desc: 'Suno 和 Udio 相继爆火，让完全不懂乐理的大众跨越了从文字到完整音乐的鸿沟。' },
      { year: '2025', title: '全双工低延迟', desc: '语音合成的延迟被打入百毫秒级，支持随时打断的原生语音 AI 成为智能硬件标配。' }
    ]
  },
  {
    id: 'embodied-agent',
    name: '具身智能与 Agent',
    shortName: '具身 Agent',
    color: 'emerald',
    icon: 'Bot',
    principles: {
      title: '让 AI 长出双眼与双手',
      content: '2026 年是 Agentic AI 和具身智能大规模落地的一年。大模型不再被困在屏幕后的聊天窗口中。通过视觉-语言-动作模型 (VLA)，AI 能够理解现实物理世界的常识，学会使用人类的软件工具、阅读网页文档，甚至驱动工厂流水线上的机械臂与家用服务机器人，真正实现“感知-决策-行动”的自主闭环。',
    },
    techSpecs: [
      { label: 'autonomy', value: '长程任务自治' },
      { label: 'tools', value: '全链路 API 调用' },
      { label: 'physics', value: '空间物理直觉' }
    ],
    stats: [
      { id: 'success', label: '复杂工作流成功率', value: 89 },
      { id: 'planning', label: '多步逻辑规划能力', value: 92 },
      { id: 'vision', label: '物理空间识别率', value: 95 }
    ],
    deepDive: {
      steps: [
        { title: '多模态感知输入', desc: 'Agent 通过屏幕截图、摄像头视频流实时获取当前环境的细粒度状态。' },
        { title: '长期记忆检索与反思', desc: '提取向量数据库中的过往经验，结合当前目标，在内心生成庞大的决策树进行预演。' },
        { title: '宏观规划与微观动作分解', desc: '将高维目标分解为打开浏览器、搜索、对比、点击下单等微元动作。' },
        { title: '实体驱动与工具调用', desc: '精准生成 GUI 鼠标轨迹或控制伺服电机的扭矩，并在发生错误时自动回溯与纠错。' }
      ],
      comparison: {
        open: '开源框架 (如 AutoGPT, LangChain) 提供了灵活的脚手架，让开发者可以为细分领域定制高度垂直的 Agent 蜂群。',
        closed: '商业公司不仅在打造云端的“超能助理”(接管微信、邮件)，更在硬件层 (如 Tesla, Figure) 打造百万美元级的人形机器人底座。'
      }
    },
    vendors: [
      {
        id: 'figure-ai',
        name: 'Figure AI',
        origin: '机器人独角兽',
        logo: 'User',
        logoColor: 'text-slate-600',
        models: [
          {
            name: 'Figure 02',
            type: '双足人形机器人',
            status: '闭源',
            features: ['VLM 驱动闭环', '精细手指操作', '全天候生产力'],
            specs: { 'Battery': '高续航', 'Brain': 'OpenAI 深度定制' },
            suitability: '仓储物流、汽车流水线等环境中最先进的高端劳动力替代方案。',
            url: 'https://figure.ai/'
          }
        ]
      },
      {
        id: 'tesla',
        name: 'Tesla',
        origin: '制造业巨头',
        logo: 'Car',
        logoColor: 'text-red-600',
        models: [
          {
            name: 'Optimus Gen 3',
            type: '量产型人形机器人',
            status: '闭源',
            features: ['极致量产降本', 'FSD 纯视觉复用', '超强工业耐用'],
            specs: { 'Cost': '<$20,000', 'Actuators': '特斯拉自研' },
            suitability: '以极其恐怖的低成本和规模化生产能力，率先进入千家万户或大型工厂的通用实体。',
            url: 'https://www.tesla.com/AI'
          }
        ]
      },
      {
        id: 'moonshot',
        name: 'Moonshot 月之暗面',
        origin: '国产新锐',
        logo: 'Moon',
        logoColor: 'text-slate-800',
        models: [
          {
            name: 'Kimi K2.5',
            type: '系统级 Agent 引擎',
            status: '闭源',
            features: ['极长上下文', '全自动资料挖掘', '复杂任务拆解'],
            specs: { 'Context': '超2M Tokens', 'Speed': '极快' },
            suitability: '国内最好的文字工作、调研分析、甚至轻量代码辅助的超级助理。',
            url: 'https://kimi.moonshot.cn/'
          }
        ]
      },
      {
        id: 'unitree',
        name: 'Unitree 宇树',
        origin: '国产机器人',
        logo: 'Dog',
        logoColor: 'text-amber-600',
        models: [
          {
            name: 'Unitree G1',
            type: '极致性价比人形机器人',
            status: '闭源',
            features: ['超低价格', '强动态平衡', '开发者友好'],
            specs: { 'Cost': '<$16,000', 'DOF': '43 自由度', 'SDK': '开放' },
            suitability: '以极具破坏性的价格和开放的 SDK 生态，成为教育与研究领域最活跃的人形机器人平台。',
            url: 'https://www.unitree.com/'
          }
        ]
      }
    ],
    history: [
      { year: '2023', title: 'Agent 概念引爆', desc: 'AutoGPT 爆火，让全网第一次看到了 AI 能够自己定计划、自己修正的震撼雏形。' },
      { year: '2024', title: 'OpenAI 牵手实体', desc: 'Figure 01 接入 ChatGPT 大脑，机器人首次在视频中边干活边流利地与人类聊天。' },
      { year: '2025', title: '计算机使用能力 (CUA)', desc: 'AI 正式突破 API 的限制，学会了像人一样接管系统 GUI 与键鼠。' },
      { year: '2026', title: '实体具身量产', desc: '人形机器人成本大幅下降，真正意义上的数字大脑掌控物理躯体开始进入大型工厂车间。' }
    ]
  },
  {
    id: 'ai-hardware',
    name: '算力与硬件基石',
    shortName: '硬件算力',
    color: 'amber',
    icon: 'Cpu',
    principles: {
      title: '吞噬世界的硅基心脏',
      content: '大模型竞争的尽头是能源与算力的竞争。到了 2026 年，算力集群不再只是几百张显卡的拼接，而是十万张卡通过天量带宽直连的超级计算机系统。同时，专为大模型“推理期”设计的非冯·诺依曼架构芯片 (如 LPU)、以及为了突破封锁而崛起的国产 NPU 生态，构成了整个 AI 世界最底层的坚固基石。',
    },
    techSpecs: [
      { label: 'interconnect', value: 'TB级片间互联' },
      { label: 'memory', value: 'HBM3e 内存墙突破' },
      { label: 'efficiency', value: '极限 TFLOPS 能效' }
    ],
    stats: [
      { id: 'bandwidth', label: '显存带宽峰值利用率', value: 92 },
      { id: 'cluster', label: '万卡集群线性加速比', value: 98 },
      { id: 'pue', label: '液冷数据中心 PUE', value: 95, display: '1.08' }
    ],
    deepDive: {
      steps: [
        { title: '先进封装与芯粒拼装', desc: '绕开物理良率瓶颈，采用 2.5D/3D 封装技术 (如 CoWoS) 将多个计算 Die 与 HBM 显存封存在一起。' },
        { title: '打破内存墙 (Memory Wall)', desc: '在超大模型推理时，计算速度往往被显存读取速度拖累。HBM3e 及其后继者通过超高频位宽强行拉满带宽。' },
        { title: '超算互联网络 (NVLink/HCCS)', desc: '利用光互联和特制交换机，让一整个机柜的几十张 GPU 像一张巨无霸 GPU 一样无缝共享内存池。' },
        { title: '低精度量化与硬件级加速', desc: '在硅片内部直接固化 FP8 甚至 FP4 (4-bit) 格式的稀疏矩阵乘法加速单元。' }
      ],
      comparison: {
        open: '硬件的“开源”更多体现在开放指令集与中间件生态上（如 AMD ROCm 社区的追赶，或 OpenAI 推动的 Triton 语言），试图打破 CUDA 在底层的绝对垄断。',
        closed: 'Nvidia 是这个时代的“卖铲人”，不仅卖芯片，更卖封闭的一体化机柜与专属网络协议，以最省心的整体解决方案收割全球科技巨头的基建预算。'
      }
    },
    vendors: [
      {
        id: 'nvidia',
        name: 'NVIDIA',
        origin: '绝对霸主',
        logo: 'Microchip',
        logoColor: 'text-emerald-500',
        models: [
          {
            name: 'Blackwell B200',
            type: '超大算力中心核心',
            status: '闭源',
            features: ['第二代 Transformer 引擎', '双 Die 巨兽', '8 TB/s 带宽'],
            specs: { 'VRAM': '192GB HBM3e', 'Transistors': '2080亿', 'Process': 'TSMC 4NP' },
            suitability: '训练诸如 GPT-5、Claude 4 等前沿大模型的唯一指定“核武器”。',
            url: 'https://www.nvidia.com/'
          }
        ]
      },
      {
        id: 'groq',
        name: 'Groq',
        origin: '推理异类',
        logo: 'Zap',
        logoColor: 'text-amber-500',
        models: [
          {
            name: 'Groq LPU',
            type: '极限低延迟推理',
            status: '闭源',
            features: ['无传统内存', 'SRAM 架构', '确定性执行'],
            specs: { 'Speed': '数百 Token/s', 'Latency': '极致', 'Design': 'TSP' },
            suitability: '对延迟要求苛刻的实时语音流对话、高频交易等大模型输出端应用。',
            url: 'https://groq.com/'
          }
        ]
      },
      {
        id: 'huawei-ascend',
        name: 'Huawei Ascend 华为昇腾',
        origin: '国产算力之光',
        logo: 'Radio',
        logoColor: 'text-red-600',
        models: [
          {
            name: 'Ascend 910C',
            type: '全场景 AI 算力',
            status: '闭源',
            features: ['自主可控', 'HCCS 高速互联', '异构计算'],
            specs: { 'VRAM': '96GB HBM2e', 'Ecosystem': 'MindSpore', 'Scale': '万卡级' },
            suitability: '在受限环境下，支撑中国头部大模型企业 (如深度求索、智谱) 冲击前沿的基石。',
            url: 'https://e.huawei.com/cn/products/computing/ascend'
          }
        ]
      },
      {
        id: 'amd',
        name: 'AMD',
        origin: '绿队追击手',
        logo: 'Cpu',
        logoColor: 'text-red-500',
        models: [
          {
            name: 'Instinct MI300X',
            type: '大内存推理加速卡',
            status: '闭源',
            features: ['192GB HBM3', 'ROCm 生态', '极高性价比'],
            specs: { 'VRAM': '192GB HBM3', 'Bandwidth': '5.3 TB/s', 'Process': '5nm' },
            suitability: '以更高显存容量和更低价格挑战 NVIDIA 在推理市场的地位。',
            url: 'https://www.amd.com/en/products/accelerators/instinct/mi300x.html'
          }
        ]
      }
    ],
    history: [
      { year: '2020', title: 'A100 统一架构', desc: 'Ampere 架构发布，统一了训练与推理硬件，奠定了 Nvidia 的垄断开端。' },
      { year: '2023', title: 'H100 一卡难求', desc: 'ChatGPT 爆火导致 H100 成为地缘战略物资，硅谷科技巨头展开疯狂的算力军备竞赛。' },
      { year: '2024', title: '国产算力觉醒', desc: '外部制裁倒逼中国芯片产业链加速跑，昇腾 910B/C 规模化替代进程全面启动。' },
      { year: '2026', title: '专用架构爆发', desc: '随着大模型架构稳定，各类针对 MoE 和推理期加速特化的非冯架构芯片(LPU/NPU)开始抢占市场。' }
    ]
  }
];

export const generalTimeline = [
  { year: '1950', title: '图灵测试', desc: '艾伦·图灵发表《计算机器与智能》，提出了著名的图灵测试，成为衡量人工智能的最经典哲学命题。' },
  { year: '1966', title: '早期的幻觉: ELIZA', desc: '世界上第一个聊天机器人诞生，仅靠简单的模式匹配，却让许多人误以为机器产生了共情与人类情感。' },
  { year: '1997', title: '深蓝的胜利', desc: 'IBM 的超级计算机“深蓝”击败国际象棋世界冠军卡斯帕罗夫，象征着基于暴力算力的符号逻辑取得历史性突破。' },
  { year: '2012', title: '深度学习大爆炸', desc: 'AlexNet 在 ImageNet 图像识别大赛中以碾压优势夺冠，GPU 加速的深度神经网络(CNN) 时代正式开启。' },
  { year: '2017', title: 'Transformer 诞生', desc: '谷歌团队发表《Attention is All You Need》。原本为翻译而生的自注意力机制，无意间解锁了统治世界的大模型底层密码。' },
  { year: '2020', title: '暴力美学的奇迹', desc: 'OpenAI 发布 1750 亿参数的 GPT-3，证明了只要数据和算力足够大，模型就会涌现出小模型不具备的惊人能力。' },
  { year: '2022', title: 'ChatGPT 时刻', desc: '2022 年末 ChatGPT 发布，仅仅 5 天破百万用户。AI 从实验室走向千家万户，彻底颠覆了人类获取信息和工作的方式。' },
  { year: '2024', title: '多模态与世界模拟器', desc: 'GPT-4o 实现了极低延迟的原生语音对话；Sora 仅靠文本指令便能生成完全符合物理常识的高清视频，震撼视觉产业。' },
  { year: '2025', title: '推理期算力革命', desc: '以 DeepSeek R1 为代表的模型崛起，行业重心从“预训练狂砸算力”转向“推理期让 AI 深度思考”，复杂逻辑处理能力暴涨。' },
  { year: '2026', title: '走向 AGI 的前夜', desc: 'AI 从屏幕走向物理世界，完全自主的“超级软件工程师”与双足人形机器人进入千行百业，人类社会开始严肃面对劳动力重塑。' }
];
