package isomorphic.react

import com.ociweb.Book

class BootStrap {

    def init = { servletContext ->

        new Book(title: 'Definitive Guide to Grails', author: 'Jeff Brown').save()
        new Book(title: 'Grails in Action', author: 'Glenn Smith').save()
        new Book(title: 'Grails - A Quickstart Guide', author: 'Dave Klein').save()
    }
    def destroy = {
    }
}
