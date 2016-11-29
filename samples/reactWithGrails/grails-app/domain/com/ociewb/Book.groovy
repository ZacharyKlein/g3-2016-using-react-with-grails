package com.ociewb

import grails.rest.Resource

@Resource(uri='/api/book')
class Book {

    String title
    String author

    static constraints = {
    }
}
