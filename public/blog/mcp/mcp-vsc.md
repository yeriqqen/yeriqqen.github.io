---
title: "mcp fsc"
description: "MCP in VS Code"
pubDate: 2025-08-19
---
# MCP server injection for VS Code projects

Initiated in .vscode/mcp.json file

As an example, figma context mcp:

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "perplexity-key",
      "description": "Perplexity API Key",
      "password": true
    }
  ],
  "servers": {
    // mcp servers are added here
    "Github": {
      "url": "https://api.githubcopilot.com/mcp/"
    },
    "Perplexity": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "server-perplexity-ask"],
      "env": {
        "PERPLEXITY_API_KEY": "${input:perplexity-key}"
      }
    },
    "Figma": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "figma-developer-mcp", "--figma-api-key=FIGMA_API_KEY", "--stdio"]
    }
  }
}
```