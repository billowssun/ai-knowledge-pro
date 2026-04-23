import React from 'react';
import { Tooltip } from '../components/Tooltip';

const JARGON = {
  'MoE': '混合专家架构：通过动态路由激活部分网络参数，极大降低了万亿级模型的推理成本。',
  'Test-Time Compute': '推理期算力扩展：给予模型更多时间在内部进行"反思"，大幅提升其在复杂逻辑任务上的上限。',
  'RLHF': '基于人类反馈的强化学习：大模型对齐人类价值观、过滤有害输出的核心技术。',
  'DiT': 'Diffusion Transformer：将 U-Net 替换为 Transformer 的视觉底层架构，解决了远景一致性崩溃问题。',
  'ControlNet': '控制网：允许用户通过线稿或深度图精确约束 AI 画面布局的革命性插件。',
  'Agent': '智能体：具备自主目标拆解、工具调用和全链路自我修正能力的先进 AI 形态。',
  'Copilot': '副驾驶：嵌入在特定软件流中的 AI 辅助工具，通常需要人类下达明确的微观指令。',
  'HBM3e': '高带宽内存：紧贴 GPU 核心的高速显存，解决 AI 训练中"内存墙"瓶颈的核心硬件技术。',
  'LPU': '语言处理单元：放弃传统内存而采用超大片内 SRAM 的芯片架构，为大模型输出提供极致低延迟。',
  'NPU': '神经网络处理单元：专为矩阵乘法等 AI 计算高度优化的协处理器，现已成为端侧设备标配。',
  'Scaling Law': '规模定律：模型性能随参数量、数据量和算力三者的增长而可预测地提升的经验法则。',
  'ComfyUI': '节点式 AI 绘画工作流编辑器：允许用户以可视化方式拼接模型管线，是 Stable Diffusion 的主流操作界面。',
  'FSD': '全自动驾驶 (Full Self-Driving)：特斯拉基于纯视觉方案训练的端到端自动驾驶系统。',
  'CoWoS': '台积电先进封装技术：将多个计算芯片和 HBM 显存封装在同一基板上，大幅提升芯片间带宽。',
  'VLA': '视觉-语言-动作模型：将视觉感知、语言理解与机器人动作输出统一到一个多模态模型中。',
  'CUDA': 'NVIDIA 的并行计算平台：几乎所有 AI 训练框架的底层加速依赖，拥有极强的生态垄断力。',
  'Transformer': '自注意力架构：2017 年由 Google 提出，通过全局注意力机制捕获序列依赖关系的基础架构。',
  'MMLU': '大规模多任务语言理解基准：涵盖 57 个学科的选择题测试，用于衡量大模型的通用知识广度。',
  'FID': 'Fréchet Inception Distance：衡量生成图像与真实图像分布距离的标准指标，越低越好。',
  'HumanEval': 'OpenAI 提出的代码生成基准：通过函数补全任务衡量模型的编程能力。'
};

export function renderWithTooltips(text) {
  if (!text) return null;
  
  let parts = [{ type: 'text', content: text }];
  
  Object.entries(JARGON).forEach(([term, desc]) => {
    let newParts = [];
    parts.forEach(part => {
      if (part.type === 'tooltip') {
        newParts.push(part);
      } else {
        const splitText = part.content.split(term);
        splitText.forEach((t, i) => {
          newParts.push({ type: 'text', content: t });
          if (i < splitText.length - 1) {
            newParts.push({ type: 'tooltip', term, desc });
          }
        });
      }
    });
    parts = newParts;
  });

  return parts.map((p, i) => {
    if (p.type === 'tooltip') {
      return <Tooltip key={i} text={p.term} explanation={p.desc} />;
    }
    return <React.Fragment key={i}>{p.content}</React.Fragment>;
  });
}
