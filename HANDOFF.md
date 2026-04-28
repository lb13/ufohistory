# Agent Handoff — UFO History Timeline

## The Project
A Hugo SSG site at `/home/user/ufohistory/ufohistory/` tracking UFO history.
Content lives in:
- `content/events/` — timeline events (frontmatter: Title, Description, SortDate, DisplayDate, Tags)
- `content/sources/` — source documents/videos
- `content/people/` — notable figures
Working branch: `claude/ufo-timeline-research-o0fHF`

## Operational Rules (important — previous agent kept timing out)
1. **One task per response.** No multi-file batches.
2. **No long preambles.** Read TASKS.md, pick the first incomplete item, do it, done.
3. **Large inputs go to files first.** If a transcript or document is provided, write it to `/home/user/ufohistory/transcripts/` before processing it.
4. **Commit after each task** with `git add <specific files> && git commit`.
5. **Push when committing** with `git push -u origin claude/ufo-timeline-research-o0fHF`.

## What Has Been Done
All files committed and pushed to the working branch.

### Sources created
- `content/sources/red-panda-koala-cia-air-force-ufo-stigma.md`
- `content/sources/red-panda-koala-science-and-ufos.md`
- `content/sources/uap-gerb-northrop-grumman-trw-legacy-programs.md` ← **stub only, needs full rewrite**
- `content/sources/jason-samosa-tom-delonge-full-story.md`

### Events created
- `content/events/1947-12-30-project-sign-established.md`
- `content/events/1948-09-estimate-of-the-situation.md`
- `content/events/1949-02-11-project-grudge.md`
- `content/events/2002-07-01-northrop-acquires-trw.md` ← **stub only, needs enhancement**
- `content/events/2017-10-04-ttsa-launches.md`

## What Needs Doing (in order)
See TASKS.md for the live list. Current queue:

1. **Write transcript to file** — The user will provide the UAP Gerb transcript again. Write it immediately to `/home/user/ufohistory/transcripts/uap-gerb-northrop-grumman-trw-vol2.md` before doing anything else with it.
2. **Rewrite UAP Gerb source file** — `content/sources/uap-gerb-northrop-grumman-trw-legacy-programs.md` is a stub. Rewrite from the transcript with full annotations. Read the transcript file; do not re-read it from chat.
3. **Create event** — 1953 Kingman, Arizona crash retrieval
4. **Create event** — 1960 Aerospace Corporation founded (TRW spinoff)
5. **Create people file** — Dr. Edward Bushnell Dole (1912–1998)
6. **Create people file** — Stephanie O'Sullivan
7. **Create people file** — Terry Phillips
8. **Create people file** — Richard Haver
9. **Enhance event** — `2002-07-01-northrop-acquires-trw.md` with IRAD figures, NATDC detail, Tahone facility, key personnel

## Key Facts from the UAP Gerb Transcript
(Enough to work from if the transcript isn't re-provided)

**UAP Gerb's legacy programme pyramid:**
- Top: UFO Control Group (Dick Cheney until Jan 2009; James Clapper closest since)
- Level 2: Legacy Programme Administrators (DoD/IC directorates)
- Level 3: FFRDCs — MITRE, Aerospace Corporation, RAND, Sandia, Los Alamos, Oak Ridge
- Bottom: Prime contractors — Lockheed, Northrop, Boeing, SAIC, Raytheon, General Dynamics

**Key people to document:**
- **Dr. Edward Bushnell Dole** (1912–1998): PhD EE; Manhattan Project (Project Alberta); Stanford/SRI; director of military effects group Operation Upshot-Knothole (March 1953); named by witness Arthur Stansel Jr. as coordinator of 1953 Kingman AZ crash retrieval; VP then SVP then EVP TRW Systems Group (1955–1977)
- **Stephanie O'Sullivan**: TRW ~1982–1985 (data-masked "sensitive projects"); Office of Naval Intelligence; CIA DS&T deputy director; PDDNI under Clapper 2011–2017; named by Grusch as managing crash retrieval issue alongside Clapper; now chairman Aerospace Corporation; also on boards of Battelle, Booz Allen Hamilton, Huntington Ingalls, InQtel
- **Terry Phillips**: AFOSI → Executive Director AFOSI Office of Special Projects (PJ) → Air Force SAP security director (entire AF) → SES Tier 1 → LEIDOS VP security 2022 → Northrop Grumman VP security 2023–present; alleged to run Northrop's UFO programme security apparatus
- **Richard Haver**: Deputy Director Naval Intelligence 1985–89; handpicked by Dick Cheney 1989 as "assistant to SecDef for intelligence policy" (new role created for him); TRW VP intelligence programmes 1999; Northrop Grumman VP intelligence programmes →2010; again selected by Cheney for intelligence presidential transition team early 2000s

**1953 Kingman AZ crash:**
- Primary witness: Arthur Stansel Jr. (pseudonym "Fritz Warner"); engineer, Air Research and Development Command, Wright-Patterson
- Disclosed 1973 to researcher Raymond Fowler; signed affidavit
- May 20 1953: Stansel diary — "funny call from Dr. D about 1000. I'm going on a special job tomorrow"
- May 21 1953: Taken by blacked-out bus (~3–4 hrs) to Kingman area; saw ~30ft oval craft, brushed-aluminium appearance; two bodies in tent (brown leathery skin, silver skull caps)
- Dr. Eric Henry Wang named as reverse engineering team lead
- Dr. Ed Dole named as coordinator who summoned Stansel

**TRW IRAD scandals:**
- 1986: VP departed over IRAD overcharging
- 1989: GAO investigated for IRAD misclassification
- 1990–1997: Five separate IRAD fraud schemes
- 2003: Northrop paid $111.2M to settle False Claims Act for TRW's fraud
- April 5 1982 CIA memo: CIA DS&T explicitly sought to channel IRAD funds through TRW, Lockheed, E Systems, Rockwell, Harris

**IRAD figures:**
- TRW: $468M (1999), $442M (2000), $442M (2001)
- Northrop post-acquisition: $429M (2003), ~$540M (2004), $538M (2005)

**Northrop Advanced Technology and Design Center (NATDC):**
- Formed by 1991 at Pico Rivera, CA (B2 bomber site)
- Key personnel: BGen Delbert H. Jacobs (VP/centre manager 1995), Irv Walland (VP/chief designer, designed B2), Richard Kerrion (propulsion engineer)
- Last public reference: 1999 NASA paper
- 2000–2001: Moved to El Segundo, renamed Advanced Systems Development Center (ASDC)
- 2003: All references disappear

**Tahone RCS facility:**
- Northrop radar cross-section test range, Antelope Valley near Palmdale
- Used for B2 stealth testing; extensive underground infrastructure
- Northrop bought 1,415 acres 1998; "officially closed" 2011
- November 2024: Sold to EDF Power Solutions → Scout Clean Energy / Keyhole Wind LLC
- Explorers (Anders/Uncanny Expeditions; Wasteland by Wednesday) found site "too clean for 14 years abandoned"; Project Blue Book docs found in admin building; locked generator building with ventilation shaft to underground

**Project ZODIAC:**
- Alleged crash retrieval programme; TRW named as managing entity
- 1998 UFO Magazine, 3-part series by pseudonyms "Greg Halifax" / "Sedge Masters"
- Richard Dolan identified: attorney Jeffrey W. Griffith (TRW/Hughes) = "Greg Halifax"; Mary Elizabeth Elliott = "Sedge Masters"
- Eric Davis told Jacques Vallee (March 3 2001, Forbidden Science): 10 Velobind volumes at Wright-Patterson with Roswell data and a TRW special study

## Event Frontmatter Format
```yaml
---
Title: Event Title Here
Description: One or two sentence description.
SortDate: YYYY-MM-DD
DisplayDate: "YYYY Month DDth"
Tags:
- tag1
- tag2
---
```
