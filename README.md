Boiler template for React Django

Basic set up of React + Django application
DB not set up
To clone and get started

Navigate to desired directory
git clone https://github.com/KaiYun99/React-Django-web.git
cd react-django
python -m virtualenv "pyenv"
cd pyenv
cd Scripts
activate
cd.. (to react-django)
cd backend
pip install -r requirements.txt
python manage.py migrate --run-syncdb (To create exisiting table)
python manage.py runserver
Frontend

cd frontend
npm install
npm start
When adding dependencies
Backend --> pip freeze > requirements.txt
Frontend --> npm install --save <package_name>