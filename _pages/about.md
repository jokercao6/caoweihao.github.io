---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 👨‍🎓 About Me
I am a Master's student in Computer Science at the Beijing Key Laboratory of Traffic Data Mining and Embodied Intelligence, 
School of Computer Science and Technology, Beijing Jiaotong University, 
State Key Laboratory of Advanced Rail Autonomous Operation, China.

My research focuses on **open-vocabulary object detection, continual learning, and prompt-based learning for vision-language models**, under the supervision of [Prof. Liping Jing](https://faculty.bjtu.edu.cn/8249/) and [Prof. Runqi Wang](https://faculty.bjtu.edu.cn/10280/).

My long-term research goal is to develop robust and scalable open-world perception systems that generalize across domains and incremental learning settings. 🤝 If you are interested in my research, feel free to get in touch.

<!-- 📢📢 <span style="color:red;">Our group is seeking research assistants to work on multiple projects related to **Post-quantum Cryptography Chip** and **Encrypted mmWave Sensing**. Drop me an email if you are interested. -->

# 🔥 News
- *2026.02*: Our paper entitled "Parameter-Efficient Semantic Augmentation for Enhancing Open-Vocabulary Object Detection" was accepted by <span style="color:red;"> **CVPR (CCF-A)**.


# 📘 Selected Publications 
## 🏃‍♀️ Open-Vocabulary Object Detection
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div>
<!-- <img src='images/hsadino.png' alt="sym" width="100%"> -->
<img
  src="/assets/images/papers/hsa-dino_teaser.jpg"
  alt="HSA-DINO teaser"
  class="paper-thumb js-paper-modal"
  data-full="/assets/images/papers/hsa-dino_teaser.jpg"
  data-title="HSA-DINO"
  data-venue="CVPR 2026 (Accepted)"
  data-abstract="Open-vocabulary object detection (OVOD) enables models to detect any object category, including unseen ones. Benefiting from large-scale pre-training, existing OVOD methods achieve strong detection performance on general scenarios (e.g., OV-COCO) but suffer severe performance drops when transferred to downstream tasks with substantial domain shifts.
This degradation stems from the scarcity and weak semantics of category labels in domain-specific task, as well as the inability of existing models to capture auxiliary semantics beyond coarse-grained category label.
To address these issues, we propose HSA-DINO, a parameter-efficient semantic augmentation framework for enhancing open-vocabulary object detection. Specifically, we propose a multi-scale prompt bank that leverages image feature pyramids to capture hierarchical semantics and select domain-specific local semantic prompts, progressively enriching textual representations from coarse to fine-grained levels.
Furthermore, we introduce a semantic-aware router that dynamically selects the appropriate semantic augmentation strategy during inference, thereby preventing parameter updates from degrading the generalization ability of the pre-trained OVOD model. We evaluate HSA-DINO on OV-COCO, several vertical domain datasets, and modified benchmark settings.
The results show that HSA-DINO performs favorably against previous state-of-the-art methods, achieving a superior trade-off between domain adaptability and open-vocabulary generalization."
/>
</div></div>
<div class='paper-box-text' markdown="1">
[Parameter-Efficient Semantic Augmentation for Enhancing Open-Vocabulary Object Detection](official link coming soon)

**Weihao Cao**, Runqi Wang, Xiaoyue Duan *et al.*

- HSA-DINO: A parameter-efficient semantic augmentation framework that enhances open-vocabulary object detection under domain shifts by leveraging multi-scale prompt banks and a semantic-aware router to balance domain adaptability and open-vocabulary generalization.

</div>
</div>

<!-- → [Full List of Publications](https://www.researchgate.net/profile/Hankai-Liu/research) -->

<!-- # 📋 Services
- *2025.11*, TPC Member, TrustCom 2025
- *2023.10*, Workshop Chair, ICA3PP 2023

# 🎤 Invited Talks
- *2024.10*, PmTrack: Enabling Personalized mmWave-based Human Tracking, UbiComp 2024
- *2024.08*, mmWave Radar-based Multi-person Tracking and Identification, HHME 2024

# 👨‍🏫 Teaching
- *COSC0069*, Computer Hardware Fundamentals -->

# 🏆 Honors and Awards
- *2025.10* First Prize (Beijing Region), China International College Students' Innovation Competition("中国国际大学生创新大赛")  
- *2023.05* Third Prize (Beijing Region) of Chinese Collegiate Computer Design Competition ("朔日杯")  
- *2022.12* National Third Prize of "Strong Nation Cup" ("强国杯") Technical Skills Competition (Intelligent Connected Vehicle Application Track)  
<!-- - *2022.05* Provincial Third Prize of Lanqiao Cup C/C++ Programming Competition (Group B)   -->
- *2020–2024* Outstanding Student & Academic Scholarship (Four Consecutive Years)

# 🎓 Experiences
- *2024.09 – Now* M.S., Artificial Intelligence, Beijing Jiaotong University  
- *2020.09 – 2024.06* B.E., Software Engineering, Beijing Technology and Business University  

# 🎤 Extracurricular Activities
- *2023.06* Second Prize, Campus Talent Show  
- *2022.12* Campus Art Star Award  
- *2021.12* Third Place, Campus Singing Competition  



