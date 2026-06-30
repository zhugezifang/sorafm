# Hotel Corporate Codes

Hotel Corporate Codes is a multilingual hotel corporate discount code website built with Next.js. The project helps travelers browse hotel corporate codes for major hotel groups, compare available company rates, and open detail pages where a code can be copied for booking research.

[Visit Corporate Codes](https://corporate-codes.online/en)

## Project Overview

This project is focused on pages for hotel corporate discount codes. Each hotel brand has its own landing page with metadata, descriptive content, a corporate code table, and links to individual code detail pages.

At its core, this repository maintains a hotel corporate code database. The database organizes public-facing hotel discount information by brand, company, hotel group, and corporate code, then turns that structured data into searchable pages for travelers, editors, and SEO content operations.

The site is designed for users who want to:

- Find hotel corporate codes by hotel group and company name.
- Browse corporate discount pages for Hilton, Marriott, Hyatt, IHG, and other hotel brands.
- Copy a specific corporate code from a dedicated detail page.
- Read supporting guides and blog content about hotel corporate rates, employee rates, and booking tips.
- Access localized versions of the site in multiple languages.

## Hotel Corporate Code Database

The hotel corporate code database is a structured collection of company hotel rate identifiers. A corporate code is usually assigned through an agreement between a hotel group and an organization, employer, agency, university, government program, contractor network, or travel partner. When a traveler enters the correct code during a hotel search, the booking engine may show a negotiated rate if the traveler is eligible and the hotel accepts that code for the selected stay.

This project presents those records in a user-friendly directory. Instead of requiring users to search scattered forum posts, old spreadsheets, or unstructured articles, the database groups codes by hotel brand and keeps each entry in a consistent format.

Current English data includes 255 corporate code records across Hilton, Marriott, Hyatt, IHG, Best Western, Choice Hotels, Omni, Accor, Wyndham, and Radisson.

The database is useful for:

- Business travelers checking whether their company has a known hotel corporate code.
- Employees and consultants comparing possible negotiated rates before booking.
- Travel planners collecting hotel rate references for common hotel groups.
- SEO editors maintaining hotel discount landing pages and long-tail code detail pages.
- Developers who need structured example data for dynamic hotel code pages.

Each record is intentionally simple:

| Column | Description |
| --- | --- |
| `Company` | Organization, employer, program, travel rate name, or partner associated with the code. |
| `Hotel` | Hotel group or brand family where the code is listed. |
| `Corporate_Code` | The code value shown to users. Some entries use `-` when the brand/company combination is tracked but no public code is listed. |

The project stores featured rows and full datasets separately:

- `data`: A shorter set of featured records shown on the homepage.
- `all_data`: The full brand-level table rendered on each hotel page.

This split lets the homepage stay readable while brand pages can provide a deeper database view.

## Database Coverage

The current database focuses on large international hotel groups and recognizable corporate travel programs. It includes loyalty ecosystems such as Hilton Honors, Marriott Bonvoy, World of Hyatt, IHG One Rewards, Wyndham Rewards, and Radisson, plus additional hotel families like Best Western, Choice Hotels, Omni, and Accor.

The database is designed to answer common search questions such as:

- What is the Hilton corporate code for a specific company?
- Which Marriott corporate codes are available in the directory?
- Does Hyatt have listed corporate codes for consultants or employees?
- Which IHG corporate code pages should be linked from related travel content?
- How many corporate code records are available for each hotel brand?

Because hotel rate programs can change, the database should be treated as an editorial reference rather than a guarantee of eligibility or savings. The README and website both encourage users to confirm terms with the hotel or their organization before booking.

## Main Features

- Hotel code directory: Lists corporate codes by company, hotel brand, and code.
- Brand pages: Dedicated pages for each supported hotel group, including SEO title and description content from dictionary files.
- Code detail pages: Dynamic routes for individual company and hotel code combinations.
- Multilingual content: English, Simplified Chinese, Traditional Chinese, Japanese, Korean, French, and German dictionaries.
- SEO metadata: Page-level metadata is generated from localized dictionary content.
- Blog pages: Markdown-backed and dictionary-driven travel discount articles.
- Static assets: Hotel brand images, preview images, favicon, sitemap, and ad files live under `public/`.
- Edge runtime: Main pages are configured for the Next.js edge runtime.
- Analytics and monetization hooks: Vercel Analytics and ad script integrations are included.

## User Experience

The site turns the database into a simple browsing flow:

1. The homepage introduces the hotel corporate code directory and highlights major hotel groups.
2. Users select a hotel brand such as Hilton, Marriott, Hyatt, or IHG.
3. The brand page displays a complete table of company names and corporate codes.
4. Users open a detail page for a specific company-code pair.
5. The detail page provides a focused copy action and links back to related hotel code pages.

This flow supports both quick lookups and search-engine landing pages. A user can arrive on the homepage, a brand page, a blog page, or a specific code detail page and still navigate to related records.

## Supported Hotel Brands

The English dictionary currently includes these hotel groups:

| Brand | English Page Title | Total Codes |
| --- | --- | ---: |
| Hilton | Hilton Corporate Codes 2026 | 54 |
| Marriott | Marriott Corporate Codes 2026 | 67 |
| Hyatt | Hyatt Corporate Codes 2026 | 27 |
| IHG | IHG Corporate Codes 2026 | 31 |
| Best Western | Best Western Corporate Codes 2026 | 11 |
| Choice Hotels | Choice Hotels Corporate Codes 2026 | 4 |
| Omni | Omni Corporate Codes 2026 | 1 |
| Accor | Accor Corporate Codes 2026 | 2 |
| Wyndham | Wyndham Corporate Codes 2026 | 13 |
| Radisson | Radisson Corporate Codes 2026 | 45 |

Each hotel object generally contains:

| Field | Purpose |
| --- | --- |
| `name` | Brand key used in URLs and dynamic pages. |
| `t0` | Short display name for hotel cards. |
| `title` | SEO and page heading text. |
| `url` | Internal brand page path. |
| `des` | Brand page description. |
| `data` | Featured rows shown on the home page. |
| `all_data` | Full table shown on the brand page. |
| `summary` | Markdown-style guide content rendered on the brand page. |

## Updating the Hotel Code Database

To add or update hotel corporate code records:

1. Open the relevant dictionary file, usually `dictionaries/en.json`.
2. Find the hotel key, for example `Hilton`, `Marriott`, `Hyatt`, or `IHG`.
3. Add homepage-worthy records to `data` if they should appear in the featured tables.
4. Add complete records to `all_data` so they appear on the hotel brand page.
5. Keep each row consistent with the `Company`, `Hotel`, and `Corporate_Code` fields.
6. Update `des` or `summary` when the brand page needs new explanatory content.
7. Mirror important changes into other language dictionaries when localized pages should stay aligned.

Recommended data hygiene:

- Keep hotel brand names consistent across rows.
- Avoid duplicate company-code entries unless there is a clear reason.
- Use `-` only when a company is intentionally listed but no code is available.
- Check whether a code is still valid before presenting it as active.
- Keep descriptions factual and avoid promising a guaranteed discount.

## Example Data Model

```json
{
  "Company": "Accenture",
  "Hotel": "Hilton",
  "Corporate_Code": "10850857"
}
```

Hotel-level content is grouped like this:

```json
{
  "name": "Hilton",
  "title": "Hilton Corporate Codes 2026",
  "url": "codePage/Hilton",
  "des": "Short SEO description for the Hilton code page.",
  "data": [],
  "all_data": [],
  "summary": "Markdown-style guide content"
}
```

## Usage Note

Corporate rates can be restricted by employer, membership, contract, location, or booking channel. Users should verify eligibility and rate terms directly with the hotel or their organization before booking.

## Compliance and Eligibility Notes

Hotel corporate codes are not always public promotions. Many are intended only for qualified employees, contractors, consultants, government travelers, university guests, or partner organizations. A code appearing in this database does not mean every visitor is eligible to use it.

Users should be prepared to:

- Confirm eligibility with their employer or travel department.
- Show company identification or proof of affiliation when requested.
- Review rate rules before booking.
- Compare the corporate rate with public rates, member rates, AAA/AARP rates, and promotional offers.
- Avoid using codes that belong to organizations they are not affiliated with.

The database is best used as a discovery and research tool, not as a substitute for hotel policy verification.

## All Corporate Codes Data

### Hilton Corporate Codes

| Company | Hotel | Corporate Code |
| --- | --- | --- |
| 3M | Hilton | N0001542 |
| Accenture | Hilton | 10850857 |
| Accenture | Hilton | N0156333 |
| Akzo Noble | Hilton | 402371223 |
| AT&T | Hilton | N0000046 |
| Bank of America | Hilton | N0710081 |
| BASF | Hilton | N0001125 |
| Berkshire Hathaway | Hilton | N0437015 |
| Blackstone | Hilton | N9880578 |
| BP International | Hilton | N2728493 |
| CapGemini | Hilton | N0990552 |
| Coca Cola | Hilton | N0001420 |
| Dell | Hilton | N7654328 |
| Deloitte | Hilton | 601560 |
| Disney | Hilton | N0997136 |
| Dow Chemical | Hilton | N0990214 |
| Fedex | Hilton | N0001231 |
| FFEIE | Hilton | D600198360 |
| Fiat Chrysler | Hilton | N2674000 |
| Ford Motor Company | Hilton | N0900266 |
| General Electric | Hilton | N0001398 |
| General Electric | Hilton | 0072799100 |
| General Motors | Hilton | N0903395 |
| Harley Davidson | Hilton | N3846652 |
| Home Depot | Hilton | N0794705 |
| HP | Hilton | 9122532 |
| IBM | Hilton | 1368083 |
| IBM | Hilton | 901452 |
| IBM | Hilton | N2666284 |
| JC Penney | Hilton | N0381437 |
| Masco | Hilton | N0990761 |
| McDonald's | Hilton | N1360871 |
| McKesson | Hilton | N9890367 |
| McKinsey | Hilton | N2741095 |
| MVP | Hilton | 560041604 |
| Nestlé | Hilton | N4083580 |
| Oracle | Hilton | N0992835 |
| Proctor & Gamble | Hilton | N0000537 |
| Shell | Hilton | N0000576 |
| Siemens | Hilton | 323009803 |
| Sixt | Hilton | D343260360 |
| Target | Hilton | N4083735 |
| Volvo | Hilton | N2435318 |
| Volvo Car Corp | Hilton | 355019365 |
| Wells Fargo | Hilton | N0156393 |
| Microsoft | Hilton | - |
| Amazon | Hilton | - |
| Raytheon Technologies | Hilton | - |
| Blackstone Group | Hilton | 560054725 |
| PricewaterhouseCoopers | Hilton | - |
| Wells Fargo | Hilton | N0156393 |
| Lockheed Martin | Hilton | - |
| MVP | Hilton | - |
| Aya Healthcare | Hilton | - |

### Marriott Corporate Codes

| Company | Hotel | Corporate Code |
| --- | --- | --- |
| 3M | Marriott | MMM |
| Accenture | Marriott | ACC |
| Aetna | Marriott | AET |
| Affiliated Computer Services | Marriott | ACS |
| Alaska Airlines | Marriott | A70 |
| Allstate | Marriott | ALL |
| American Airlines | Marriott | AA8 |
| American Express | Marriott | AMX |
| American Family Insurance | Marriott | AFI |
| American International Group | Marriott | AIG |
| American Online | Marriott | AOL |
| Amway | Marriott | AMW |
| APAC | Marriott | 253568 |
| APL Apple | Marriott | APL |
| Applied Materials | Marriott | APP |
| AT&T | Marriott | ATT |
| ATK | Marriott | 259552 |
| Bank of America | Marriott | BOA |
| Bank One | Marriott | BOB |
| Bechtel | Marriott | BEC |
| Bellsouth | Marriott | 256810 |
| Best Avail Rate | Marriott | BAR |
| Blackrock | Marriott | 340965 |
| BMS | Marriott | 5298 |
| BMW | Marriott | 5171 |
| Boeing | Marriott | CDH |
| Cardinal Health | Marriott | CFA |
| Chick Fil A | Marriott | 13365 |
| Cisco | Marriott | 260247 |
| Citi | Marriott | CIT |
| Clorox | Marriott | CLX |
| Coca Cola | Marriott | COK |
| Convergys | Marriott | CVG |
| CPI | Marriott | 281403 |
| CVS | Marriott | 283335 |
| DB | Marriott | 11353 |
| De Beers | Marriott | D86 |
| Dell | Marriott | DEL |
| Deloitte | Marriott | DTC |
| Delta | Marriott | DLA |
| Deutch Bank | Marriott | DBK |
| Disney Employees | Marriott | DIS |
| DTV | Marriott | 2754 |
| E&Y | Marriott | EDD |
| Eddie Bauer (Seattle area) | Marriott | EDS |
| Electronic Data Systems | Marriott | EMC |
| EMC employees | Marriott | XOM |
| Exxon Mobil | Marriott | 295936 |
| Fed Rooms | Marriott | FED |
| Federal Express | Marriott | 66272 |
| Federated | Marriott | FUS |
| Fleet Bank | Marriott | FLT |
| Florida Power | Marriott | FPL |
| Ford Motor Company | Marriott | FRD |
| Fuji | Marriott | FUJ |
| Gap, Inc | Marriott | GAP |
| GE | Marriott | GEE |
| General Dynamics | Marriott | GMC |
| General Electric | Marriott | GE |
| General Motors | Marriott | GMC |
| Gillette | Marriott | GGL |
| Goldman | Marriott | 17885 |
| Google | Marriott | 5105 |
| Harvard University | Marriott | 5444 |
| HP | Marriott | IBM |
| IBM | Marriott | 290717 |
| Intel | Marriott | INL |

### Hyatt Corporate Codes

| Company | Hotel | Corporate Code |
| --- | --- | --- |
| Bank of America | Hyatt | 17500 |
| BMW | Hyatt | 15985 |
| BNP | Hyatt | NC95864 |
| BP International | Hyatt | 27450 |
| Cisco | Hyatt | 79103 |
| Company TVL Rate | Hyatt | 86458 |
| Costco | Hyatt | 97920 |
| Credit Lyonnais | Hyatt | 88762 |
| Credit Suisse | Hyatt | 13365 |
| Daimler Benz | Hyatt | 68083 |
| Deloitte | Hyatt | 66267 |
| GE | Hyatt | 13516 |
| GE International | Hyatt | 12624 |
| General Electric | Hyatt | 99800 |
| General Motors | Hyatt | 20725 |
| Honda | Hyatt | 16700 |
| IBM | Hyatt | 13307 |
| Li & Fung | Hyatt | NC12964 |
| Lufthansa | Hyatt | 34235 |
| Morgan Stanley | Hyatt | 13717 |
| Samsung | Hyatt | 90010 |
| Samsung | Hyatt | 13717 |
| SAP America | Hyatt | 23240 |
| Senior Citizen | Hyatt | 57039 |
| TVL Rate | Hyatt | 24560 |
| TVL Rte | Hyatt | NC98733 |
| UBS | Hyatt | 17497 |

### IHG Corporate Codes

| Company | Hotel | Corporate Code |
| --- | --- | --- |
| Ace Hardware | IHG | 101672 |
| Arizona State University | IHG | 100862437 |
| AT&T | IHG | 150711 |
| Bank of America | IHG | 109568 |
| Bayer | IHG | 251321 |
| Cisco | IHG | 954410926 |
| Coca Cola | IHG | 128813 |
| ConocoPhillips | IHG | 262552 |
| Dell | IHG | 954284898 |
| Fedex | IHG | 109207 |
| Ford | IHG | 100016221 |
| Fujitsu | IHG | 102806 |
| GE | IHG | 100371240 |
| Honda | IHG | 243132 |
| IBM | IHG | 105406 |
| Kraft | IHG | 900000588 |
| Lafarge | IHG | 100211707 |
| Lowes | IHG | 924806 |
| Loyola University | IHG | 478113 |
| Microsoft | IHG | 100857558 |
| Motorola | IHG | 128554 |
| Network Appliance | IHG | 954284247 |
| NWCTA | IHG | 900033305 |
| Oracle | IHG | 100183394 |
| Philips | IHG | 953100013 |
| Rutgers University | IHG | 100189760 |
| Siemens | IHG | 104256 |
| Target | IHG | 888400 |
| Toyota | IHG | 954409548 |
| United Parcel Service | IHG | 108146 |
| University of Texas | IHG | 99502056 |
