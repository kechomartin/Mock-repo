### 🌼 Phase 1: Core Layout
<img class="images" src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-2968-622f-a9b9-a3259f2e711e/raw?se=2025-06-17T20%3A21%3A49Z&sp=r&sv=2024-08-04&sr=b&scid=7f65528d-1d4a-5559-b2d5-9e93717163e3&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-17T18%3A42%3A34Z&ske=2025-06-18T18%3A42%3A34Z&sks=b&skv=2024-08-04&sig=ZJSPjicesPIqEoMz%2Bx7e29xzqnjnn0nJQKQXq3bpAWU%3D" style="border-radius: 4px; width: 100%; box-shadow: 2px 2px 8px rgba(0,0,0,0.1);"/>
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
  - Contact us .
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

