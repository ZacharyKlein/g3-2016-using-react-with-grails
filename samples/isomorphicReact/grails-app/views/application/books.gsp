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
    <div class="svg" role="presentation">

    </div>

    <section class="row colset-2-its">
        <iso:bundle path="dist/bundle-books.js" data="${[books: books]}" element="books"/>
    </section>
</div>


</body>
</html>
