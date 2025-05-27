# Prime Dental Care - Hospital Management System

A comprehensive dental clinic management system built with React. This web application provides a complete solution for dental clinics to manage appointments, patients, and services while offering an intuitive interface for clients to book and manage their dental appointments.

## 📋 Features

### For Patients
- **User Registration & Authentication**: Secure account creation and login
- **Appointment Booking**: Easy-to-use interface for scheduling dental appointments
- **Service Information**: Detailed descriptions of all dental services offered
- **Doctor Profiles**: Information about clinic dentists and their specializations
- **Client Dashboard**: View and manage personal appointments

### For Administrators
- **Admin Dashboard**: Comprehensive overview of clinic operations
- **Appointment Management**: View and manage all patient appointments
- **Emergency Response**: Efficient handling of emergency dental cases

### General Features
- **Responsive Design**: Fully responsive UI that works on all device sizes
- **Interactive Maps**: Location information with Google Maps integration
- **FAQ Section**: Answers to common patient questions
- **Testimonials**: Real patient experiences and feedback
- **Contact Form**: Easy communication with the clinic

## 🚀 Installation

Follow these steps to set up the project locally:

1. **Clone the repository**
   git clone https://github.com/yourusername/hospital_management.git
   cd hospital_management

2. **Install dependencies**
   npm install

3. **Start the development server**
   npm start

4. **Open your browser Navigate to**
   http://localhost:3000

## 💻 Technologies Used

- **Frontend**: React, React Router
- **Styling**: Bootstrap 5, CSS3, Font Awesome
- **State Management**: React Hooks
- **Data Storage**: LocalStorage (client-side)
- **Deployment**: Supports deployment on Netlify, Vercel, etc.

## 📁 Project Structure

hospital_management/
├── public/                 # Public assets
│   └── index.html          # HTML template
├── src/                    # Source files
│   ├── assets/             # Static assets
│   │   ├── css/            # CSS files
│   │   └── images/         # Image files
│   ├── components/         # Reusable components
│   │   ├── AppointmentForm.js
│   │   ├── EmergencyRibbon.js
│   │   ├── Footer.js
│   │   ├── LiveChat.js
│   │   └── Navbar.js
│   ├── pages/              # Page components
│   │   ├── services/       # Service-specific pages
│   │   │   ├── GeneralDentistry.js
│   │   │   └── CosmeticDentistry.js
│   │   ├── About.js
│   │   ├── AdminDashboard.js
│   │   ├── Contact.js
│   │   └── Home.js
│   ├── App.js              # Main app component
│   └── index.js            # Application entry point
├── index.css               # Global styles
├── .gitignore              # Git ignore file
├── package.json            # npm package config
├── README.md               # This file
└── LICENSE                 # MIT License


## 🔍 Usage

# Patient Flow
    -Browse available dental services
    -View doctor profiles and expertise
    -Register an account or login
    -Book appointments for specific services
    -View and manage appointments from the client dashboard
# Admin Flow
    -Login with admin credentials
    -View overview of all appointments
    -Manage appointments (confirm, reschedule, cancel)
    -Update service and doctor information

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
