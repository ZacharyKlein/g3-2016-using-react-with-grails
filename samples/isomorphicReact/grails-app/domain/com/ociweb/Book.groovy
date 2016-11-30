package com.ociweb

import grails.rest.Resource

@Resource(uri='/api/books')
class Book {

    String title
    String author

    static constraints = {
    }
}
