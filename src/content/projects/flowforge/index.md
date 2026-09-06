---
title: "FlowForge"
description: "A 100% client-side visual workflow builder with custom nodes, execution engine, and import/export."
date: "Sep 06 2026"
demoURL: "https://flowforge-five-sigma.vercel.app/"
repoURL: "https://github.com/jd984/flowforge"
---

![FlowForge Screenshot](/flow-forge.png)

**FlowForge** is a 100% client-side visual workflow builder built with **React**, **TypeScript**, and **@xyflow/react**. It runs on an infinite canvas with live configuration panels, a payload inspector, and workflow import/export — no backend required.

## 📋 Features

- ✅ Infinite canvas with 4 custom node types: webhook trigger, AI prompt transformer, conditional branch, and HTTP request
- ✅ Live configuration panels and payload inspector
- ✅ Workflow import/export
- ✅ Browser-side execution engine with DFS cycle prevention
- ✅ Event-driven async runner with branch routing, fail-fast execution, fan-out deduplication, and mid-run cancellation
- ✅ Command-pattern undo/redo with coalescing and atomic delete-restore
- ✅ Versioned Zod validation and debounced LocalStorage autosave
- ✅ Memoized nodes/selectors to minimize sibling re-renders
- ✅ 78 Vitest unit/integration tests covering DAG validation, execution, history, and persistence
- ✅ CI gated typecheck, build, and test

## 🧠 Tech Stack

- **Frontend**: React.js, TypeScript, @xyflow/react
- **State Management**: Zustand
- **Validation**: Zod
- **Styling**: Tailwind CSS
- **Testing**: Vitest
- **Deployment**: Vercel
