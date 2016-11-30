package isomorphic.react

import com.ociweb.Book

class BootStrap {

    def init = { servletContext ->

        new Book(title: 'Groovy in Action', author: 'Dierk Koenig, Paul King').save()
        new Book(title: 'Grails in Action', author: 'Glenn Smith').save()
        new Book(title: 'Grails - A Quickstart Guide', author: 'Dave Klein').save()
    }
    def destroy = {
    }
}
