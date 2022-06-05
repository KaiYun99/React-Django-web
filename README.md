Boiler template for React Django

Basic set up of React + Django application
- DB not set up
- To clone and get started

Navigate to desired directory
1. git clone https://github.com/KaiYun99/React-Django-web.git
2. cd react-django
3. python -m virtualenv "pyenv" 
4. cd pyenv
5. cd Scripts
6. activate
7. cd.. (to react-django)
8. cd backend
9. pip install -r requirements.txt
10. python manage.py migrate --run-syncdb (To create exisiting table)
11. python manage.py runserver

Frontend
1. cd frontend
2. npm install
3. npm start

When adding dependencies
<br/>
Backend --> pip freeze > requirements.txt
<br />
Frontend --> npm install --save <package_name>
