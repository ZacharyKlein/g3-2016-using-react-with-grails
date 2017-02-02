<%@ page import="grails.converters.JSON" %>
<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Welcome to Grails</title>
    <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />
</head>
<body>

<div id="content" role="main">
    <section class="row colset-2-its">
        <iso:javascript path="dist/bundle-books.js" data="${[books: bookInstanceList]}" element="books"/>
    </section>
</div>


</body>
</html>
