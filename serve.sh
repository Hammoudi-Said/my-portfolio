#!/bin/bash

# Simple local server launcher for portfolio testing
# This script provides multiple options to run a local development server

echo "🚀 Starting local development server for portfolio..."
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 detected"
    echo "📂 Serving files from: $(pwd)"
    echo "🌐 Open your browser at: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo "-----------------------------------"
    python3 -m http.server 8000
# Check if Python 2 is available
elif command -v python &> /dev/null; then
    echo "✅ Python 2 detected"
    echo "📂 Serving files from: $(pwd)"
    echo "🌐 Open your browser at: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo "-----------------------------------"
    python -m SimpleHTTPServer 8000
# Check if Node.js/npx is available
elif command -v npx &> /dev/null; then
    echo "✅ Node.js detected"
    echo "📂 Serving files from: $(pwd)"
    echo "🌐 Open your browser at: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo "-----------------------------------"
    npx http-server -p 8000
# Check if PHP is available
elif command -v php &> /dev/null; then
    echo "✅ PHP detected"
    echo "📂 Serving files from: $(pwd)"
    echo "🌐 Open your browser at: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo "-----------------------------------"
    php -S localhost:8000
else
    echo "❌ No suitable web server found!"
    echo ""
    echo "Please install one of the following:"
    echo "  • Python 3: https://python.org"
    echo "  • Node.js: https://nodejs.org"
    echo ""
    echo "Or simply open index.html in your browser:"
    echo "  • macOS: open index.html"
    echo "  • Linux: xdg-open index.html"
    echo "  • Windows: start index.html"
    exit 1
fi
