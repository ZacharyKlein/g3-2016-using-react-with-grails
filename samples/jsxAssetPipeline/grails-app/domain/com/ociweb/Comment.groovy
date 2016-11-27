package com.ociweb

import grails.rest.Resource

@Resource(uri = '/api/comments')
class Comment {

    String author
    String text

    static constraints = {
    }
}
