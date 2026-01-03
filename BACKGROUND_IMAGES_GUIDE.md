# Background Images Guide for Sample Coffee Shop Website

## 📍 **Where the Background Image Code is Located**

The background images are added in the `styles.css` file in **three specific sections** (lines 136-161):

---

## 🎨 **Key Changes Made**

### **1. Added Dark Overlay for Text Readability** (Lines 103-112)

```css
.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(44, 24, 16, 0.5); /* Dark overlay at 50% opacity */
  z-index: 1;
}
```

**What this does:**

- Creates a semi-transparent dark layer over the background image
- Ensures white text remains readable
- The `z-index: 1` places it above the background but below the content

### **2. Updated Content Z-Index** (Line 117)

```css
.hero-section .hero-content {
  max-width: 760px;
  animation: fadeInUp 1s ease;
  position: relative;
  z-index: 2; /* ← This ensures content appears above the overlay */
}
```

**What this does:**

- Ensures all text and buttons appear above the dark overlay
- Creates proper layering: Background Image → Overlay → Content

---

## 🖼️ **Background Image Code Locations**

### **Hero Section 1** - "Welcome to Sample Coffee Shop" (Lines 137-144)

```css
.hero-section.\\31 {
  /* Hero Section 1 - Welcome section - Coffee shop interior (NO gradient overlay) */
  /* Recommended local filename: images/clifford-VobvKmG-StA-unsplash.jpg */
  background-image: url("images/clifford-VobvKmG-StA-unsplash.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.hero-section.\\31::before {
  /* Overlay disabled for this section */
  background: transparent;
  pointer-events: none;
}
```

**Current Image:** Coffee shop interior/atmosphere (use `images/clifford-VobvKmG-StA-unsplash.jpg`)

---

### **Hero Section 2** - "More Than Just Coffee" (Lines 145-152)

```css
.hero-section.\\32 {
  /* Hero Section 2 - More Than Just Coffee - Coffee beans close-up */
  background-image: linear-gradient(
      rgba(111, 78, 55, 0.65),
      /* Coffee brown overlay at 65% opacity */ rgba(111, 78, 55, 0.65)
    ),
    url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80");
}
```

**Current Image:** Coffee beans close-up

---

### **Hero Section 3** - "Order Online" (Lines 154-161)

```css
.hero-section.\\33 {
  /* Hero Section 3 - Order Online - Coffee cup with latte art */
  background-image: linear-gradient(
      rgba(44, 24, 16, 0.6),
      /* Dark brown overlay at 60% opacity */ rgba(44, 24, 16, 0.6)
    ),
    url("https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=80");
}
```

**Current Image:** Coffee cup with latte art

---

## 🔧 **How to Change Background Images**

### **Option 1: Use Online Image URLs (Current Method)**

Replace the `url()` value with your image URL:

```css
.hero-section.\\31 {
  background-image: linear-gradient(
      rgba(44, 24, 16, 0.6),
      rgba(44, 24, 16, 0.6)
    ), url("YOUR_IMAGE_URL_HERE");
}
```

**Example:**

```css
url("https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80");
```

---

### **Option 2: Use Local Images**

If you have images in a folder (e.g., `images/` folder):

1. **Create an `images` folder** in your project directory
2. **Place your image files** there (e.g., `coffee-shop.jpg`, `coffee-beans.jpg`, `latte-art.jpg`)
3. **Update the CSS** with relative paths:

```css
.hero-section.\\31 {
  background-image: linear-gradient(
      rgba(44, 24, 16, 0.6),
      rgba(44, 24, 16, 0.6)
    ), url("images/coffee-shop.jpg");
}

.hero-section.\\32 {
  background-image: linear-gradient(
      rgba(111, 78, 55, 0.65),
      rgba(111, 78, 55, 0.65)
    ), url("images/coffee-beans.jpg");
}

.hero-section.\\33 {
  background-image: linear-gradient(
      rgba(44, 24, 16, 0.6),
      rgba(44, 24, 16, 0.6)
    ), url("images/latte-art.jpg");
}
```

---

## 🎛️ **How to Adjust the Overlay Darkness**

The overlay controls how dark the image appears. Adjust the opacity values:

```css
rgba(44, 24, 16, 0.6)  /* 0.6 = 60% opacity (darker) */
rgba(44, 24, 16, 0.4)  /* 0.4 = 40% opacity (lighter) */
rgba(44, 24, 16, 0.8)  /* 0.8 = 80% opacity (very dark) */
```

**Lower number = Lighter image (less dark overlay)**
**Higher number = Darker image (more dark overlay)**

---

## 📐 **Image Size Parameters**

The current URLs include size parameters:

- `w=1920` = Width of 1920 pixels (good for large screens)
- `q=80` = Quality at 80% (good balance of quality and file size)

You can adjust these:

- `w=1280` for smaller file sizes
- `q=90` for higher quality (larger file size)

---

## 🎨 **Color Overlay Options**

You can change the overlay color to match your brand:

```css
/* Dark brown (current) */
rgba(44, 24, 16, 0.6)

/* Coffee brown */
rgba(111, 78, 55, 0.6)

/* Black */
rgba(0, 0, 0, 0.6)

/* Custom color (e.g., dark blue) */
rgba(20, 30, 50, 0.6)
```

---

## 📝 **Quick Reference: Which Section is Which?**

| CSS Class            | HTML Class               | Section Name                  | Line Numbers |
| -------------------- | ------------------------ | ----------------------------- | ------------ |
| `.hero-section.\\31` | `class="hero-section 1"` | Welcome to Sample Coffee Shop | 137-144      |
| `.hero-section.\\32` | `class="hero-section 2"` | More Than Just Coffee         | 145-152      |
| `.hero-section.\\33` | `class="hero-section 3"` | Order Online                  | 154-161      |

---

## ✅ **Summary**

1. **Background images** are set in lines 137-161 of `styles.css`
2. **Dark overlay** is added via `::before` pseudo-element (lines 103-112)
3. **Content layering** is controlled by `z-index` values
4. **To change images:** Replace the `url()` value in the `background-image` property
5. **To adjust darkness:** Change the opacity value in `rgba()` (the last number)

---

## 🔍 **Testing Your Changes**

After updating the CSS:

1. Save the `styles.css` file
2. Refresh your browser (Ctrl + F5 for hard refresh)
3. Check all three hero sections to see the new images
4. Adjust overlay opacity if text is too hard/easy to read
