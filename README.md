AI Document Generator

A full-stack, AI-powered web application that enables users to generate, refine, and export structured business documents using Google's Gemini AI. The platform supports both Microsoft Word (.docx) and PowerPoint (.pptx) formats with real-time editing capabilities.

 Features

- **User Authentication** - Secure registration and login with JWT tokens
- **AI Content Generation** - Powered by Google Gemini 2.5 Flash
- **Multiple Document Types** - Word documents and PowerPoint presentations
- **Real-time Editor** - ContentEditable interface with auto-save functionality
- **AI-Suggested Outlines** - Intelligent structure generation
- **Professional Export** - Formatted document generation with proper styling
- **Project Management** - Organize and manage multiple documents

 Tech Stack

 Backend
- **Flask** - Python web framework
- **SQLAlchemy** - Database ORM
- **MySQL** - Relational database
- **JWT** - Authentication system
- **Google Gemini AI** - Content generation

 Frontend
- **HTML5/CSS3** - Markup and styling
- **JavaScript** - Client-side functionality
- **Bootstrap 5** - Responsive UI framework
- **Jinja2** - Template engine

 Export Libraries
- **python-docx** - Word document generation
- **python-pptx** - PowerPoint presentation generation

Prerequisites

Before installation, ensure you have:
- Python 3.8 or higher
- MySQL Server
- Google Gemini API key

 Installation & Setup Steps

### 1. Clone the Repository
bash
git clone https://github.com/Pinaki044/AI-document-generator.git
cd AI-document-generator

Environment Variables Description:

DB_HOST - MySQL server hostname (usually 'localhost')
DB_PORT - MySQL server port (default: 3306)
DB_NAME - Database name for the application
DB_USER - MySQL username with database privileges
DB_PASSWORD - Password for the MySQL user
GEMINI_API_KEY - API key from Google AI Studio for Gemini AI
SECRET_KEY - Flask application secret key for session security
JWT_SECRET_KEY - Secret key for JWT token encoding/decoding


How to Run Backend & Frontend?

Running the Application
Navigate to the app directory: cd app
Start the Flask development server: python app.py
Access the application: Open your web browser
                        Go to: http://localhost:5000
                        The application will be running on port 5000

Usage Guide

 1. User Registration & Login
- Navigate to the application homepage
- Click "Register" to create a new account with email and password
- Existing users can login with their credentials
- Successful authentication redirects to the user dashboard

 2. Creating a New Project
- From the dashboard, click "New Project" button
- Enter a descriptive project title
- Select document type: Microsoft Word (.docx) or PowerPoint (.pptx)
- Provide the main topic/prompt (e.g., "Market Analysis of Electric Vehicles in 2025")
- Choose outline option:
  - **AI-Suggested Outline**: Let Gemini AI generate professional section headers automatically
  - **Manual Structure**: Define custom sections/slides with your own titles
- Click "Create & Start Generating" to proceed to the editor

 3. AI Content Generation
- In the editor interface, click "Generate Document" button
- The system uses Google Gemini AI to create content section-by-section
- Each section maintains context awareness for coherent document flow
- Generation progress is shown in real-time

 4. Content Refinement & Editing
- **Real-time Editing**: Click anywhere in the document to make direct edits
- **Auto-save Feature**: Changes are automatically saved every 0.5 seconds after typing stops
- **Full Regeneration**: Use "Regenerate" button to completely refresh all content while keeping structure
- **Manual Refinements**: Edit text directly as needed for precision

 5. Document Export
- Click "Download Document" button to export final content
- **Word Documents**: Exported as .docx with proper heading hierarchy and paragraph formatting
- **PowerPoint Presentations**: Exported as .pptx with slide titles and content placeholders
- Files are automatically named based on project title
- Download includes professional formatting and structure

 6. Project Management
- Return to dashboard to view all created projects
- Each project card shows document type and creation date
- Click "Open" on any project to resume editing


This README covers all the required sections with clear, step-by-step instructions that anyone can follow to set up and run the project! 
- Multiple projects can be created and managed simultaneously
