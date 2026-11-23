# The JOURNAL concordance: ship's reckoning → real calendar

*Kept by the Scribe. This file is the record, not the fiction: the dates live here so the novel doesn't have to carry them.*

**Why this file exists.** The captain's rule (2026-11-21): *"the journal's form is the fiction (the space and time) and the content is real. So, real dates are pointless in this."* Her decision (2026-11-23): *"Real dates since DAY 33: follow @writer's advice."* So from DAY 33 to the last entry, the JOURNAL counts time the ship's way: by DAY, by `ship's reckoning` in the header, by relative time in the text (*the next day*, *six weeks after launch morning*). The real dates moved here, all of them, so the journal can still be checked against `git log` and the board. See `docs/DECISIONS-EN.md`, entry 68, and `docs/work-deontology.md` §10.3.

**How to read it.**
- *Clock times stayed in the novel.* A time with no date points to no real day, so it is the ship's clock. All times are the machine's local time, as `git log` prints them (EEST, UTC+03:00, until 2026-10-25; EET, UTC+02:00, after).
- *Line numbers* are the same in the file before and after the change (each line was rewritten in place, none added or removed). They are the lines of `JOURNAL-EN.md` / `JOURNAL-RO.md` on `main` at `37effd7`.
- *Commits* are the SHAs the DAY names, with the time `git log` gives for each. *PRs* are the pull requests the DAY tells of.
- The ledger's [*Fuel by journal day*](ledger/cost-ledger.md#fuel-by-journal-day) table uses the same DAY → date mapping for DAY 33–39.

## 1. One row per DAY

| DAY | real date(s) and times | commits (as `git log` dates them) and PRs | was in (EN · RO) |
|---|---|---|---|
| DAY 33 | Wednesday 2026-08-26: first Hermes watch that names the ship at 01:09 (session `20260826_010858_06165c`), first cards 01:24, the Rigger 01:26, the Cartographer and `backend-db` 17:04. Thursday 2026-08-27: the Scribe's first watch. 2026-08-28: the conversation the curriculum night continued. Thursday 2026-09-10, 01:02–03:56: the curriculum night. The log before it stopped on 2026-08-20. Forward references: the Archivist's count of cabins and the captain's re-ruling on comments, 2026-11-06; the fourteenth cabin, 2026-11-09; the merge rule, November (DAY 36, 2026-11-04). | `11c8712` 2026-09-10 02:49 · `027a020` 2026-09-10 03:55 | EN L2505, 2507, 2521, 2525, 2566, 2574, 2590, 2601 · RO L2535, 2537, 2551, 2555, 2596, 2604, 2620, 2631 |
| Interlude (the Ship's Manual, after DAY 33) | Written from card `t_0c56f7bb`, 2026-11-06. The third harness (Claude Code): 2026-11-04 and 2026-11-05. Profiles counted 2026-11-06; the fourteenth added 2026-11-09. Card `t_0e5d67fe` pinned 2026-11-06 18:06, `ready` 18:45:32, woken 18:46:25. The merge rule born in November (DAY 36). | — | EN L2633, 2648, 2692, 2710, 2719 · RO L2663, 2678, 2722, 2740, 2749 |
| DAY 34 | Monday 2026-09-21, 10:00–10:52: launch morning. `6610158` at 10:46 was the last push to GitHub's `main` until 4 November (2026-11-04). The drift: 2026-09-23 14:08, then Thursday 2026-10-29 15:40. | `19822a3` 2026-09-21 10:00 → `22dc146` 10:52 (`e5f4ce0` 10:05, `db3a7c4` 10:09, `6610158` 10:46) · `d9902b1` 2026-09-23 14:08 · `9464d30`, `c2b0d17` 2026-10-29 15:40 | EN L2739, 2787, 2797, 2798 · RO L2769, 2817, 2827, 2828 |
| DAY 35 | Wednesday 2026-11-04 ("4 November"); "by November". The report sealed at 19:12. | `df4325d` 2026-11-04 19:12 | EN L2835, 2841 · RO L2865, 2871 |
| DAY 36 | Wednesday 2026-11-04, 21:14 → after 21:53. "Since September": the four crates waited from 2026-09-21 (`22dc146`), 2026-09-23 and 2026-10-29. | `087a5fa` 19:46 · `84f8487` 21:40 · `9811192` 21:53 (all 2026-11-04) · PR #1, #2, #3 | EN L2916, 2928, 2966 · RO L2946, 2958, 2996 |
| DAY 37 | Wednesday 2026-11-04 22:13 → Thursday 2026-11-05 17:43. Crates 23:20–23:37 on Wednesday; 12:21 on Thursday; the note "in the middle of a Thursday afternoon"; 16:07 on Thursday. "The ship's November work" = the work of the dockings, 2026-11-04 → 2026-11-06. | `6261f8c` 2026-11-04 22:13 · `1b55946` 23:20 · `9863eb1` 23:37 · `81b096f` 2026-11-05 12:21 · `05b99c9` 14:02 · `7324fd0` 16:29 · PR #4, #5, #8 | EN L3035, 3037, 3077, 3079, 3098, 3114, 3187 · RO L3065, 3067, 3107, 3109, 3128, 3144, 3217 |
| DAY 38 | Thursday 2026-11-05 17:46 → Friday 2026-11-06, about 18:47. The captain's answers Friday 16:22, the REVISE 16:24, the three seals Friday 16:39. "The readings of 5 November" (2026-11-05). The wrong-numbers search un-parked on Friday (2026-11-06). | `7ee7ef2` 2026-11-05 17:46 · `ff832f7` 18:17 · `2fde095` 2026-11-06 16:39 · `e4fbde7` 16:41 · `d4565df` 16:42 · `68ac4e7` 18:12 · `fe48406` 18:42 · PR #6–#11 | EN L3199, 3258, 3260, 3268, 3318, 3322 · RO L3229, 3288, 3290, 3298, 3348, 3352 |
| DAY 39 | Friday 2026-11-06. Sources: the Inspector's report 2026-11-04; the Archivist's fact-check `t_7144b5db` 2026-11-05; the Assayer's report `t_2ee378d4` 2026-11-06. Errata dates: 24 July (2026-07-24, when the DAY 10 line was written), 28 July (2026-07-28), 17 July (2026-07-17), 5 August (2026-08-05), 21 September (2026-09-21, twice). | `0d5c824` 2026-07-17 15:40 · `c4ea620` 2026-07-28 13:57 · `7ecd422` 2026-08-05 18:00 · `e5f4ce0`, `db3a7c4` 2026-09-21 | EN L3342, 3350, 3387, 3389, 3398, 3399 · RO L3372, 3380, 3417, 3419, 3428, 3429 |
| DAY 40 | Tuesday 2026-11-10. The ledger counts fuel since 2026-08-26. | PR #11–#15 (#15, the ledger, merged 2026-11-10) | EN L3429, 3495 · RO L3459, 3525 |
| DAY 41 | Wednesday 2026-11-11 → Tuesday 2026-11-17, written later. The captain's rule "everything goes into the journal", 2026-11-18. The handbook request, Wednesday the 11th (2026-11-11), heading 15:02. The `---` line since 5 August (2026-08-05). The primer for visitors, Tuesday (2026-11-17) 16:18. The captain's notes on the primer, the 17th (2026-11-17). | `70fb8b5` 2026-08-05 17:13 · `75b324e` 2026-11-11 17:08 · `cb257b7` 17:13 · PR #17, #18 | EN L3542, 3544, 3546, 3548, 3566, 3572, 3574, 3576 · RO L3572, 3574, 3576, 3578, 3598, 3604, 3606, 3608 |
| DAY 42 | Wednesday 2026-11-18, 16:50 → 21:59. | `08551fb` 2026-11-18 18:01 · `65170a3` 18:15 · `5d7ef46` 21:57 · PR #19 | EN L3598, 3600 · RO L3632, 3634 |
| DAY 43 | Thursday 2026-11-19, 14:30 → 20:53. The Record: PR #20 merged 2026-11-19; PR #21 merged 2026-11-20. | PR #20, #21, #22 | EN L3654, 3656, 3704 · RO L3690, 3692, 3740 |

## 2. Every removed date, line by line

55 lines in each file. *Removed* lists the calendar dates, month names and weekdays that left the line (EN, then RO). *Was* and *now* show only the part of the EN line that changed; the RO line changed in the same place.

| # | DAY | where | EN | RO | removed (EN) | removed (RO) | was (EN) | now (EN) |
|---:|---|---|---|---|---|---|---|---|
| 1 | DAY 33 | header | L2505 | L2535 | 2026-08-26, Thursday, 2026-09-10 | miercuri, 2026-08-26, joi, 2026-09-10 | date: Wednesday 2026-08-26 → Thursday 2026-09-10 | reckoning: under the sign of Wednesday, from the Messenger's first watch to the end of the curriculum night |
| 2 | DAY 33 | text | L2507 | L2537 | 2026-08-20 | 2026-08-20 | The log stopped on 2026-08-20 | Then the log fell silent |
| 3 | DAY 33 | text | L2521 | L2551 | 2026-08-26 | Miercuri, 2026-08-26 | **Wednesday 2026-08-26 | a **Wednesday |
| 4 | DAY 33 | text | L2525 | L2555 | Thursday, 2026-08-27 | joi, 2026-08-27 | on Thursday 2026-08-27 | the next day |
| 5 | DAY 33 | text | L2566 | L2596 | 2026-09-10, November | 2026-09-10, noiembrie | night of 2026-09-10. The checks that run in the airlock were born on launch morning (DAY 34). The rule that no crew member merges into `main`, only the captain, came in November | night, about two weeks on. The checks that run in the airlock were born on launch morning (DAY 34). The rule that no crew member merges into `main`, only the captain, came much later |
| 6 | DAY 33 | text | L2574 | L2604 | 2026-11-06, 2026-11-09 | 2026-11-06, 2026-11-09 | 2026-11-06, thirteen cabins stood on this machine (a fourteenth was built on 2026-11-09 | the Sleeper's day (DAY 39), thirteen cabins stood on this machine (a fourteenth was built three days later |
| 7 | DAY 33 | text | L2590 | L2620 | Thursday, 2026-09-10, 2026-08-28 | joi, 2026-09-10, 2026-08-28 | night of **Thursday 2026-09-10, from 01:02 to 03:56**: the captain and the Quartermaster at the chart table, with the Rigger, the Assayer, the Scribe and the Engineer called in by card. (It continued a conversation begun on 2026-08-28 | curriculum night, **from 01:02 to 03:56**: the captain and the Quartermaster at the chart table, with the Rigger, the Assayer, the Scribe and the Engineer called in by card. (It continued a conversation begun nearly two weeks earlier |
| 8 | DAY 33 | text | L2601 | L2631 | 2026-11-06 | 2026-11-06 | 2026-11-06 | the Sleeper's day, DAY 39, |
| 9 | Interlude | header | L2633 | L2663 | 2026-11-06 | 2026-11-06 | `t_0c56f7bb`, 2026-11-06) · no ship's date: | `t_0c56f7bb`) · no ship's reckoning: |
| 10 | Interlude | text | L2648 | L2678 | November, 2026-11-04, 11-05 | noiembrie, 2026-11-04, 11-05 | days in November, 2026-11-04 and 11-05 | days, the Inspector's and the one after it |
| 11 | Interlude | text | L2692 | L2722 | 2026-11-06, 2026-11-09 | 2026-11-06, 2026-11-09 | 2026-11-06); a fourteenth was added on 2026-11-09 | DAY 39); a fourteenth was added three days later |
| 12 | Interlude | text | L2710 | L2740 | 2026-11-06 | 2026-11-06 | 2026-11-06 | the Sleeper's day, |
| 13 | Interlude | text | L2719 | L2749 | November | noiembrie | in November | late |
| 14 | DAY 34 | header | L2739 | L2769 | Monday, 2026-09-21, Thursday, 2026-10-29 | luni, 2026-09-21, joi, 2026-10-29 | date: Monday 2026-09-21, 10:00–10:52, then the drift to Thursday 2026-10-29 | reckoning: launch morning, 10:00–10:52, then six weeks of drift |
| 15 | DAY 34 | text | L2787 | L2817 | 4 November | 4 noiembrie | 4 November | the Inspector's day |
| 16 | DAY 34 | text | L2797 | L2827 | 2026-09-23 | 2026-09-23 | **2026-09-23 | **two days later |
| 17 | DAY 34 | text | L2798 | L2828 | 2026-10-29 | 2026-10-29 | **2026-10-29 | **five weeks after that |
| 18 | DAY 35 | header | L2835 | L2865 | Wednesday, 2026-11-04 | miercuri, 2026-11-04 | date: Wednesday 2026-11-04 | reckoning: the day the Inspector came, six weeks after launch morning |
| 19 | DAY 35 | text | L2841 | L2871 | November, Wednesday, 4 November | noiembrie, miercuri, 4 noiembrie | November the ship had been sailing for months the way it had always sailed: request, build, look, request again. I called it, to the one I asked, "vibecoding and patchwork". I could no longer say where the ship stood. So on Wednesday, 4 November | then the ship had been sailing for months the way it had always sailed: request, build, look, request again. I called it, to the one I asked, "vibecoding and patchwork". I could no longer say where the ship stood. So one day, six weeks after launch morning |
| 20 | DAY 36 | header | L2916 | L2946 | Wednesday, 2026-11-04 | miercuri, 2026-11-04 | date: Wednesday 2026-11-04 | reckoning: the evening of the Inspector's day |
| 21 | DAY 36 | text | L2928 | L2958 | September | septembrie | September: | the drift began: |
| 22 | DAY 36 | text | L2966 | L2996 | September | septembrie | September | launch morning |
| 23 | DAY 37 | header | L3035 | L3065 | Wednesday, 2026-11-04, Thursday, 2026-11-05 | miercuri, 2026-11-04, joi, 2026-11-05 | date: Wednesday 2026-11-04, 22:13 → Thursday 2026-11-05 | reckoning: the night of the first dockings, 22:13 → the next day |
| 24 | DAY 37 | text | L3037 | L3067 | November, Thursday | noiembrie, joi | ship's November work. I know them the way the Scribe knows DAY 01: from the record. Here that means `git log`, the pull-request pages, the captain's shell history as it was read to me, and one note that was handed to me in the middle of a Thursday | work of the dockings. I know them the way the Scribe knows DAY 01: from the record. Here that means `git log`, the pull-request pages, the captain's shell history as it was read to me, and one note that was handed to me in the middle of the next |
| 25 | DAY 37 | heading | L3077 | L3107 | Thursday | Joi | Thursday | The Next Day |
| 26 | DAY 37 | text | L3079 | L3109 | Wednesday, Thursday | miercuri, joi | 23:37** on Wednesday. The fourth was sealed at **12:21** on Thursday | 23:37**. The fourth was sealed at **12:21** the next day |
| 27 | DAY 37 | heading | L3098 | L3128 | Thursday | Joi | Thursday | That |
| 28 | DAY 37 | text | L3114 | L3144 | Thursday | joi | on Thursday | that afternoon |
| 29 | DAY 37 | text | L3187 | L3217 | November | noiembrie | ship's November work | work of the dockings |
| 30 | DAY 38 | header | L3199 | L3229 | Thursday, 2026-11-05, Friday, 2026-11-06 | joi, 2026-11-05, vineri, 2026-11-06 | date: Thursday 2026-11-05, 17:46 → Friday 2026-11-06 | reckoning: the evening of the handover, 17:46 → the next day |
| 31 | DAY 38 | heading | L3258 | L3288 | Friday | Vineri | Friday | The Next Day, |
| 32 | DAY 38 | text | L3260 | L3290 | Friday | Vineri | On Friday at **16:22** | The next day, at **16:22**, |
| 33 | DAY 38 | heading | L3268 | L3298 | Friday | Vineri | Friday 16:39 | 16:39 |
| 34 | DAY 38 | text | L3318 | L3348 | 5 November | 5 noiembrie | 5 November | the handover day |
| 35 | DAY 38 | text | L3322 | L3352 | Friday | vineri | on Friday | the next day |
| 36 | DAY 39 | header | L3342 | L3372 | Friday, 2026-11-06 | vineri, 2026-11-06 | date: Friday 2026-11-06 | reckoning: the second day of the Assayer's watch |
| 37 | DAY 39 | text | L3350 | L3380 | 2026-11-04, 2026-11-05, 2026-11-06 | 2026-11-04, 2026-11-05, 2026-11-06 | 2026-11-04, `docs/audits/2026-11-04-audit-en.md`); **the Archivist's fact-check of this journal** (card `t_7144b5db`, 2026-11-05); and **the Assayer's report on wrong numbers** (card `t_2ee378d4`, 2026-11-06 | DAY 35, `docs/audits/2026-11-04-audit-en.md`); **the Archivist's fact-check of this journal** (card `t_7144b5db`, DAY 37); and **the Assayer's report on wrong numbers** (card `t_2ee378d4`, DAY 38 |
| 38 | DAY 39 | text | L3387 | L3417 | 24 July, 28 July | 24 iulie, 28 iulie | 24 July, when the line was written, and it shared that number with another: `MECANISMUL 07`, the cursor-erase protocol. On 28 July | the day the line was written, and it shared that number with another: `MECANISMUL 07`, the cursor-erase protocol. Four days later |
| 39 | DAY 39 | text | L3389 | L3419 | 17 July | 17 iulie | 17 July | then |
| 40 | DAY 39 | text | L3398 | L3428 | 5 August, 21 September | 5 august, 21 septembrie | added, 5 August (`7ecd422`). *True now:* since launch morning, 21 September | added (`7ecd422`). *True now:* since launch morning |
| 41 | DAY 39 | text | L3399 | L3429 | 21 September | 21 septembrie | 21 September: | launch morning: |
| 42 | DAY 40 | header | L3429 | L3459 | Tuesday, 2026-11-10 | marți, 2026-11-10 | date: Tuesday 2026-11-10 | reckoning: four days after the errata, the day the Teacher came aboard |
| 43 | DAY 40 | text | L3495 | L3525 | 2026-08-26 | 2026-08-26 | 2026-08-26 | the Messenger came aboard (DAY 33) |
| 44 | DAY 41 | header | L3542 | L3572 | Wednesday, 2026-11-11, Tuesday, 2026-11-17 | miercuri, 2026-11-11, marți, 2026-11-17 | date: Wednesday 2026-11-11 → Tuesday 2026-11-17 | reckoning: the seven days after the Teacher came, set down later from the cards |
| 45 | DAY 41 | text | L3544 | L3574 | 2026-11-18 | 2026-11-18 | 2026-11-18 | the day of the next page (DAY 42) |
| 46 | DAY 41 | heading | L3546 | L3576 | Wednesday | Miercuri | Wednesday 15:02 | 15:02 |
| 47 | DAY 41 | text | L3548 | L3578 | Wednesday the 11th | Miercuri, pe 11 | Wednesday the 11th | the first day of that week |
| 48 | DAY 41 | text | L3566 | L3598 | 5 August | 5 august | 5 August (`70fb8b5`) | `70fb8b5`, weeks before launch morning |
| 49 | DAY 41 | heading | L3572 | L3604 | Tuesday | Marți | Tuesday | The Seventh Day, |
| 50 | DAY 41 | text | L3574 | L3606 | Tuesday | marți | Tuesday | the seventh day |
| 51 | DAY 42 | header | L3598 | L3632 | Wednesday, 2026-11-18 | miercuri, 2026-11-18 | date: Wednesday 2026-11-18 | reckoning: the day after the week of the shelf |
| 52 | DAY 42 | text | L3600 | L3634 | Wednesday | Miercuri | On Wednesday | That day |
| 53 | DAY 43 | header | L3654 | L3690 | Thursday, 2026-11-19 | joi, 2026-11-19 | date: Thursday 2026-11-19 | reckoning: the day after the Flight Console |
| 54 | DAY 43 | text | L3656 | L3692 | Thursday | Joi | On Thursday | The next day |
| 55 | DAY 43 | Record | L3704 | L3740 | 2026-11-19, 2026-11-20 | 2026-11-19, 2026-11-20 | 2026-11-19); the drafts review, card `t_ad5e95c8` (KEEP, BACKLOG 011); the structure reviews, cards `t_c975e8cf` and `t_791fd940`; the six capsules, card `t_499b6977`; the full-journal link removed, PR #22; the DECISIONS record, PR #21 (merged 2026-11-20 | on DAY 43); the drafts review, card `t_ad5e95c8` (KEEP, BACKLOG 011); the structure reviews, cards `t_c975e8cf` and `t_791fd940`; the six capsules, card `t_499b6977`; the full-journal link removed, PR #22; the DECISIONS record, PR #21 (merged the day after |
| 56 | DAY 41 | text | L3576 | L3608 | the 17th | 17 | On the 17th | That day |

## 3. What stayed in the novel, on purpose

- **Every clock time** (10:05, 16:39:58, …): the ship's clock. The before/after count of clock times is identical in both files.
- **Wednesday in DAY 33** (EN L2505, 2515, 2517, 2519, 2521; RO L2535, 2545–2551): the day of Mercury, who is Hermes. It is the sign of the DAY, not a date.
- **Artifact names** that hold a date because they are real names: the branch `audit-2026-11-04` (EN L2922, 2987, 3004), the file `docs/audits/2026-11-04-audit-en.md` (L2896, L3350), the PR title *Audit 2026-11-04: …* (L2936), the commit message *merge 2026-11-04 audit report …* (L2962), and the session id `20260826_010858_06165c` (L2521). RO: the same names on its twin lines.
- **History of the world:** the moth of July 1947 and the logbook page of 9 September 1947, Edison's 1870s (DAY 39, EN L3356, 3358; RO L3386, 3388).
- **The chart's own forecast** (DAY 33, EN L2594; RO L2624): "M0 in mid-April", "job-ready around March 2027", "an offer plausible by May or June". These are words of a real document, quoted as content, not a date the narrator gives.
- **DAY 22 and earlier** are outside this change. DAY 22 already says *no ship's date* (EN L1285).

## 4. Keeping it true

When a new DAY is written, its real dates go here, in a new row of table 1, and nowhere in the journal's text (`docs/work-deontology.md` §10.3). If a date ever has to go back into the novel, this file says exactly which line it came from.
