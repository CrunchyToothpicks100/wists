# "What is this?" (WIsTs)

So, you found a repository on GitHub, and you ask yourself, "What is this?"

There is either not enough documentation, or there's *too much* documentation,
and let's be honest, we're not reading it.

This CLI tool will call Jev (AI model) to boil down the github repo to just
"nodes", and then spin up a web server (hosted locally) to generate a flow
chart. This flow chart will show how the different software tools and network
devices speak to each other.

"Ah, that's what it is!"

`sudo apt install wists`

Fun fact: AI coding tools were not used in the making of this repository!

## File structure

`~/.local/share/wists/web/` - When you install WIsTs, it will install a webserver here  
`~/.local/share/wists/scan/nodes/` - Store JSON files of scanned repositories  
`~/.local/share/wists/scan/repos/` - Store downloaded/cloned repositories  
`~/.local/share/wists/cli/` - Parse commands  
`~/.local/share/wists/lib` - Store downloaded repositories  

## Scanning

### Stage 1: Initialization

We need to grab any context already provided, such as README.md, AGENTS.md,
or CLAUDE.md. If there is none, we will go ahead and init the root folder.

Now we can ask Jev to recognize nodes.

### Stage 2: File Structure

Create a directory hierarchy

### Stage 3: Network design

If this application requires any form of networking, we need to see it represented
by the differenet layers of the OSI model. *Any layer that isn't relevant
to this repository should not be included.*

These will create a hierarchy of nodes that can be viewed in the flow chart.
These nodes can be squashed together (raspberry pi using eth0, 192.x.x.x
at port 80, listening for WebSocket traffic)

### Stage 4: Software Design

Identify different runtimes that may be run. Are we using, say, Node.js
more than once? Are we using GCC to run some external C++ files?

Does your code use Vite, React, Express, and other logic? How do they communicate
with one another?

Is your code modular? What does each module do?

Does your code parse incoming traffic, such as JSON? What kind of objects
are used to parse this data?

## Diagram renderer

- Mermaid
- SVG
- HTML
- PNG output
