# COLORS LAMP Application

A small web application that lets users log in, add colors associated with their account, and search previously added colors. It was built as a learning exercise for working with a classic LAMP stack.

## Technologies Used

- Linux (remote server)
- Apache (web server)
- MySQL (relational database)
- PHP (API endpoints)
- HTML, CSS, JavaScript (front end)
- HTTP tools such as Postman/ARC (for testing)

## High‑Level Setup

### Server & stack
Use any Linux environment with Apache, MySQL, and PHP installed.

### Database
Create a database (e.g., COP4331) with Users and Colors tables. 
Insert at least one test user and some sample colors.

### Backend
Place the PHP API files (Login.php, AddColor.php, SearchColors.php) in an API‑accessible directory such as api/. 
Update each file’s database connection to match your local MySQL credentials.

### Frontend
Place index.html, colors.html, and supporting assets in a public web directory such as public/.

## How to Run and Access

### Front End
Serve the public/ directory with Apache (or another web server), then visit:
"http://your-domain.com"

### API Endpoints
The PHP files in api/ are accessed via POST requests, for example:

"http://your-domain.com/api/Login.php"
"http://your-domain.com/api/AddColor.php"
"http://your-domain.com/api/SearchColors.php"

Send JSON bodies with the expected fields (login, password, userId, color, search) using a tool like Postman or curl.

## Assumptions, Limitations, and AI Usage

### Assumptions
- A working LAMP environment is already available.
- The database schema matches what the PHP files expect.

### Limitations
- Minimal validation and security; not intended for production use.
- Simple, assignment‑level UI and API design.

### AI Usage
- AI was used to help draft and format this README.md.
- All code, configuration, and deployment steps were completed by the student following course materials.