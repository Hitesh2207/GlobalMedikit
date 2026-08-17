# Global Medikit multilingual website

## How language switching works
The ready-made demo uses the custom country/language selector plus Google Translate for the existing full website, so hardcoded page content also changes language immediately. Curated translation keys remain available for future production localization.

### Run
```bash
npm install
npm run dev
```

### Important
Internet access is required for Google Translate to load. For production, replace Google Translate with approved human-reviewed translations stored in the Spring Boot/MySQL CMS.
