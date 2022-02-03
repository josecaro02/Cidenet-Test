# Cidenet-Test


### Requirements

- Python 3.8.10
- ANgular CLI 12.2.16

--- 

## Back-end

### Installation steps

1. Ensure you have python3 installed
2. Clone the repository
3. create a virtual environment using `virtualenv env`
4. Activate the virtual environment by running `source env/bin/activate`
5. Install the dependencies using `pip install -r requirements.txt`
6. Run docker to mysql db `docker-compose up`
* To stop use `docker-compose stop`
7. Go to folder `Cidenet-Test/backend`
8. Migrate existing db tables by running `python manage.py migrate`
9. Run the django collectstatic `python manage.py collectstatic`
10. Run the django development server using `python manage.py runserver`

### Access to admin

1. Go to folder `Cidenet-Test/backend`
2. Create super user `python manage.py createsuperuser`
3. Follow instructions
- e.g.

    | user | password | Description |
    | ----- | ----- | ------ |
    | cidenet | cidenet | Admin |

### Results backend

- Swagger: [127.0.0.1:8000](127.0.0.1:8000)
- Admin django: [127.0.1:8000/admin](127.0.1:8000/admin)

--- 

## Front-end

### Setup local

- npm install -g @angular/cli
### Installation steps
- npm install
- npm start

### Results frontend
- [127.0.0.1:4200](127.0.0.1:4200)

---

## Author 

[Jose David Caro](https://www.linkedin.com/in/josecarocantor/) |  [GitHub](https://github.com/josecaro02)
