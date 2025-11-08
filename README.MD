# 🛒 ShopHub - Django E-Commerce Application

A full-featured e-commerce web application built with Django, featuring product catalogs, shopping cart, user authentication, and order management.

![Django](https://img.shields.io/badge/Django-5-green.svg)
![Python](https://img.shields.io/badge/Python-3.11+-blue.svg)


## ✨ Features

### Customer Features
- 🏪 **Product Catalog**: Browse products by categories
- 🔍 **Search**: Find products by name or description
- 🛒 **Shopping Cart**: Add, update, and remove items
- 👤 **User Authentication**: Register, login, and manage account
- 📦 **Order Management**: Place orders and track order history
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile

### Admin Features
- 📊 **Dashboard**: Manage products, categories, and orders
- 📸 **Image Upload**: Add product images
- 📈 **Inventory Management**: Track stock levels
- 🎯 **Order Processing**: Update order status and payment status
- 👥 **User Management**: View and manage customers

### Technical Features
- 🔐 **Session-based Cart**: Cart persists for anonymous users
- 💾 **Database-backed Storage**: All data stored in SQLite/PostgreSQL
- 🎨 **Modern UI**: Clean and intuitive interface
- ⚡ **Fast Performance**: Optimized queries and caching
- 🔒 **Security**: CSRF protection, secure authentication

## 🖼️ Screenshots

### Home Page
Browse all products with category filtering.
![Alt text](screenshots/homepage.png)

### Product Detail
View detailed product information with add to cart functionality.
![Alt text](screenshots/homepage.png)
### Shopping Cart
Review items, update quantities, and proceed to checkout.
![Alt text](screenshots/checkout.png)
### Order History
Track all your orders in one place.
![Alt text](screenshots/orderspage.png)

## 🛠️ Tech Stack

- **Backend**: Django 4.2+
- **Database**: SQLite (Development) / PostgreSQL (Production)
- **Frontend**: HTML5, CSS3, JavaScript
- **Image Processing**: Pillow
- **Authentication**: Django Auth System
- **Session Management**: Django Sessions

## 📦 Installation

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- Virtual environment (recommended)

### Step 1: Clone the Repository

```bash
git https://github.com/dalyzhee/Ecommerce-Django.git
cd Ecommerce-Django
```

### Step 2: Create Virtual Environment

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies

```bash
pip install django pillow
```

Or if you have a requirements.txt:

```bash
pip install -r requirements.txt
```

### Step 4: Configure Database

```bash
# Run migrations
python manage.py makemigrations
python manage.py migrate
```

### Step 5: Create Superuser

```bash
python manage.py createsuperuser
```

Follow the prompts to create an admin account.

### Step 6: Create Required Directories

```bash
# Windows
mkdir media
mkdir static\images

# Mac/Linux
mkdir -p media
mkdir -p static/images
```

### Step 7: Run Development Server

```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000/` in your browser.




## 🚀 Usage

### For Customers

1. **Browse Products**: Visit the home page to see all products
2. **Search**: Use the search bar to find specific products
3. **Add to Cart**: Click "Add to Cart" on any product
4. **Register**: Create an account to checkout
5. **Checkout**: Fill in shipping information and place order
6. **Track Orders**: View order history in "My Orders"

### For Administrators

1. **Access Admin**: Go to `http://127.0.0.1:8000/admin/`
2. **Login**: Use your superuser credentials
3. **Add Categories**: Create product categories
4. **Add Products**: Add products with images, prices, and stock
5. **Manage Orders**: Update order status and payment status
6. **View Reports**: Monitor sales and inventory

### Adding Sample Data

```bash
# Access Django shell
python manage.py shell
```

```python
from shop.models import Category, Product

# Create categories
electronics = Category.objects.create(
    name="Electronics",
    slug="electronics",
    description="Electronic devices and gadgets"
)

# Create products
Product.objects.create(
    category=electronics,
    name="Laptop",
    slug="laptop",
    description="High-performance laptop",
    price=999.99,
    stock=10,
    available=True
)
```

## 📁 Project Structure

```
ecommerce-project/
├── ecommerce/              # Project configuration
│   ├── __init__.py
│   ├── settings.py         # Main settings
│   ├── urls.py            # Root URL configuration
│   ├── wsgi.py
│   └── asgi.py
├── shop/                   # Main application
│   ├── migrations/        # Database migrations
│   ├── __init__.py
│   ├── admin.py           # Admin interface
│   ├── apps.py
│   ├── models.py          # Data models
│   ├── views.py           # View functions
│   ├── urls.py            # App URL patterns
│   └── tests.py
├── templates/             # HTML templates
│   ├── base.html          # Base template
│   └── shop/
│       ├── product_list.html
│       ├── product_detail.html
│       ├── cart_detail.html
│       ├── checkout.html
│       ├── order_detail.html
│       ├── order_list.html
│       ├── search.html
│       ├── login.html
│       └── register.html
├── static/                # Static files
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── media/                 # User uploads
│   └── products/
├── manage.py
├── requirements.txt
└── README.md
```

## 🗃️ Models Overview

### Category
```python
- name: CharField (category name)
- slug: SlugField (URL-friendly name)
- description: TextField (category description)
- created_at: DateTimeField (creation timestamp)
```

### Product
```python
- category: ForeignKey (related category)
- name: CharField (product name)
- slug: SlugField (URL-friendly name)
- description: TextField (product description)
- price: DecimalField (product price)
- image: ImageField (product image)
- stock: PositiveIntegerField (available quantity)
- available: BooleanField (product availability)
- created_at: DateTimeField (creation timestamp)
- updated_at: DateTimeField (last update timestamp)
```

### Cart
```python
- user: OneToOneField (related user, nullable)
- session_key: CharField (for anonymous users)
- created_at: DateTimeField (creation timestamp)
- updated_at: DateTimeField (last update timestamp)
```

### CartItem
```python
- cart: ForeignKey (related cart)
- product: ForeignKey (related product)
- quantity: PositiveIntegerField (item quantity)
```

### Order
```python
- user: ForeignKey (customer)
- first_name: CharField
- last_name: CharField
- email: EmailField
- address: CharField
- postal_code: CharField
- city: CharField
- status: CharField (pending/processing/shipped/delivered/cancelled)
- created_at: DateTimeField (order date)
- updated_at: DateTimeField (last update)
- paid: BooleanField (payment status)
```

### OrderItem
```python
- order: ForeignKey (related order)
- product: ForeignKey (related product)
- price: DecimalField (price at purchase time)
- quantity: PositiveIntegerField (item quantity)
```

## 🔗 API Endpoints

### Public Routes
- `GET /` - Product list
- `GET /category/<slug>/` - Products by category
- `GET /product/<slug>/` - Product detail
- `GET /search/?q=<query>` - Search products
- `GET /login/` - Login page
- `GET /register/` - Registration page

### Protected Routes (Login Required)
- `GET /cart/` - View cart
- `POST /cart/add/<id>/` - Add to cart
- `POST /cart/update/<id>/` - Update cart item
- `POST /cart/remove/<id>/` - Remove from cart
- `GET /checkout/` - Checkout page
- `POST /checkout/` - Place order
- `GET /orders/` - Order list
- `GET /order/<id>/` - Order detail
- `GET /logout/` - Logout

### Admin Routes
- `/admin/` - Admin dashboard

## 📮 Contact

**Developer**: Levis Odhiambo  
**Email**: leviceodhiambo@gmail.com  
**GitHub**: [@yourusername](https://github.com/dalyzhee)  


---

Made with ❤️ using Django

**Happy Shopping! 🛍️**