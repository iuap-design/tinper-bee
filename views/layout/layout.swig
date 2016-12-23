<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{% block title %}iuap design{% endblock %}</title>
    <link rel="icon" href="logos/favicon.png" type="image/png" sizes="16x16">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Destiny Multipurpose Landing Page Template">
    <meta name="keywords" content="iuapdesign, iuap, 企业框架,前端框架,前端解决方案">
    <link rel="icon" href="//tinper.org/assets/images/favicon.png" type="image/png" sizes="16x16">
    {% block head%}
        {#<link href="//design.yyuap.com/static/uui/latest/css/u.css" type="text/css" rel="stylesheet" />#}
        <link href="//cdn.jsdelivr.net/highlight.js/9.8.0/styles/default.min.css" type="text/css" rel="stylesheet" />
        <link href="/css/atom-one-dark.css" type="text/css" rel="stylesheet" />
        {#<link href="/css/tinper-bee.css" type="text/css" rel="stylesheet" />#}
    {% endblock%}
    {% block css %}{% endblock%}
</head>

<body>

{% include "../common/header.swig"%}
{% include "../common/nav.swig"%}
{% block content %}{% endblock %}

{% include "../common/footer.swig"%}


<script src="//cdn.jsdelivr.net/highlight.js/9.8.0/highlight.min.js"></script>
<script>
    hljs.initHighlightingOnLoad();
</script>
{% block script %}
    <!-- Jquery and Js Plugins -->
{% endblock %}
</body>
</html>
