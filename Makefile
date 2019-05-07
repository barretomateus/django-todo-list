all: build migrate run

build:
	curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
	python3 get-pip.py --user
	pip3 install -r requirements.txt --user

migrate:
	python3 src/manage.py migrate --run-syncdb

run:
	python3 src/manage.py runserver
