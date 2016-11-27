package jsxassetpipeline

import com.ociweb.Comment

class BootStrap {

    def init = { servletContext ->

        new Comment(author: 'Dave Estes', text: 'This is a comment!').save()
        new Comment(author: 'Zachary Klein', text: 'This is another comment!').save()
    }
    def destroy = {
    }
}
