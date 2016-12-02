{% extends 'layout/layout.swig' %}

{% block css %}
    <link href="//tinper.org/node_modules/tinper-bee/assets/tinper-bee.css" type="text/css" rel="stylesheet" />
    <link href="/{{docId}}/dist/demo.css" type="text/css" rel="stylesheet" />
{% endblock%}

{% block script %}
    <script src="/console-polyfill/index.js"></script>
    <script src="/es5-shim/es5-shim.min.js"></script>
    <script src="/es5-shim/es5-sham.min.js"></script>
    <script src="/react/dist/react-with-addons.js"></script>
    <script src="/react-dom/dist/react-dom.js"></script>
    <script src="/{{docId}}/dist/demo.js"></script>
{% endblock %}

{% block content %}
<div class="page-container u-container-fluid example">
    <div class="u-row">
        {% include "common/sidebar.swig"%}
        <div class="u-col-xs-12 u-col-md-9">
            {% autoescape false %}
                <h3>示例</h3>
                <div class="demo-block">
                    {{ demo| }}
                </div>
            {% endautoescape %}
            {% autoescape false %}
                {{ doc| }}
            {% endautoescape %}
        </div>
    </div>
</div>
{% endblock %}
