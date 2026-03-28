#!/bin/bash
# Seirios — DevSecOps FAIL demo terminal script
# Run first during DevSecOps screen recording
# Shows a deliberate compliance failure being caught before merge

clear
echo "Running compliance verification pipeline..."
sleep 1
echo ""
echo "Step 1 — Formal risk model verification"
sleep 0.5
echo "  ✓ Risk definitions complete and consistent"
sleep 0.4
echo "  PASS"
sleep 1.2
echo ""
echo "Step 2 — Code controls verification"
sleep 0.5
echo "  ✓ Auto-generated controls present in codebase"
sleep 0.4
echo "  PASS"
sleep 1.2
echo ""
echo "Step 3 — Path coverage analysis"
sleep 0.5
echo "  ✗ FAIL: compliance control bypassed on fast-path"
sleep 0.4
echo "  → Found code path where HIGH-risk decision is"
sleep 0.3
echo "    made without required compliance check"
sleep 0.4
echo "  → Affected path: processLoanDecision()"
sleep 0.3
echo "    [branch: skipValidation=true]"
sleep 1.5
echo ""
echo "──────────────────────────────────────────────────"
sleep 0.3
echo "✗  BUILD FAILED — HIGH-risk compliance gap detected"
sleep 0.3
echo "   Pull request blocked. Review required."
echo "──────────────────────────────────────────────────"
sleep 4
