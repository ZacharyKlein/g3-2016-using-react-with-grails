package com.ociweb

import grails.test.mixin.TestFor
import org.junit.Ignore
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(Book)
class BookSpec extends Specification {

    def setup() {
    }

    def cleanup() {
    }

    @Ignore
    void "test something"() {
        expect:"fix me"
            true == false
    }
}
