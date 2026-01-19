---
# Hugo Archetype: Default
# This file serves as a blueprint for all new content created with 'hugo new content <path>'

# Title Logic: 
# 1. Takes the filename (e.g., 'my-new-post') 
# 2. Replaces hyphens with spaces ('my new post')
# 3. Applies Title Case ('My New Post')
title: "{{ replace .Name "-" " " | title }}"

# Date Logic:
# Automatically stamps the exact time the 'hugo new' command was run.
# Uses RFC3339 format (e.g., 2026-01-20T10:00:00-05:00) for precise sorting.
date: {{ .Date }}

# Draft Status:
# Set to 'false' so that content is immediately visible during local development.
# Change to 'true' if you prefer to hide new pages until you manually review them.
draft: false
---


