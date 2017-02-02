

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(controller: 'application', action: 'books')

        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
