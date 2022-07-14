.PHONY: IDB1.log

ifeq ($(shell uname), Darwin)          # Apple
    PYTHON   := python3
    PIP      := pip3
    PYLINT   := pylint
    COVERAGE := coverage
    PYDOC    := pydoc3
    AUTOPEP8 := autopep8
    DOC := docker run -it -v $$(PWD):/usr/cs373 -w /usr/cs373 fareszf/python
else ifeq ($(shell uname -p), unknown) # Windows
    PYTHON   := python                 # on my machine it's python
    PIP      := pip3
    PYLINT   := pylint
    COVERAGE := coverage
    PYDOC    := python -m pydoc        # on my machine it's pydoc
    AUTOPEP8 := autopep8
    DOC := docker run -it -v /$$(PWD):/usr/cs373 -w //usr/cs373 fareszf/python
else                                   # UTCS
    PYTHON   := python3
    PIP      := pip3
    PYLINT   := pylint3
    COVERAGE := coverage
    PYDOC    := pydoc3
    AUTOPEP8 := autopep8
    DOC := docker run -it -v $$(PWD):/usr/cs373 -w /usr/cs373 fareszf/python
endif

IDB1.log:
	git log > IDB1.log

IDB2.log:
	git log > IDB2.log

IDB3.log:
	git log > IDB3.log

models.html:
	cd backend && $(PYDOC) -w models

main.html:
	cd backend && $(PYDOC) -w main

run:
	source launch_front & source launch_back

postman-tests:
	newman run GameHub.postman_collection.json