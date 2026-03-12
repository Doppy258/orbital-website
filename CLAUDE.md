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