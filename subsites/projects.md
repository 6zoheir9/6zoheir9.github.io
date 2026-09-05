---
layout: page
title: Projects
---

<a href="/" class="zs-back">$ cd ~</a>

<p class="zs-eyebrow"># projects</p>

<div class="zs-card">
  <p class="zs-card-title">AI SOC Analyst — Autonomous Alert Triage Pipeline</p>
  <p class="zs-card-meta">Goal: Build an AI agent capable of triaging real SIEM alerts end-to-end, without manual intervention.</p>
  <div class="zs-pills">
    <span class="zs-pill">Docker</span>
    <span class="zs-pill">n8n</span>
    <span class="zs-pill">Wazuh SIEM</span>
    <span class="zs-pill">VirusTotal</span>
  </div>
  <ul>
    <li>Deployed a self-hosted Wazuh SIEM and built an AI agent that autonomously selects and calls threat-intel tools to investigate live alerts.</li>
    <li>Caught and fixed an AI hallucination failure mode where the agent fabricated a verdict on a failed tool call, hardening it to report failure instead of guessing.</li>
    <li>Implemented human-in-the-loop escalation where high-severity verdicts trigger email alerts, benign findings auto-close, fully unattended.</li>
    <a class="zs-pill" href="https://github.com/6zoheir9/ai-soc-analyst" target="_blank" rel="noopener">GitHub</a>
  </ul>
</div>

<div class="zs-card">
  <p class="zs-card-title">ICS Modbus Attack & Detection Lab</p>
  <p class="zs-card-meta">Goal: Simulate and detect a real-time Modbus attack against a segmented, containerized OT network.</p>
  <div class="zs-pills">
    <span class="zs-pill">Python</span>
    <span class="zs-pill">Docker</span>
    <span class="zs-pill">Modbus</span>
  </div>
  <ul>
    <li>Built a man-in-the-middle proxy using Python that intercepts and tampers with live PLC traffic, spoofing sensor readings and injecting unauthorized commands.</li>
    <li>Developed a direction-aware passive IDS that detects both attack types without duplicate alerting.</li>
    <li>Segmented the lab across isolated Docker containers with service-based network discovery, mirroring real OT network zoning.</li>
    <a class="zs-pill" href="https://github.com/6zoheir9/ics-modbus-lab" target="_blank" rel="noopener">GitHub</a>
  </ul>
</div>

<div class="zs-card">
  <p class="zs-card-title">CI/CD Security Pipeline</p>
  <p class="zs-card-meta">Goal: Build and validate an automated CI/CD security gate that blocks vulnerable code before it merges.</p>
  <div class="zs-pills">
    <span class="zs-pill">GitHub actions</span>
    <span class="zs-pill">Semgrep, Trivy, TruffleHog</span>
    <span class="zs-pill">Docker</span>
  </div>
  <ul>
    <li>Built a pipeline running SAST, SCA, secret scanning, and SBOM generation on every pull request.</li>
    <li>Proved real-world detection by deliberately introducing a command-injection flaw and a CVE-flagged dependency, then documenting the pipeline catching and blocking both.</li>
    <a class="zs-pill" href="https://github.com/6zoheir9/security-pipeline-lab" target="_blank" rel="noopener">GitHub</a>
  </ul>
</div>