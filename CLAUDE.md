# Landing Page Generation Prompt

I have provided a reference image and also some CSS classes and style notes:

Generate a single index.html file using Tailwind CSS (via CDN). Include all content inline. Screenshot the rendered page using Puppeteer. If the page has distinct sections, capture those individually too. Compare your screenshot against the reference image. Check for mismatches in:
- Spacing and padding (measure in px)
- Font sizes, weights, and line heights
- Colors (exact hex values)
- Alignment and positioning
- Border radii, shadows, and effects
- Responsive Behavior
- Image/icon sizing and placement.

Fix every mismatch found. Edit the HTML/Tailwind code.
Re-screenshot and compare again.
Repeat those steps until the result is within ~2-3px of the reference everywhere.

Do NOT stop after one pass. Always do at least 2 comparison rounds. Only stop when the user says so or when no visible differences remain.

## Technical Defaults

- Use Tailwind CSS via CDN
- Use placeholder images from 'https://placehold.co/' when source images aren't provided
- Mobile-first responsive design
- Single index.html file unless the user requests otherwise

## Style Notes

```css
--highlight-background-color--normal: hsl(50deg 100% 50% / 15%) !important;
--highlight-background-color--normal-with-alpha: hsl(50deg 100% 50% / 15%) !important;
--highlight-background-color-underline: hsl(50deg 100% 50% / 100%) !important;
--highlight-background-color--active: hsl(50deg 100% 50% / 20%) !important;
--highlight-image-background-color--normal: hsl(50deg 100% 50% / 30%) !important;
--highlight-image-background-color--active: hsl(50deg 100% 50% / 50%) !important;
--highlight-resize-handle-background-color: rgb(220, 185, 0) !important;
--highlight-resize-handle-background-color--alternative: #767ccc !important;
--js_highlight-normal: #fcf6bf !important;
--highlight-background-color--alternative: #CDCDFE !important;
--highlight-background-color--alternative--active: #b1b7fe !important;
--highlight-text-color: #000 !important;
--highlight-icon-color: rgba(0, 0, 0, .6) !important;
--vimium-background-color: white;
--vimium-background-text-color: black;
--vimium-foreground-color: white;
--vimium-foreground-text-color: black;
--vimium-link-color: blue;
--one-if-corner-shape-supported: 1;
-webkit-font-smoothing: inherit;
transition: opacity ease-in 0.2s;
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: sans-serif;
font-size: 12px;
--token-b32e81a7-2b80-4d29-8e7c-c9fc082a50cd: #fff;
--token-408e71c9-4566-4212-bc6e-84c9096767e0: #2bece8;
--token-eb810c53-6a5c-4b38-bbeb-860f0ff36e22: #d4f1be;
--token-83609f16-7c83-45a8-a2ab-2ad7647ddd68: #011;
--token-cbbaa8ee-a292-443b-b7e9-a9e8dc114e69: #000;
--token-201d4f77-74dd-408b-ad87-b1620238ec04: #fff6;
--token-9b684e86-c840-4ef6-9f07-b97fb200685a: #fff9;
--token-f8c2e6c0-5f8f-4ae1-9bd8-1f69b5177fc4: #0006;
--token-b3cbc747-b711-47ad-b4c3-ad497dfd71ca: #2bece899;
--token-c38fe382-4334-4f13-9e61-f5de89fe0e68: #0009;
--token-e3270c02-a1b9-4ac8-9851-1019c5594cdc: #ffffff1a;
--token-4bffd0bf-5423-4ecd-9060-9be169ab83cf: #fff;
--token-4dc131b8-c8c2-405a-9f83-53592aa6fa93: #fff9;
--framer-will-change-override: none;
--framer-will-change-filter-override: none;
--framer-aspect-ratio-supported: auto;
background: var(--token-cbbaa8ee-a292-443b-b7e9-a9e8dc114e69, rgb(0, 0, 0));
```
