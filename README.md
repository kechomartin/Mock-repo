# Flower Shop

### 🌼 Phase 1: Core Layout

- [ ] **Navbar**
  - Logo, navigation links (Home, Categories, Contact)
  - Login/Sign Up buttons
  - Cart icon with item count

- [ ] **Hero Section**
  - Full-width promotional banner
  - Heading: “Delivering Joy, One Bouquet at a Time”
  - CTA: “Shop Now” button

- [ ] **Product Grid**
  - Product cards with image, name, price, and “Add to Cart” button
  - Responsive layout (1-4 columns based on screen size)

- [ ] **Footer**
  - Contact us 
  - Social media links (Instagram, Facebook, WhatsApp, Twitter)
  - Copyright 

---

### 🪻 Phase 2: UI Enhancements

- [ ] **Category Tabs**
  - Horizontally scrollable or grid display
  - Clicking filters the visible products by category

- [ ] **Cart Sidebar or Page**
  - Lists all added items with:
    - Quantity controls
    - Remove item button
    - Subtotal & Checkout button
  - Appears via icon click (can be floating or in navbar)

- [ ] **Responsive Design**
  - Ensure full functionality across:
    - Mobile (nav collapses, grid stacks)
    - Tablet
    - Desktop

---

### 🔐 Phase 3: Authentication (Optional)

- [ ] **Login Page/Modal**
  - Email + password
  - “Forgot password” link
  - Redirect if already logged in

- [ ] **Register Page/Modal**
  - Name, email, password
  - Optional phone number

- [ ] **Authentication State Handling**
  - Show/hide buttons or access based on login status
  - Protect checkout if not logged in

---

### 🛠️ Phase 4: Backend Integration (Optional)

- [ ] **Product Data Source**
  - Use dummy JSON initially
  - Later connect to a database (Supabase, Firebase, Express API, etc.)

- [ ] **Cart Persistence**
  - Store cart in localStorage or backend per user session

- [ ] **Checkout Functionality**
  - Minimal order form (name, delivery location, contact)
  - Simulate or send data to backend

---

**Notes:**
- Use TailwindCSS utility classes for fast styling.
- Keep components small and reusable.
- Test each phase before moving to the next.

