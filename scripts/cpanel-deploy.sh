#!/usr/bin/env bash
# Run on the server after uploading code (SSH / cPanel Terminal)
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> npm install"
npm install

echo "==> npm run build"
npm run build

echo ""
echo "Done. Restart the Node.js app in cPanel (Setup Node.js App → Restart)."
echo "Site: https://engineering.reliablecompany.sa"
echo "Admin: https://engineering.reliablecompany.sa/admin/login"
