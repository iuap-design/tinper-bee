{% extends 'layout/layout.swig' %}

{% block css %}
    <link href="//tinper.org/node_modules/tinper-bee/assets/tinper-bee.css" type="text/css" rel="stylesheet" />
    {#<link href="/css/tinper-bee.css" type="text/css" rel="stylesheet" />#}
    {% if docId && isComponent==1 %}
        <link href="/{{docId}}/dist/demo.css" type="text/css" rel="stylesheet" />
    {% endif %}
    <link href="/css/navbar.css" type="text/css" rel="stylesheet" />
{% endblock%}

{% block script %}
    <script src="/console-polyfill/index.js"></script>
    <script src="/es5-shim/es5-shim.min.js"></script>
    <script src="/es5-shim/es5-sham.min.js"></script>
    <script src="/react/dist/react.min.js"></script>
    <script src="/react-dom/dist/react-dom.min.js"></script>
    {% if docId && isComponent==1 %}
        <script src="/{{docId}}/dist/demo.js"></script>
    {% endif %}
{% endblock %}

{% block content %}
<div class="page-container u-container example">
    <div class="u-row">
        {% include "common/sidebar.swig"%}
        <div class="u-col-xs-12 u-col-md-9">
            {% autoescape false %}
                {{ doc| }}
            {% endautoescape %}
        </div>
    </div>
</div>
{% endblock %}
