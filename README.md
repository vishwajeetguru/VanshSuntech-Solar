# VNSH SunTech — Solar Website Frontend & WordPress Integration Guide

A modern, production-grade, fully responsive website redesign for **VNSH SunTech**, a premier solar energy installation company serving **Gwalior, Madhya Pradesh, India**.

Designed with a clean, trustworthy white-first visual theme with deep navy and cobalt blue branding, built using React, TypeScript, and Tailwind CSS. All content is modularized into data models to enable straightforward integration into WordPress via the REST API, Advanced Custom Fields (ACF), or Gutenberg custom blocks.

---

## 1. How to Run the Project Locally

### Prerequisites
- Node.js v22 (tested on v22.18.0)
- npm v11 (tested on v11.18.0)

### Installation & Development
```bash
# 1. Install all dependencies
npm install
# If you hit an ERESOLVE peer-dependency error (esbuild vs vite),
# retry with legacy peer deps:
npm install --legacy-peer-deps

# 2. Start the local development server (http://localhost:3000)
npm run dev

# 3. Compile and build for production (outputs to dist/)
npm run build

# 4. Preview the production build locally
npm run preview

# 5. Type-check without emitting
npm run lint
```

> Dev server runs on port 3000 with host `0.0.0.0` (see `package.json` → `scripts.dev` and `vite.config.ts`).
> If port 3000 is busy: `npx vite --port=3001 --host=0.0.0.0`.

### Troubleshooting install (ERESOLVE)
This repo pins `vite ^8.3.0` with `@tailwindcss/vite ^4.3.3` and `tsx` (which pulls its own nested `esbuild`).
npm's strict peer resolution can fail with:
`Conflicting peer dependency: esbuild@0.28.2 ... peerOptional esbuild@"^0.27.0 || ^0.28.0" from vite@8.3.4`.
Fix: `npm install --legacy-peer-deps`. This accepts the nested esbuild copy and builds fine.

---

## 2. Project Architecture & File Organization

The application is built with a decoupled architecture where business content, presentation components, and form handlers are strictly separated:

```
public/
├── solar-showcase-collage.png   # 3-col x 2-row collage for Our Products and Services → /solar-showcase-collage.png
└── solar-solutions-collage.png  # 3-col x 2-row collage for Our Happy Customers gallery → /solar-solutions-collage.png
src/
├── types/
│   └── index.ts                 # TypeScript interfaces for services, FAQs, testimonials, forms
├── data/
│   ├── siteContent.ts           # General site metadata, hero text, navigation links, contact info
│   ├── services.ts              # 6 solar products & service definitions
│   ├── testimonials.ts          # Customer testimonials & locations
│   ├── faqs.ts                  # All 8 FAQ questions & detailed answers
│   └── gallery.ts               # Installation gallery showcase items & technical specs
├── components/
│   ├── ui/
│   │   ├── BrandLogo.tsx         # SVG sunburst logo & typography mark
│   │   ├── SectionHeading.tsx    # Reusable heading with accessibility & balanced wrapping
│   │   ├── SolarIllustration.tsx # Zero-dependency SVG solar rooftop & component graphics
│   │   └── LightboxModal.tsx     # Keyboard-accessible full-screen gallery viewer (Esc, ←, →)
│   ├── forms/
│   │   └── ConsultationForm.tsx  # Free consultation form with Indian phone & pincode validation
│   ├── layout/
│   │   ├── Header.tsx            # Sticky desktop header with strict Top-Bar contract
│   │   ├── MobileNavigation.tsx  # Accessible mobile slide-out drawer menu
│   │   ├── Footer.tsx            # Clean blue & white footer with dynamic copyright year
│   │   └── BackToTop.tsx         # Floating scroll-to-top button
│   └── sections/
│       ├── HeroSection.tsx       # 2-column hero with value proposition & lead capture
│       ├── ServicesSection.tsx   # 6 solar service cards with enquiry triggers
│       ├── ServiceCard.tsx       # Individual solar service card
│       ├── SolarCalculator.tsx   # Interactive solar capacity & terrace sizing estimator
│       ├── HowItWorksSection.tsx # 4-step workflow timeline
│       ├── ProcessStep.tsx       # Individual step card with numbered badges
│       ├── BenefitsSection.tsx   # Why Choose VNSH SunTech (4 verified benefit cards)
│       ├── BenefitCard.tsx       # Individual benefit card with hairline borders
│       ├── AboutSection.tsx      # Introducing VNSH SunTech & Gwalior site team
│       ├── InstallationGallery.tsx # Category-filtered installation gallery
│       ├── TestimonialsSection.tsx # Happy customers review cards
│       ├── TestimonialCard.tsx   # Individual testimonial card with star visuals
│       ├── FAQSection.tsx        # Accessible single-open accordion
│       ├── FAQItem.tsx           # Individual FAQ item with ARIA expanded state
│       ├── ContactSection.tsx    # Contact hub with Google Maps embed
│       └── ContactInformation.tsx # Meet Us, Call Us, and Email Us cards
├── App.tsx                       # Main page layout orchestration
├── main.tsx                      # React root entry point
└── index.css                     # Tailwind CSS & theme tokens
```

---

## 3. How to Replace Images and Logo

### Replacing the Brand Logo
Edit `src/components/ui/BrandLogo.tsx`:
- To use an image logo (PNG, SVG, WebP) uploaded to WordPress or `/public`:
  ```tsx
  export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'header' }) => (
    <a href="#home" className="inline-flex items-center gap-3">
      <img
        src="/assets/vnsh-logo.png"
        alt="VNSH SunTech Logo"
        className="h-10 w-auto"
      />
    </a>
  );
  ```

### Replacing Gallery & Showcase Images
The **Our Happy Customers** gallery (`src/components/sections/InstallationGallery.tsx`, data in `src/data/gallery.ts`) uses the same CSS-sprite technique as Products & Services — one file, `public/solar-solutions-collage.png` (served as `/solar-solutions-collage.png`), sliced 3 cols × 2 rows via `.solar-solutions-sprite` in `src/index.css` (`background-size: 300% 200%`). Positions are keyed by item `id` (`solutionsSpriteCoordinates` in both `InstallationGallery.tsx` and `LightboxModal.tsx`, so category filtering never misaligns images):
  - `gallery-1` Residential Rooftop: Col 1, Row 1 (`0% 0%`)
  - `gallery-2` Commercial Rooftop: Col 2, Row 1 (`50% 0%`)
  - `gallery-3` Agri Solar Pump: Col 3, Row 1 (`100% 0%`)
  - `gallery-4` Water Heater: Col 1, Row 2 (`0% 100%`)
  - `gallery-5` Hybrid + Batteries: Col 2, Row 2 (`50% 100%`)
  - `gallery-6` Institutional Array: Col 3, Row 2 (`100% 100%`)
To swap photos, overwrite `public/solar-solutions-collage.png` keeping the same 3×2 cell order. For WordPress media URLs instead, set `imageUrl` per item in `src/data/gallery.ts`:
```ts
export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Residential Rooftop Grid-Tied Solar System',
    category: 'Residential',
    imageUrl: 'https://your-wordpress-site.com/wp-content/uploads/2026/01/rooftop-solar.jpg',
    ...
  }
];
```

### Using the Products & Services CSS Sprite
The Products & Services section uses a high-performance **3-column by 2-row CSS Sprite** (`public/solar-showcase-collage.png`, served as `/solar-showcase-collage.png`):
- The file MUST live at the repo-root `public/` folder with this exact lowercase, no-spaces name. Vite only serves `<root>/public` — `src/public/` is ignored and any `src/public/Solar Energy Showcase Collage.png` copy is stale (safe to delete).
- The sprite is sliced in `src/index.css` (`.solar-showcase-sprite` → `background-size: 300% 200%`, single `url('/solar-showcase-collage.png')`) and positioned per card in `src/components/sections/ServiceCard.tsx` (`spriteCoordinates`):
  - **On-Grid Solar** (`on-grid`): Col 1, Row 1 (`0% 0%`)
  - **Off-Grid Solar** (`off-grid`): Col 2, Row 1 (`50% 0%`)
  - **Hybrid Solar** (`hybrid-solar`): Col 3, Row 1 (`100% 0%`)
  - **Solar Water Pump** (`solar-water-pump`): Col 1, Row 2 (`0% 100%`)
  - **Solar Water Heater** (`solar-water-heater`): Col 2, Row 2 (`50% 100%`)
  - **All Solar Products** (`all-solar-products`): Col 3, Row 2 (`100% 100%`)
- Each card maintains an underlying SVG illustration fallback (`SolarIllustration`) so cards never appear empty while the image loads, plus a `role="img"` + `aria-label` on the sprite layer and a preload hint in `index.html` (`<link rel="preload" as="image" href="/solar-showcase-collage.png" />`).
- To replace the collage: overwrite `public/solar-showcase-collage.png` keeping the same 3×2 cell order, or update `spriteCoordinates` + the `.sprite-*` classes in `src/index.css` to match the new layout.

---

## 4. How to Edit Business Content

All copy is consolidated into single files under `src/data/`:
1. **Phone, Email & Hospital Road Address**: Edit `src/data/siteContent.ts` -> `contactData`.
2. **Hero Copy & Eyebrow**: Edit `src/data/siteContent.ts` -> `siteMetadata`.
3. **Services & Products**: Edit `src/data/services.ts` -> `solarServices`.
4. **Customer Reviews**: Edit `src/data/testimonials.ts` -> `testimonials`.
5. **Frequently Asked Questions**: Edit `src/data/faqs.ts` -> `faqsList`.

---

## 5. How to Connect the Consultation Form to WordPress

In `src/components/forms/ConsultationForm.tsx`, the submission handler is completely isolated in `submitConsultationLead()`:

### Option A: Direct WordPress Custom REST API Endpoint (Recommended)
Add this custom endpoint in your WordPress theme's `functions.php`:
```php
add_action('rest_api_init', function () {
  register_rest_route('vnsh/v1', '/consultation', array(
    'methods' => 'POST',
    'callback' => 'vnsh_handle_consultation',
    'permission_callback' => '__return_true',
  ));
});

function vnsh_handle_consultation($request) {
  $params = $request->get_json_params();
  $name = sanitize_text_field($params['fullName']);
  $phone = sanitize_text_field($params['whatsappNumber']);
  $bill = sanitize_text_field($params['monthlyBill']);
  $pincode = sanitize_text_field($params['pincode']);

  // 1. Save as Custom Post Type 'solar_lead' or send email
  $lead_id = wp_insert_post(array(
    'post_type' => 'solar_lead',
    'post_title' => $name . ' - ' . $phone,
    'post_status' => 'publish',
  ));

  update_post_meta($lead_id, '_bill_range', $bill);
  update_post_meta($lead_id, '_pincode', $pincode);

  // 2. Send email notification to support@vnshsuntech.com
  wp_mail(
    'support@vnshsuntech.com',
    'New Solar Lead: ' . $name,
    "Name: $name\nWhatsApp: $phone\nBill: $bill\nPincode: $pincode"
  );

  return new WP_REST_Response(array(
    'success' => true,
    'message' => 'Consultation booked successfully',
    'leadId' => 'VNSH-' . $lead_id
  ), 200);
}
```

In `src/components/forms/ConsultationForm.tsx`, replace the simulated function with:
```ts
export async function submitConsultationLead(formData: ConsultationFormData): Promise<ConsultationSubmissionResult> {
  const response = await fetch('/wp-json/vnsh/v1/consultation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  return await response.json();
}
```

### Option B: Contact Form 7 / WPForms Integration
You can submit the form directly to the CF7 REST API endpoint:
`POST /wp-json/contact-form-7/v1/contact-forms/{form-id}/feedback` with `FormData`.

---

## 6. How to Retrieve Dynamic Content from WordPress REST API

To fetch services, testimonials, or FAQs dynamically from WordPress custom post types (CPTs):

```ts
// Example: Fetching services from WordPress REST API
export async function fetchWordPressServices(): Promise<ServiceItem[]> {
  const res = await fetch('/wp-json/wp/v2/solar_service?_embed');
  const data = await res.json();
  return data.map((post: any) => ({
    id: post.slug,
    title: post.title.rendered,
    description: post.content.rendered.replace(/<[^>]+>/g, ''),
    badge: post.acf?.service_badge || '',
    suitableFor: post.acf?.suitable_for || '',
    benefits: post.acf?.benefits || [],
    iconName: post.acf?.icon_name || 'Sun',
  }));
}
```

---

## 7. Migration Strategies for WordPress

### Strategy 1: Enqueued Standalone React Build inside WordPress Theme (Fastest & Most Reliable)
1. Run `npm run build` in this repository.
2. Copy the resulting `dist/assets/*.js` and `dist/assets/*.css` into your WordPress active theme directory: `wp-content/themes/vnsh-suntech/assets/`.
3. In your theme's `functions.php`:
   ```php
   function vnsh_enqueue_react_app() {
     if (is_front_page()) {
       wp_enqueue_style('vnsh-app-style', get_template_directory_uri() . '/assets/index.css', array(), '1.0');
       wp_enqueue_script('vnsh-app-script', get_template_directory_uri() . '/assets/index.js', array(), '1.0', true);
     }
   }
   add_action('wp_enqueue_scripts', 'vnsh_enqueue_react_app');
   ```
4. In your theme's `front-page.php`:
   ```php
   <?php get_header(); ?>
   <div id="root"></div>
   <?php get_footer(); ?>
   ```

### Strategy 2: Modular Gutenberg Custom Block (Full Site Editing)
Using `@wordpress/scripts`, convert each component (e.g., `HeroSection`, `ServicesSection`, `SolarCalculator`, `ConsultationForm`) into a native Gutenberg block so content editors can drag, drop, and edit text directly in the WordPress Block Editor.

---

## 8. Realities and Limitations of Using React in WordPress

1. **SEO & Server-Side Rendering**: 
   - A client-only React SPA (`<div id="root"></div>`) is rendered in the browser. For best SEO in WordPress, ensure semantic HTML and meta tags are rendered in the PHP template or utilize WordPress plugins (like Yoast SEO or Rank Math) to output `<title>`, `<meta name="description">`, and JSON-LD schema into `<head>`.
2. **Shortcode & Plugin Conflicts**:
   - Other WordPress plugins that inject jQuery or CSS stylesheets may cause style collision. The Tailwind CSS variables and scoping here ensure strict style encapsulation.
3. **Form Security**:
   - When submitting to the WordPress REST API, always verify a WordPress Nonce (`wp_create_nonce('wp_rest')`) if CSRF protection is required.
