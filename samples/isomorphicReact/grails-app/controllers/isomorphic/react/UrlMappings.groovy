package isomorphic.react

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view: '/index')

        "/books"(controller: 'application', action: 'books')

        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
