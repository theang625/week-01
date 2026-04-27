### 2–4. Network Tab Observation
Opened a news site, hit **F12 → Network tab**, reloaded the page, and identified:
 
| Type | What I Found |
|------|-------------|
| HTML document | The main `.html` page loaded first (status 200) |
| CSS file | A `.css` stylesheet for page styling |
| JS file | A `.js` script for interactivity |
| Image | A `.jpg` or `.webp` image resource |
 
**HTML request headers observed:**
- `Request URL` – full URL of the page
- `Request Method` – `GET`
- `Status Code` – `200 OK`
- `Response Headers` – included `Content-Type: text/html`, `Cache-Control`, `Server`
### 5–6. Built hello.html in VS Code
Created `hello.html` using the slide 10 example structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).  
Double-clicked the file → browser opened it locally (`file:///...`). 
 
### 7. Committed to GitHub
```bash
git init
git add .
git commit -m "Week 01: add hello.html and README"
git remote add origin https://github.com/nhimdara/WCT-week1.git
git push -u origin main
```
