# squash-demo-roman

A tiny `intToRoman(n)` with a real bug: it doesn't do subtractive notation, so `4` becomes
`"IIII"` instead of `"IV"`. There's a bounty on fixing it.

```
node --test test/accept.test.js
```

The acceptance test above must pass. Open a PR with the fix, and the payout moves on green —
decided by the test, not by a human. See the bounty on [Squash](https://squash-core.apily-geocode.workers.dev/board).
