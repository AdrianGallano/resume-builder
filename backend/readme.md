# Resume Builder API

<p>Access the documentation after running the server using your browser in this link</p>

Redoc Specification: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc) <br/>
Swagger Specification: [http://127.0.0.1:8000/swagger](http://127.0.0.1:8000/swagger)

## Installation
```
pip install -r requirements.txt
```
or
```
python -m pip install requirements.txt
```

## Configuration
create database
```
CREATE DATABASE yourdatabasename;
```
<p>create a .env file in your backend directory</p>
<p>add your database credentials, and a random secret key for development</p>

```
DB_NAME = yourdatabasename
DB_USER = yourusername
DB_PASSWORD = yourpassword
DB_HOST = yourdatabasehost
DB_PORT = yourdatabaseport
SECRET_KEY = yoursecretkey
```

## Run the server
```
cd backend
python manage.py migrate
python manage.py runserver
```

